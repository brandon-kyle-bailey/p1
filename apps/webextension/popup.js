if (typeof browser === "undefined") {
  var browser = chrome;
}

const CONFIG = {
  version: "0.0.1",
  loginUrl: "http://localhost:3000/api/core/v1/auth/login",
}

const form = document.getElementById("loginForm");
const statusElement = document.getElementById("status");

async function handleLogin(email, password) {
  const res = await fetch(CONFIG.loginUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username: email, password }),
  });

  if (!res.ok) {
    throw new Error("Invalid credentials or server error");
  }

  const result = await res.json();
  const { access_token, refresh_token } = result;

  if (!access_token || !refresh_token) {
    throw new Error("Missing tokens in server response");
  }

  await browser.storage.local.set({ access_token, refresh_token });

  return true;
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  statusElement.style.color = "black";
  statusElement.textContent = "Logging in...";

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    await handleLogin(email, password);
    statusElement.style.color = "green";
    statusElement.textContent = "Login successful!";
  } catch (err) {
    statusElement.style.color = "red";
    statusElement.textContent = "Login failed: " + err.message;
  }
});
