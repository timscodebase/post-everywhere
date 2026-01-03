import { XProvider } from './x';

// Ensure the class is instantiated as an object
export const providers = {
	x: new XProvider(),
	// Add placeholder objects for others to prevent crashes while developing
	linkedin: null,
	facebook: null
} as const;

export type PlatformId = keyof typeof providers;