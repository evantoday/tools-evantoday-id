export interface DownloadRequest {
  url: string;
}

export interface MediaItem {
  url: string;
  type: "video" | "image" | "audio";
  quality?: string;
  filename: string;
}

export interface DownloadResponse {
  success: boolean;
  platform: string;
  media: MediaItem[];
  error?: string;
}

export type Platform =
  | "tiktok"
  | "instagram"
  | "youtube"
  | "twitter"
  | "facebook"
  | "pinterest"
  | "snapchat"
  | "threads";
