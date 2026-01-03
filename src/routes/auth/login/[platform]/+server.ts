import { redirect } from "@sveltejs/kit";
import { providers } from "$lib/server/providers";
import type { PlatformId } from "$lib/server/providers";

export const GET = async ({ params, cookies }) => {
  const platform = params.platform as PlatformId;
  const provider = providers[platform];

  if (!provider) throw redirect(302, "/settings/connections");

  const state = crypto.randomUUID();
  // Store state in cookie to verify during callback
  cookies.set(`${platform}_oauth_state`, state, {
    path: "/",
    httpOnly: true,
    maxAge: 60 * 10, // 10 minutes
    sameSite: "lax",
  });

  const url = provider.getAuthUrl(state);
  throw redirect(302, url);
};
