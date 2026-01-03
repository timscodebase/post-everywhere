// src/lib/server/providers/base.ts
export interface PostPayload {
  text: string;
  media?: string[];
}

export abstract class SocialProvider {
  abstract readonly platformId: string;
  abstract post(
    accessToken: string,
    payload: PostPayload
  ): Promise<{ platformPostId: string }>;
}
