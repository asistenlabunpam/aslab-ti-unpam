import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "2-digit",
  };
  return date.toLocaleDateString("en-US", options);
}

export function decodeHtmlEntities(text: string): string {
  if (typeof text !== "string") {
    return text;
  }

  const htmlEntities: Record<string, string> = {
    "&nbsp;": " ",
    "&#8217;": "'",
    "&#8220;": '"',
    "&#8221;": '"',
    "&quot;": '"',
    "&amp;": "&",
    "&lt;": "<",
    "&gt;": ">",
  };

  let decodedText = text;

  Object.entries(htmlEntities).forEach(([entity, char]) => {
    decodedText = decodedText.replace(new RegExp(entity, "g"), char);
  });

  return decodedText;
}

export function convertEncode(text: string): string {
  if (typeof text !== "string") {
    return text;
  }

  let convertedText = text;

  convertedText = convertedText.replace(/&nbsp;|\u00A0/g, " ");
  convertedText = convertedText.replace(/&#8217;/g, "’");
  convertedText = convertedText.replace(/&#8220;/g, "“");
  convertedText = convertedText.replace(/&#8221;/g, "”");

  return convertedText;
}

export function operational() {
  const now = new Date();
  const currentHour = now.getHours();
  const currentMinute = now.getMinutes();
  const startHour = 11;
  const startMinute = 0;
  const endHour = 23;
  const endMinute = 0;
  const currentTime = currentHour * 60 + currentMinute;
  const startTime = startHour * 60 + startMinute;
  const endTime = endHour * 60 + endMinute;
  return currentTime >= startTime && currentTime <= endTime;
}