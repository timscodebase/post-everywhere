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

  // Returns the URL to redirect the user for OAuth
  abstract getAuthUrl(state: string): string;

  // Handles the code from the redirect and returns tokens/user info
  abstract handleCallback(code: string): Promise<AuthResult>;

  // Publishes the actual content
  abstract post(
    accessToken: string,
    payload: PostPayload
  ): Promise<{ platformPostId: string }>;

  // Optional: refresh tokens if they expire
  async refresh(refreshToken: string): Promise<Partial<AuthResult>> {
    throw new Error("Refresh not implemented for this provider");
  }
}
