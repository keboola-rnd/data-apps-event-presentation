const BASE_URL = import.meta.env.BASE_URL;

export function resolvePublicPath(path: string): string {
  if (path.startsWith("http") || path.startsWith("data:")) return path;
  if (path.startsWith(BASE_URL)) return path;
  return `${BASE_URL}${path.startsWith("/") ? path.slice(1) : path}`;
}
