// optional page signals
const payload = { url: location.href, title: document.title };
browser.runtime.sendMessage({ type: "page_signal", payload });
