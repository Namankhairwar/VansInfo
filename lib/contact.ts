export interface ContactFormData {
  name: string
  email: string
  mobile: string
  message: string
}

export interface ContactApiSuccessResponse {
  success: true
  message: string
}

export interface ContactApiErrorResponse {
  success: false
  error: string
  fieldErrors?: Partial<Record<keyof ContactFormData, string>>
}

export type ContactApiResponse =
  | ContactApiSuccessResponse
  | ContactApiErrorResponse

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const mobileRegex = /^[+]?[0-9()\-\s]{7,20}$/

export function validateContactFormData(
  input: unknown,
):
  | { success: true; data: ContactFormData }
  | {
      success: false
      error: string
      fieldErrors: Partial<Record<keyof ContactFormData, string>>
    } {
  if (!input || typeof input !== "object") {
    return {
      success: false,
      error: "Invalid request body.",
      fieldErrors: {},
    }
  }

  const rawData = input as Partial<Record<keyof ContactFormData, unknown>>

  const data: ContactFormData = {
    name: typeof rawData.name === "string" ? rawData.name.trim() : "",
    email: typeof rawData.email === "string" ? rawData.email.trim() : "",
    mobile: typeof rawData.mobile === "string" ? rawData.mobile.trim() : "",
    message:
      typeof rawData.message === "string" ? rawData.message.trim() : "",
  }

  const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {}

  if (!data.name) {
    fieldErrors.name = "Full name is required."
  } else if (data.name.length < 2) {
    fieldErrors.name = "Full name must be at least 2 characters."
  }

  if (!data.email) {
    fieldErrors.email = "Email address is required."
  } else if (!emailRegex.test(data.email)) {
    fieldErrors.email = "Please enter a valid email address."
  }

  if (!data.mobile) {
    fieldErrors.mobile = "Mobile number is required."
  } else if (!mobileRegex.test(data.mobile)) {
    fieldErrors.mobile = "Please enter a valid mobile number."
  }

  if (!data.message) {
    fieldErrors.message = "Message is required."
  } else if (data.message.length < 10) {
    fieldErrors.message = "Message must be at least 10 characters."
  } else if (data.message.length > 5000) {
    fieldErrors.message = "Message must be 5000 characters or less."
  }

  if (Object.keys(fieldErrors).length > 0) {
    return {
      success: false,
      error: "Please correct the highlighted fields and try again.",
      fieldErrors,
    }
  }

  return {
    success: true,
    data,
  }
}

export function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;")
}
