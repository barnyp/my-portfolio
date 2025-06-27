import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * A utility for constructing class name strings conditionally
 * and merging Tailwind CSS classes without style conflicts
 * 
 * @param inputs - Class values to be merged
 * @returns A string of merged class names
 * 
 * @example
 * // Returns "bg-blue-500 hover:bg-blue-700 text-white p-4"
 * cn("bg-blue-500", isHoverable && "hover:bg-blue-700", ["text-white", "p-4"])
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Format a date string into a readable format
 * 
 * @param dateString - ISO date string to format
 * @returns Formatted date string
 * 
 * @example
 * // Returns "January 1, 2023"
 * formatDate("2023-01-01T12:00:00Z")
 */
export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

/**
 * Calculate reading time for text content
 * 
 * @param content - Text content to calculate reading time for
 * @param wordsPerMinute - Words per minute reading speed (default: 225)
 * @returns Reading time in minutes as a number
 * 
 * @example
 * // Returns reading time like 2.4 (minutes)
 * calculateReadingTime("Lorem ipsum dolor sit amet...")
 */
export function calculateReadingTime(content: string, wordsPerMinute: number = 225): number {
  const words = content.trim().split(/\s+/).length;
  const time = words / wordsPerMinute;
  return time; 
}

/**
 * Truncate text to a specified length
 * 
 * @param text - Text to truncate
 * @param maxLength - Maximum length (default: 100)
 * @returns Truncated text with ellipsis if needed
 * 
 * @example
 * // Returns "Lorem ipsum dolor sit amet..." 
 * truncateText("Lorem ipsum dolor sit amet consectetur adipiscing elit", 20)
 */
export function truncateText(text: string, maxLength: number = 100): string {
  if (text.length <= maxLength) return text;
  return `${text.substring(0, maxLength)}...`;
}
