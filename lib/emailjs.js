import emailjs from "@emailjs/browser";

export const EMAILJS_SERVICE_ID =
  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_vl1eruf";
export const EMAILJS_TEMPLATE_ID =
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_zde6kgr";
export const EMAILJS_PUBLIC_KEY =
  process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "f0k4_0lBXgMTlyygb";

/**
 * Validate an email address format
 * @param {string} email
 * @returns {boolean}
 */
export function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(String(email || "").trim());
}

/**
 * Sends an email using EmailJS with full parameter mapping and error handling
 * @param {Object} options
 * @param {string} options.name - Submitter name
 * @param {string} options.email - Submitter email
 * @param {string} [options.phone] - Submitter phone number
 * @param {string} [options.service] - Service / Consultation topic
 * @param {string} [options.message] - Message / details
 * @param {string} [options.formName] - Form title/context
 * @param {string} [options.subject] - Custom subject line
 * @returns {Promise<any>}
 */
export async function sendEmail({
  name,
  email,
  phone = "",
  service = "",
  message = "",
  formName = "Form Submission",
  subject = "",
}) {
  const trimmedName = String(name || "").trim();
  const trimmedEmail = String(email || "").trim();
  const trimmedPhone = String(phone || "").trim();
  const trimmedService = String(service || "").trim();
  const trimmedMessage = String(message || "").trim();

  if (!trimmedName) {
    throw new Error("Please enter your full name.");
  }

  if (!trimmedEmail) {
    throw new Error("Please enter your email address.");
  }

  if (!isValidEmail(trimmedEmail)) {
    throw new Error("Please enter a valid email address.");
  }

  const generatedSubject =
    subject ||
    (trimmedService
      ? `${formName}: ${trimmedService} - ${trimmedName}`
      : `${formName} from ${trimmedName}`);

  // Comprehensive variable mapping matching template {{name}}, {{email}}, etc.
  // along with compatibility aliases to guarantee replacement
  const templateParams = {
    // Primary inspected template variables
    name: trimmedName,
    email: trimmedEmail,
    phone: trimmedPhone || "Not provided",
    service: trimmedService || "General",
    message: trimmedMessage || "No additional message provided",
    subject: generatedSubject,

    // Additional compatibility fields
    from_name: trimmedName,
    from_email: trimmedEmail,
    reply_to: trimmedEmail,
    phone_number: trimmedPhone || "Not provided",
    project_details: trimmedMessage || "No additional message provided",
    form_name: formName,
    form_type: formName,
    submission_time: new Date().toLocaleString(),
  };

  try {
    const result = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      {
        publicKey: EMAILJS_PUBLIC_KEY,
      }
    );
    return result;
  } catch (error) {
    // Check if error is due to template ID prefix difference
    const errorText = String(error?.text || error?.message || "");
    const isTemplateNotFound =
      errorText.toLowerCase().includes("template id not found") ||
      error?.status === 400;

    if (isTemplateNotFound) {
      const fallbackTemplateId = EMAILJS_TEMPLATE_ID.startsWith("template_")
        ? EMAILJS_TEMPLATE_ID.replace(/^template_/, "")
        : `template_${EMAILJS_TEMPLATE_ID}`;

      try {
        const fallbackResult = await emailjs.send(
          EMAILJS_SERVICE_ID,
          fallbackTemplateId,
          templateParams,
          {
            publicKey: EMAILJS_PUBLIC_KEY,
          }
        );
        return fallbackResult;
      } catch (fallbackError) {
        console.error("EmailJS fallback failed:", fallbackError);
        const detailedError = new Error(
          fallbackError?.text ||
          error?.text ||
          error?.message ||
          "Failed to send email via EmailJS."
        );
        detailedError.status = error?.status;
        detailedError.text = fallbackError?.text || error?.text;
        throw detailedError;
      }
    }

    const cleanError = new Error(
      error?.text ||
      error?.message ||
      "Failed to send email via EmailJS."
    );
    cleanError.status = error?.status;
    cleanError.text = error?.text;
    throw cleanError;
  }
}
