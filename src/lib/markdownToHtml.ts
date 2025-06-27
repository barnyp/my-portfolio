import { remark } from "remark";
import html from "remark-html";
import { VFile } from "vfile";

/**
 * Error class for markdown processing failures
 */
export class MarkdownProcessingError extends Error {
  constructor(message: string, public originalError?: unknown) {
    super(message);
    this.name = 'MarkdownProcessingError';
  }
}

/**
 * Converts markdown string to HTML
 * 
 * @param markdown - Raw markdown string to convert
 * @returns HTML string converted from markdown
 * @throws {MarkdownProcessingError} If markdown processing fails
 * 
 * @example
 * ```typescript
 * const htmlContent = await markdownToHtml('# Hello world');
 * // Returns: '<h1>Hello world</h1>'
 * ```
 */
export default async function markdownToHtml(markdown: string): Promise<string> {
  try {
    if (!markdown || typeof markdown !== 'string') {
      return '';
    }
    
    const result: VFile = await remark()
      .use(html, { sanitize: true }) // Enable sanitization for security
      .process(markdown);
      
    return result.toString();
  } catch (error) {
    throw new MarkdownProcessingError('Failed to process markdown', error);
  }
} 