import type { ClassValue } from "clsx";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateVideoEmbedUrl(site: string, key: string) {
  switch (site.toLowerCase()) {
    case "youtube":
      return `https://www.youtube.com/embed/${key}`;
    case "vimeo":
      return `https://player.vimeo.com/video/${key}`;
    case "dailymotion":
      return `https://www.dailymotion.com/embed/video/${key}`;
    case "twitch":
      // Assuming 'key' is a video ID. For live streams, you might need a different format
      return `https://player.twitch.tv/?video=${key}&parent=${window.location.hostname}`;
    case "aol":
      return `https://delivery.vidible.tv/htmlembed/pid=${key}/`;
    case "hulu":
      // Hulu doesn't offer a simple embed URL. You might need to use their official embed method
      console.warn("Hulu embedding requires special handling");
      return null;
    case "netflix":
      // Netflix doesn't allow direct embedding of their content
      console.warn("Netflix does not support direct video embedding");
      return null;
    case "crunchyroll":
      // Crunchyroll's embed system is more complex and may require additional parameters
      console.warn("Crunchyroll embedding requires special handling");
      return null;
    default:
      console.warn(`Unsupported video site: ${site}`);
      return null;
  }
}
