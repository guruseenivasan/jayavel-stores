/**
 * Helper to ensure image URLs resolve correctly across both root and nested Next.js routes
 */
export function formatProductImageUrl(img?: string): string {
  if (!img) return "/logo.png";
  if (img.startsWith("http://") || img.startsWith("https://") || img.startsWith("data:")) {
    return img;
  }
  return img.startsWith("/") ? img : `/${img}`;
}
