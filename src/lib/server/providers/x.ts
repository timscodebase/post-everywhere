// src/lib/server/providers/x.ts
import { type PostPayload, SocialProvider } from "./base";

export class XProvider extends SocialProvider {
	readonly platformId = "x";

	async post(_accessToken: string, payload: PostPayload) {
		// Replace with actual fetch to https://api.twitter.com/2/tweets later
		console.log(`[X_API] Posting to X: ${payload.text}`);
		return { platformPostId: `x_${Math.random().toString(36).slice(2)}` };
	}
}

export const xProvider = new XProvider();
