import { type PostPayload, SocialProvider } from "./base";

export class LinkedInProvider extends SocialProvider {
	readonly platformId = "linkedin";

	getAuthUrl(state: string) {
		return `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=YOUR_LI_ID&redirect_uri=YOUR_URL&state=${state}&scope=w_member_social`;
	}

	async post(accessToken: string, payload: PostPayload) {
		return { platformPostId: `li_${Math.random().toString(36).slice(2)}` };
	}
}
