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
  console.log("Initializing background script");

  const stored = await browser.storage.local.get("deviceFingerprint");
  deviceFingerprint = stored.deviceFingerprint || crypto.randomUUID();
  if (!stored.deviceFingerprint) {
    await browser.storage.local.set({ deviceFingerprint });
  }

  browser.tabs.onActivated.addListener(onTabActivated);
  browser.tabs.onUpdated.addListener(onTabUpdated);
  browser.windows.onFocusChanged.addListener(onWindowFocusChanged);
}

async function createActivity(tab) {

  const browserName = getBrowserName();

  return {
    id: crypto.randomUUID(),
    name: browserName,
    title: tab.title || "",
    expression: tab.url || "",
    startTime: new Date().toISOString()
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

async function handleTab(tab) {
  const newActivity = await createActivity(tab);

  if (!isSameActivity(previousActivity, newActivity) && previousActivity) {
    previousActivity.endTime = new Date().toISOString();
    sendActivity(previousActivity);
  }

  previousActivity = newActivity;
}

async function sendActivity(activity) {
  try {
    const stored = await browser.storage.local.get(["accountId","userId", "token"]);
    const { token, userId, accountId } = stored;
    if (!token || !accountId || !userId) {
      console.warn("No token, accountId or userId skipping activity send")
      return;
    }
    const requestConfig = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      keepalive: true,
      body: JSON.stringify({ 
        ...activity,
        source: "extension",
        externalActivityId: activity.id,
        accountId,
        userId,
        deviceFingerprint
      })
    }
    const result = await fetch("http://localhost:3000/api/core/v1/activities/extension", requestConfig);
    console.log(result.status, requestConfig)
  } catch (err) {
    console.error("Failed to send activity:", err);
  }
}

init();
