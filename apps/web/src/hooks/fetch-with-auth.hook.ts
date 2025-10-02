import { auth } from "@/lib/auth";
export default async function fetchWithAuth(
  url: string,
  options: RequestInit = {},
) {
  const session = await auth();
  if (!session?.user) {
    return;
  }
  const accessToken = session.user.accessToken;

  let res = await fetch(url, {
    ...options,
    headers: { ...options.headers, Authorization: `Bearer ${accessToken}` },
  });

  if (res.status === 401) {
    // Access token expired → refresh using refresh token in body
    const refreshRes = await fetch(
      "http://localhost:3000/api/core/v1/auth/refresh",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ refresh_token: session.user.refreshToken }),
      },
    );

    if (!refreshRes.ok) throw new Error("Unable to refresh token");

    const { access_token: newAccessToken, refresh_token: newRefreshToken } =
      await refreshRes.json();

    // Update client session
    session.user.accessToken = newAccessToken;
    session.user.refreshToken = newRefreshToken; // rotate stored refresh token

    // Retry original request
    res = await fetch(url, {
      ...options,
      headers: {
        ...options.headers,
        Authorization: `Bearer ${newAccessToken}`,
      },
    });
  }

  return res;
}
