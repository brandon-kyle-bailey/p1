
// options.js
async function login(email, password) {
  const res = await fetch("http://localhost:3000/api/core/v1/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  });
  if (!res.ok) throw new Error("Login failed");
  const data = await res.json();
  // store token + accountId
  await browser.storage.local.set({ token: data.token, accountId: data.accountId });
}
