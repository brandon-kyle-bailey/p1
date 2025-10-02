if (typeof browser === "undefined") {
  var browser = chrome;
}

const browserName = getBrowserName();
let previousActivity = null;
let deviceFingerprint = null;

function getBrowserName() {
  const ua = navigator.userAgent;
  if (ua.includes("Firefox/")) return "Firefox";
  if (ua.includes("Edg/")) return "Edge";
  if (ua.includes("OPR/") || ua.includes("Opera/")) return "Opera";
  if (ua.includes("Chrome/")) return "Chrome";
  if (ua.includes("Safari/")) return "Safari";
  return "Unknown";
}

async function init() {
  console.log("Initializing extension");
  const stored = await browser.storage.local.get("deviceFingerprint");
  deviceFingerprint = stored.deviceFingerprint || crypto.randomUUID();
  if (!stored.deviceFingerprint) {
    await browser.storage.local.set({ deviceFingerprint });
  }
  browser.tabs.onActivated.addListener(onTabActivated);
  browser.tabs.onUpdated.addListener(onTabUpdated);
  browser.windows.onFocusChanged.addListener(onWindowFocusChanged);
  browser.runtime.onMessage.addListener(onVisibilityChanged);
  browser.idle.setDetectionInterval(60);
  browser.idle.onStateChanged.addListener(onIdleStateChanged)
}

async function createActivity(tab) {
  const id = crypto.randomUUID();
  return {
    id,
    name: browserName,
    title: tab.title || "",
    expression: tab.url || "",
    startTime: new Date().toISOString(),
    source: "extension",
    externalActivityId: id,
    deviceFingerprint
  };
}

function isSameActivity(a, b) {
  if (!a || !b) return false;
  return a.name === b.name &&
    a.title === b.title &&
    a.expression === b.expression;
}

async function onTabActivated(activeInfo) {
  const tab = await browser.tabs.get(activeInfo.tabId);
  handleTab(tab);
}

async function onTabUpdated(tabId, changeInfo, tab) {
  if (changeInfo.url || changeInfo.title) {
    handleTab(tab);
  }
}

async function onWindowFocusChanged(windowId) {
  if (windowId === browser.windows.WINDOW_ID_NONE) return;
  const [tab] = await browser.tabs.query({ active: true, windowId });
  if (tab) handleTab(tab);
}

async function onIdleStateChanged(state) {
  const [tab] = await browser.tabs.query({ active: true, currentWindow: true });
  if (!tab) return;
  if (state === "idle" || state === "locked") {
    if (previousActivity && previousActivity.expression === tab.url) {
      previousActivity.endTime = new Date().toISOString();
      sendActivity(previousActivity);
      previousActivity = null;
    }
  } else if (state === "active") {
    handleTab(tab);
  }
}

async function onVisibilityChanged(msg, sender) {
  if (!sender.tab) return;
  if (msg.type === "visibility_change") {
    const tab = sender.tab;
    if (msg.payload.visibilityState === "hidden") {
      if (previousActivity && previousActivity.expression === tab.url) {
        previousActivity.endTime = new Date().toISOString();
        sendActivity(previousActivity);
        previousActivity = null;
      }
    } else if (msg.payload.visibilityState === "visible") {
      handleTab(tab);
    }
  }
}

async function handleTab(tab) {
  const newActivity = await createActivity(tab);
  if (!isSameActivity(previousActivity, newActivity) && previousActivity ) {
    previousActivity.endTime = new Date().toISOString();
    sendActivity(previousActivity);
  }
  previousActivity = newActivity;
}

async function enqueueActivity(activity) {
  const stored = await browser.storage.local.get("activityQueue");
  const queue = stored.activityQueue || [];
  queue.push(activity);
  await browser.storage.local.set({ activityQueue: queue });
}

async function flushQueue() {
  const stored = await browser.storage.local.get("activityQueue");
  const queue = stored.activityQueue || [];
  if (!queue.length) return;

  const successIndices = [];

  for (let i = 0; i < queue.length; i++) {
    const activity = queue[i];
    let attempt = 0;
    let success = false;
    let delay = 1000;

    while (attempt < 5 && !success) {
      try {
        await postActivity(activity);
        success = true;
        successIndices.push(i);
      } catch (err) {
        attempt++;
        console.error(`Failed to send activity (attempt ${attempt}):`, err);
        if (attempt < 5) {
          await new Promise(res => setTimeout(res, delay));
          delay *= 2;
        }
      }
    }
  }
  const newQueue = queue.filter((_, idx) => !successIndices.includes(idx));
  await browser.storage.local.set({ activityQueue: newQueue });
}


let refreshInProgress

async function refreshTokens(refresh_token) {
  try {
    if (refreshInProgress) return refreshInProgress;
    refreshInProgress = (async () => {
      const refreshResult = await fetch("http://localhost:3000/api/core/v1/auth/refresh", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ refresh_token }),
        keepalive: true,
      });
      if (!refreshResult.ok) throw new Error("Unable to refresh token");
      const { access_token, refresh_token: newRefreshToken } = await refreshResult.json();
      await browser.storage.local.set({ access_token, refresh_token: newRefreshToken });
    })();
    await refreshInProgress;
    refreshInProgress = null;
  } catch (error) {
    refreshInProgress = null;
    await browser.storage.local.remove(["access_token", "refresh_token"]);
    throw error;
  }
}

async function postActivity(activity) {
  const stored = await browser.storage.local.get(["accountId", "userId", "access_token", "refresh_token"]);
  const { access_token, refresh_token, userId, accountId } = stored;
  if (!access_token || !refresh_token || !accountId || !userId) {
    console.warn("No access_token, refresh_token, accountId or userId skipping activity send")
    return;
  }
  const response = await fetch("http://localhost:3000/api/core/v1/incoming-activities/extension", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${access_token}`
    },
    keepalive: true,
    body: JSON.stringify({...activity, accountId, userId})
  });

  if (response.status === 401) {
    await refreshTokens(refresh_token);
    const stored = await browser.storage.local.get(["access_token"]);
    return await fetch("http://localhost:3000/api/core/v1/incoming-activities/extension", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${stored.access_token}`
      },
      keepalive: true,
      body: JSON.stringify({...activity, accountId, userId})
    });
  }
  return response;

}

async function sendActivity(activity) {
  try {
    return await postActivity(activity)
  } catch (err) {
    console.warn("Network failure, storing activity locally");
    await enqueueActivity(activity);
  }
}

async function periodicFlush() {
  while (true) {
    try {
      await flushQueue();
    } catch (err) {
      console.error("Flush error:", err);
    }
    await new Promise(res => setTimeout(res, 30000));
  }
}

init();
periodicFlush();
flushQueue();
