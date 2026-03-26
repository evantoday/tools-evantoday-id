import type { DownloadResponse, MediaItem } from "./types";
import { detectPlatform } from "./url-validator";

export async function fetchMedia(url: string): Promise<DownloadResponse> {
  const platform = detectPlatform(url);

  if (!platform) {
    return {
      success: false,
      platform: "unknown",
      media: [],
      error: "Unsupported or invalid URL",
    };
  }

  const apiUrl = (
    typeof import.meta !== "undefined" &&
    (import.meta as any).env?.COBALT_API_URL
  ) || "https://api.cobalt.tools";

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        url,
        downloadMode: "auto",
        filenameStyle: "basic",
      }),
    });

    const data = await response.json() as Record<string, any>;

    if (data.status === "error") {
      return {
        success: false,
        platform,
        media: [],
        error: data.error || "Unknown error from cobalt",
      };
    }

    const media: MediaItem[] = [];

    if (data.status === "redirect" || data.status === "tunnel") {
      media.push({
        url: data.url,
        type: inferType(data.url),
        filename: data.filename || generateFilename(platform, inferType(data.url)),
      });
    } else if (data.status === "picker" && Array.isArray(data.picker)) {
      for (const item of data.picker) {
        media.push({
          url: item.url,
          type: item.type === "photo" ? "image" : (item.type || inferType(item.url)),
          filename: item.filename || generateFilename(platform, item.type === "photo" ? "image" : (item.type || inferType(item.url))),
        });
      }
    }

    return {
      success: true,
      platform,
      media,
    };
  } catch (err) {
    return {
      success: false,
      platform,
      media: [],
      error: err instanceof Error ? err.message : "Failed to fetch media",
    };
  }
}

function inferType(url: string): "video" | "image" | "audio" {
  const lower = url.toLowerCase();
  if (/\.(jpg|jpeg|png|gif|webp)/.test(lower)) return "image";
  if (/\.(mp3|m4a|ogg|wav|opus)/.test(lower)) return "audio";
  return "video";
}

function generateFilename(platform: string, type: "video" | "image" | "audio"): string {
  const ext = type === "image" ? "jpg" : type === "audio" ? "mp3" : "mp4";
  const ts = Date.now();
  return `${platform}_${ts}.${ext}`;
}
