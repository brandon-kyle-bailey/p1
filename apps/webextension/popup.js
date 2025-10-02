if (typeof browser === "undefined") {
  var browser = chrome;
}

const form = document.getElementById("loginForm");
const statusElement = document.getElementById("status");

function parseJwt(token) {
  try {
    const payload = token.split('.')[1];
    const decoded = atob(payload.replace(/-/g, '+').replace(/_/g, '/'));
    return JSON.parse(decoded);
  } catch (err) {
    console.error("Failed to parse JWT:", err);
    return null;
  }
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  statusElement.textContent = "Logging in...";
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const res = await fetch("http://localhost:3000/api/core/v1/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username:email, password })
    });

    if (!res.ok) throw new Error("Login failed");
    const result = await res.json();
    const access_token = result.access_token;
    const refresh_token = result.refresh_token;
    const payload = parseJwt(access_token);
    const accountId = payload?.accountId || "anonymous";
    const userId = payload?.sub || "anonymous";

    await browser.storage.local.set({ access_token, refresh_token, userId, accountId });
    statusElement.style.color = "green";
    statusElement.textContent = "Login successful!";
  } catch (err) {
    statusElement.style.color = "red";
    statusElement.textContent = "Login failed: " + err.message;
  }
});
