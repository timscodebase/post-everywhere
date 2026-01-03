import { XProvider } from "./x";
// import { FacebookProvider } from './facebook';

export const providers = {
  x: new XProvider(),
  // facebook: new FacebookProvider(),
} as const;

export type Platform = keyof typeof providers;
