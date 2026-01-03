// src/lib/server/providers/x.ts
import { type PostPayload, SocialProvider } from "./base";

export class XProvider extends SocialProvider {
	readonly platformId = "x";

	getAuthUrl(state: string) {
		// REQUIRED: Replace 'YOUR_X_CLIENT_ID' with the ID from your X Dev Portal
		const clientId = "YOUR_X_CLIENT_ID";

		// FIXED: Added 'scope' parameter. Scopes are required for X OAuth 2.0.
		const scopes = encodeURIComponent(
			"tweet.read tweet.write users.read offline.access",
		);

		return `https://twitter.com/i/oauth2/authorize?response_type=code&client_id=${clientId}&state=${state}&code_challenge=challenge&code_challenge_method=plain&scope=${scopes}`;
	}

	async post(accessToken: string, payload: PostPayload) {
		console.log(`[X_API] Posting to X: ${payload.text}`);
		return { platformPostId: `x_${Math.random().toString(36).slice(2)}` };
	}
}

export const xProvider = new XProvider();
