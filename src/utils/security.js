/**
 * Frontend Security & Input Sanitization Utilities
 */

const ALLOWED_DEMO_PATHS = new Set([
  '/demo/cafe',
  '/demo/barbershop',
  '/demo/company',
  '/demo/travel',
]);

/**
 * Strip control characters and angle brackets, collapse whitespace, and cap length.
 */
export function sanitizeText(value, maxLength = 120) {
  if (typeof value !== 'string') return '';
  return value
    .replace(/[\u0000-\u001F\u007F<>]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, maxLength);
}

/**
 * Normalize and validate phone numbers (digits only, 8-15 chars).
 */
export function sanitizePhone(value) {
  if (typeof value !== 'string') return '';
  return value.replace(/[^\d]/g, '').slice(0, 15);
}

export function isValidPhone(value) {
  const digits = sanitizePhone(value);
  return digits.length >= 8 && digits.length <= 15;
}

/**
 * Validate internal demo routes before rendering in iframe or navigating.
 */
export function isSafeDemoPath(path) {
  return typeof path === 'string' && ALLOWED_DEMO_PATHS.has(path);
}

/**
 * Validate WhatsApp destination URL before window.open.
 */
export function isValidWhatsAppUrl(url) {
  try {
    const parsed = new URL(url);
    return parsed.protocol === 'https:' && parsed.hostname === 'wa.me';
  } catch {
    return false;
  }
}
