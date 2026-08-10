/** True when the path is an absolute http(s) URL (e.g. GitHub), not a site-local PDF. */
export function isExternalUrl(path: string): boolean {
  return path.startsWith('http://') || path.startsWith('https://');
}

/**
 * Same PDF with different #page= often does not reload in an iframe.
 * Append a per-item query before the hash so navigation remounts cleanly.
 */
export function pdfSrcWithCacheBust(
  path: string,
  id: string,
  queryParam: string,
): string {
  if (!path || isExternalUrl(path)) return path;
  const [pathAndQuery, hash = ''] = path.split('#');
  const sep = pathAndQuery.includes('?') ? '&' : '?';
  return `${pathAndQuery}${sep}${queryParam}=${encodeURIComponent(id)}${hash ? `#${hash}` : ''}`;
}
