
// popup.js
const form = document.getElementById("loginForm");
const status = document.getElementById("status");

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
  status.textContent = "Logging in...";
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
    const token = result.access_token;
    const payload = parseJwt(token);
    const accountId = payload?.accountId || "anonymous";
    const userId = payload?.sub || "anonymous";

    await browser.storage.local.set({ token, userId, accountId });
    status.style.color = "green";
    status.textContent = "Login successful!";
  } catch (err) {
    status.style.color = "red";
    status.textContent = "Login failed: " + err.message;
  }
});
