// src/lib/server/providers/index.ts
import { XProvider } from "./x";
// import { FacebookProvider } from './facebook';

export const providers = {
	x: new XProvider(),
	// facebook: new FacebookProvider(),
} as const;

export type PlatformId = keyof typeof providers;
