import { error, redirect } from "@sveltejs/kit";
import type { PlatformId } from "$lib/server/providers";
import { providers } from "$lib/server/providers";

export const GET = async ({ params, cookies }) => {
	const platform = params.platform as PlatformId;
	const provider = providers[platform];

	// Safety check: if provider is missing or null, don't crash
	if (!provider) {
		throw error(404, `Provider for ${platform} not implemented yet.`);
	}

	const state = crypto.randomUUID();

	cookies.set(`${platform}_oauth_state`, state, {
		path: "/",
		httpOnly: true,
		maxAge: 60 * 10,
		sameSite: "lax",
	});

	// Now this will only run if provider is valid
	const url = provider.getAuthUrl(state);
	throw redirect(302, url);
};
