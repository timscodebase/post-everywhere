// src/lib/server/providers/x.ts
import { SocialProvider, type AuthResult, type PostPayload } from "./base";
import { env } from "$env/dynamic/private";

export class XProvider extends SocialProvider {
  readonly platformId = "x";

  getAuthUrl(state: string): string {
    const rootUrl = "https://twitter.com/i/oauth2/authorize";
    const options = {
      response_type: "code",
      client_id: env.X_CLIENT_ID || "",
      redirect_uri: env.X_REDIRECT_URI || "",
      scope: "tweet.read tweet.write users.read offline.access",
      state,
      code_challenge: "challenge", // Use proper PKCE in production
      code_challenge_method: "plain",
    };
    return `${rootUrl}?${new URLSearchParams(options).toString()}`;
  }

  async handleCallback(code: string): Promise<AuthResult> {
    // Example: Exchange code for tokens using fetch()
    return {
      platformUserId: "x-user-123",
      platformUsername: "x_handle",
      accessToken: "mock_access_token",
      refreshToken: "mock_refresh_token",
      expiresAt: new Date(Date.now() + 7200 * 1000),
    };
  }

  async post(accessToken: string, payload: PostPayload) {
    console.log(`[X API] Posting: ${payload.text}`);
    return { platformPostId: "tweet_999" };
  }
}
