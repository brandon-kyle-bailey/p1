if (typeof browser === "undefined") {
  var browser = chrome;
}

// Track visibility changes
document.addEventListener("visibilitychange", () => {
  browser.runtime.sendMessage({
    type: "visibility_change",
    payload: {
      url: location.href,
      title: document.title,
      visibilityState: document.visibilityState
    }
  });
});
