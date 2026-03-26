import type { Platform } from "./types";

const PLATFORM_HOSTS: Record<string, Platform> = {
  "tiktok.com": "tiktok",
  "vm.tiktok.com": "tiktok",
  "instagram.com": "instagram",
  "youtube.com": "youtube",
  "youtu.be": "youtube",
  "m.youtube.com": "youtube",
  "twitter.com": "twitter",
  "x.com": "twitter",
  "facebook.com": "facebook",
  "fb.watch": "facebook",
  "m.facebook.com": "facebook",
  "pinterest.com": "pinterest",
  "pin.it": "pinterest",
  "snapchat.com": "snapchat",
  "threads.net": "threads",
};

export function detectPlatform(url: string): Platform | null {
  let parsed: URL;
  try {
    parsed = new URL(url);
  } catch {
    return null;
  }

  const hostname = parsed.hostname.replace(/^www\./, "");

  for (const [host, platform] of Object.entries(PLATFORM_HOSTS)) {
    if (hostname === host || hostname.endsWith(`.${host}`)) {
      return platform;
    }
  }

  return null;
}
