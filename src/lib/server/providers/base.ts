// src/lib/server/providers/base.ts

export interface PostPayload {
  text: string;
  media?: string[];
}

export interface AuthResult {
  platformUserId: string;
  platformUsername: string;
  accessToken: string;
  refreshToken?: string;
  expiresAt?: Date;
}

export abstract class SocialProvider {
  abstract readonly platformId: string;

  // Generates the OAuth redirect URL
  abstract getAuthUrl(state: string): string;

  // Processes the OAuth callback to get tokens
  abstract handleCallback(code: string): Promise<AuthResult>;

  // Sends the post to the specific platform API
  abstract post(
    accessToken: string,
    payload: PostPayload
  ): Promise<{ platformPostId: string }>;

  // Refreshes tokens if supported
  async refresh(refreshToken: string): Promise<Partial<AuthResult>> {
    throw new Error(`Refresh not implemented for ${this.platformId}`);
  }
}
