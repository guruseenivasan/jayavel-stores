/**
 * WhatsApp Enquiry Generator for Jayavel Stores, Madurai
 * 
 * Automatically attaches the product name, details, and product image URL
 * so the store owner receives the exact product photo and details when a customer enquires.
 */

export interface WhatsAppProductDetails {
  image?: string;
  price?: number | string;
  tamilTitle?: string;
  variant?: string;
  sku?: string;
  productUrl?: string;
}

export const JAYAVEL_WHATSAPP_NUMBER = "919894198916";

/**
 * Resolves any relative or CDN image path to an absolute URL so WhatsApp can generate rich photo previews.
 */
export function resolveFullImageUrl(imagePath?: string): string {
  if (!imagePath) return "";
  // Already an absolute URL
  if (imagePath.startsWith("http://") || imagePath.startsWith("https://")) {
    return imagePath;
  }
  // Browser environment: use actual origin (e.g. domain or localhost)
  if (typeof window !== "undefined" && window.location?.origin) {
    const cleanPath = imagePath.startsWith("/") ? imagePath : `/${imagePath}`;
    return `${window.location.origin}${cleanPath}`;
  }
  // Server-side / fallback
  const cleanPath = imagePath.startsWith("/") ? imagePath : `/${imagePath}`;
  return `https://jayavelstores.com${cleanPath}`;
}

/**
 * Generates a direct WhatsApp enquiry link with the product name, details, and product photo link.
 * 
 * @param productName Name of the product being enquired
 * @param whatsappNumber Store WhatsApp number (defaults to "919894198916")
 * @param detailsOrImage Optional details object OR direct image URL string
 * @param optionalImage Optional product image URL if details object was provided
 * @returns Fully formatted and encoded WhatsApp link (https://wa.me/...)
 * 
 * @example
 * // 1. Direct with image URL:
 * getWhatsAppLink(product.name, "919894198916", product.image)
 * 
 * // 2. With rich options:
 * getWhatsAppLink(product.title, "919894198916", {
 *   image: product.image,
 *   price: product.price,
 *   tamilTitle: product.tamilTitle,
 * })
 */
export function getWhatsAppLink(
  productName: string,
  whatsappNumber: string = JAYAVEL_WHATSAPP_NUMBER,
  detailsOrImage?: WhatsAppProductDetails | string,
  optionalImage?: string
): string {
  // Normalize WhatsApp number with country code 91
  let cleanNumber = (whatsappNumber || JAYAVEL_WHATSAPP_NUMBER).replace(/[^0-9]/g, "");
  if (cleanNumber.length === 10) {
    cleanNumber = "91" + cleanNumber;
  }

  // Extract details and image
  let details: WhatsAppProductDetails = {};
  let rawImage = "";

  if (typeof detailsOrImage === "string") {
    rawImage = detailsOrImage;
  } else if (detailsOrImage && typeof detailsOrImage === "object") {
    details = detailsOrImage;
    if (details.image) {
      rawImage = details.image;
    }
  }

  if (!rawImage && optionalImage) {
    rawImage = optionalImage;
  }

  // 1. Greeting & Product Title
  let message = `Vanakkam Jayavel Stores! I would like to enquire about: ${productName}`;

  if (details.tamilTitle) {
    message += ` (${details.tamilTitle})`;
  }

  if (details.price !== undefined) {
    const formattedPrice =
      typeof details.price === "number"
        ? `₹${details.price.toLocaleString("en-IN")}`
        : details.price;
    message += ` - Price: ${formattedPrice}`;
  }

  if (details.variant) {
    message += ` [${details.variant}]`;
  }

  if (details.sku) {
    message += ` (SKU: ${details.sku})`;
  }

  // 2. Product Image Preview Link (Triggers WhatsApp Photo Card)
  if (rawImage) {
    const fullImageUrl = resolveFullImageUrl(rawImage);
    message += `\n\n📸 Product Photo: ${fullImageUrl}`;
  }

  // 3. Product Page Link (if provided)
  if (details.productUrl) {
    message += `\n🔗 Product Link: ${details.productUrl}`;
  }

  message += `\n\nPlease confirm availability and doorstep delivery details.`;

  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
}
