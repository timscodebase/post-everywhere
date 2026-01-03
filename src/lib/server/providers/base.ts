// src/lib/server/providers/base.ts
export interface PostPayload {
	text: string;
	media?: string[];
}

export abstract class SocialProvider {
	abstract readonly platformId: string;
	// Initiates the OAuth flow by providing the platform's login URL
	abstract getAuthUrl(state: string): string;
	// Handles the actual posting logic
	abstract post(accessToken: string, payload: PostPayload): Promise<{ platformPostId: string }>;
}