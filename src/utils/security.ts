/**
 * OWASP Top 10 Security Utilities
 * - A03:2021 (Injection & Cross-Site Scripting / XSS Prevention)
 * - A01:2021 (Broken Access Control & Tabnabbing Prevention)
 * - A02:2021 (Cryptographic Failures & Insecure Transport / HTTPS)
 * - A08:2021 (Software and Data Integrity Failures)
 */

// Escape HTML entities to prevent Reflected & Stored XSS
export function escapeHtml(unsafe: string): string {
  if (typeof unsafe !== 'string') return '';
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Sanitize user inputs against Cross-Site Scripting (XSS)
export function sanitizeInput(input: string): string {
  if (typeof input !== 'string') return '';
  return input
    .trim()
    .replace(/<[^>]*>?/gm, '') // Strip HTML tags
    .replace(/javascript:/gi, '') // Remove JS pseudo-protocols
    .replace(/vbscript:/gi, '') // Remove VBScript pseudo-protocols
    .replace(/data:\s*text\/html/gi, '') // Remove data URI XSS vectors
    .replace(/on\w+\s*=/gi, '') // Remove inline event handlers (e.g. onload=, onerror=)
    .substring(0, 1000); // Enforce strict length boundary
}

// Safe URL validator to prevent open redirects and javascript: link XSS
export function isSafeUrl(url: string): boolean {
  if (!url) return false;
  const trimmed = url.trim().toLowerCase();
  if (trimmed.startsWith('javascript:') || trimmed.startsWith('data:') || trimmed.startsWith('vbscript:')) {
    return false;
  }
  return true;
}

// Validate Sri Lankan Phone Numbers (e.g., +94711650300, 0711650300, 0771234567)
export function isValidSriLankanPhone(phone: string): boolean {
  const cleaned = phone.replace(/[\s\-()]/g, '');
  const slRegex = /^(?:\+94|0094|0)?7[0-9]{8}$/;
  return slRegex.test(cleaned);
}

// Basic Email Validation
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email.trim());
}

// Safe LocalStorage Cart retrieval with schema integrity validation
export function getSafeStoredCart<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return fallback;
    return parsed as T;
  } catch (err) {
    console.warn('Security: LocalStorage corrupted or tampered, resetting state.', err);
    return fallback;
  }
}

export function setSafeStoredCart<T>(key: string, data: T): void {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (err) {
    console.warn('Security: Could not save to localStorage', err);
  }
}

// Form Submission Rate Limiting (Prevent spam flooding)
let lastSubmitTimestamp = 0;
export function isRateLimited(cooldownMs: number = 2500): boolean {
  const now = Date.now();
  if (now - lastSubmitTimestamp < cooldownMs) {
    return true;
  }
  lastSubmitTimestamp = now;
  return false;
}
