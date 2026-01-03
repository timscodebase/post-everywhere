import { FacebookProvider } from "./facebook";
import { LinkedInProvider } from "./linkedin";
import { XProvider } from "./x";

export const providers = {
	x: new XProvider(),
	linkedin: new LinkedInProvider(),
	facebook: new FacebookProvider(),
} as const;

export type PlatformId = keyof typeof providers;
