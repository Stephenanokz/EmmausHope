import { Resend } from "resend";

/**
 * Shared Resend client.
 * Set RESEND_API_KEY in your environment (.env.local) once you
 * have a Resend account and verified domain.
 */
export const resend = new Resend(process.env.RESEND_API_KEY);

/** The email address that receives form submissions. */
export const RECIPIENT_EMAIL = "info@emmaushopefoundation.org";

/**
 * The sender address. Use "onboarding@resend.dev" while testing
 * and switch to your verified domain later, e.g.
 * "noreply@emmaushopefoundation.org"
 */
export const SENDER_EMAIL =
  process.env.RESEND_FROM_EMAIL ?? "Emmaus Hope Foundation <onboarding@resend.dev>";
