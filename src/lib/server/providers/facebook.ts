import { type PostPayload, SocialProvider } from "./base";

export class FacebookProvider extends SocialProvider {
	readonly platformId = "facebook";

	getAuthUrl(state: string) {
		return `https://www.facebook.com/v18.0/dialog/oauth?client_id=YOUR_FB_ID&redirect_uri=YOUR_URL&state=${state}&scope=publish_video`;
	}

	async post(accessToken: string, payload: PostPayload) {
		return { platformPostId: `fb_${Math.random().toString(36).slice(2)}` };
	}
}
