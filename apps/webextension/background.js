if (typeof browser === "undefined") {
  var browser = chrome;
}

let browserName = getBrowserName();
let previousActivity = null;
let deviceFingerprint = null;

// ================== Browser Detection ==================
function getBrowserName() {
  const ua = navigator.userAgent;
  if (ua.includes("Firefox/")) return "Firefox";
  if (ua.includes("Edg/")) return "Edge";
  if (ua.includes("OPR/") || ua.includes("Opera/")) return "Opera";
  if (ua.includes("Chrome/")) return "Chrome";
  if (ua.includes("Safari/")) return "Safari";
  return "Unknown";
}

// ================== Initialization ==================
async function init() {
  const stored = await browser.storage.local.get("deviceFingerprint");
  deviceFingerprint = stored.deviceFingerprint || crypto.randomUUID();
  if (!stored.deviceFingerprint) {
    await browser.storage.local.set({ deviceFingerprint });
  }

  // Event listeners
  browser.tabs.onActivated.addListener(onTabActivated);
  browser.tabs.onUpdated.addListener(onTabUpdated);
  browser.windows.onFocusChanged.addListener(onWindowFocusChanged);
  browser.runtime.onMessage.addListener(onVisibilityChanged);

  browser.idle.setDetectionInterval(60);
  browser.idle.onStateChanged.addListener(onIdleStateChanged);
}

// ================== Activity Management ==================
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

async function handleTab(tab) {
  const newActivity = await createActivity(tab);
  if (!isSameActivity(previousActivity, newActivity) && previousActivity) {
    previousActivity.endTime = new Date().toISOString();
    sendActivity(previousActivity);
  }
  previousActivity = newActivity;
}

// ================== Event Handlers ==================
async function onTabActivated(activeInfo) {
  const tab = await browser.tabs.get(activeInfo.tabId);
  handleTab(tab);
}

async function onTabUpdated(_tabId, changeInfo, tab) {
  if (changeInfo.url || changeInfo.title) {
    handleTab(tab);
  }
}

async function onWindowFocusChanged(windowId) {
  if (windowId === browser.windows.WINDOW_ID_NONE) {
    if (previousActivity) {
      previousActivity.endTime = new Date().toISOString();
      sendActivity(previousActivity);
      previousActivity = null;
    }
    return;
  }
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

  const tab = sender.tab;

  if (msg.type === "visibility_change") {
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

// ================== Queue Management ==================
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

// ================== Token Management ==================
let refreshInProgress;

async function refreshTokens(refresh_token) {
  try {
    if (refreshInProgress) return refreshInProgress;
    refreshInProgress = (async () => {
      const refreshResult = await fetch("http://localhost:3000/api/core/v1/auth/refresh", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ refresh_token }),
        keepalive: true
      });

      if (!refreshResult.ok) throw new Error("Unable to refresh token");
      const { access_token, refresh_token: newRefreshToken } = await refreshResult.json();
      await browser.storage.session.set({ access_token, refresh_token: newRefreshToken });
    })();

    await refreshInProgress;
    refreshInProgress = null;
  } catch (error) {
    refreshInProgress = null;
    await browser.storage.session.remove(["access_token", "refresh_token"]);
    throw error;
  }
}

// ================== JWT Parsing ==================
function parseJwt(token) {
  try {
    const base64Url = token.split('.')[1];
    if (!base64Url) return null;

    // Base64url decode
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const padded = base64.padEnd(base64.length + (4 - base64.length % 4) % 4, '=');
    const decoded = atob(padded);
    // Convert to JSON
    return JSON.parse(decoded);
  } catch (err) {
    console.error("Failed to parse JWT safely:", err);
    return null;
  }
}

// ================== Posting Activities ==================
async function postActivity(activity) {
  const stored = await browser.storage.session.get(["access_token", "refresh_token"]);
  const { access_token, refresh_token } = stored;

  if (!access_token || !refresh_token) {
    console.warn("Missing tokens, skipping activity send");
    return;
  }

  const payload = parseJwt(access_token);
  if (!payload || !payload.sub || !payload.accountId) {
    console.warn("Invalid access token payload, skipping activity send");
    return;
  }

  const userId = payload.sub;
  const accountId = payload.accountId;

  const response = await fetch("http://localhost:3000/api/core/v1/incoming-activities/extension", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${access_token}`
    },
    keepalive: true,
    body: JSON.stringify({ ...activity, accountId, userId })
  });

  if (response.status === 401) {
    await refreshTokens(refresh_token);
    const updated = await browser.storage.session.get(["access_token"]);
    return fetch("http://localhost:3000/api/core/v1/incoming-activities/extension", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${updated.access_token}`
      },
      keepalive: true,
      body: JSON.stringify({ ...activity, accountId, userId })
    });
  }

  return response;
}

async function sendActivity(activity) {
  try {
    return await postActivity(activity);
  } catch (err) {
    console.warn("Network failure, storing activity locally");
    await enqueueActivity(activity);
  }
}

// ================== Periodic Flush ==================
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

// ================== Start ==================
init();
periodicFlush();
flushQueue();
