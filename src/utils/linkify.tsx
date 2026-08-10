import { ReactNode } from 'react';

const URL_PATTERN = /(https?:\/\/[^\s]+)/g;

/** Turn http(s) URLs inside plain text into clickable anchors. */
export default function renderTextWithLinks(text: string): ReactNode {
  const parts = text.split(URL_PATTERN);
  return parts.map((part) => {
    if (/^https?:\/\//.test(part)) {
      return (
        <a key={part} href={part} target="_blank" rel="noopener noreferrer">
          {part}
        </a>
      );
    }
    return part;
  });
}
