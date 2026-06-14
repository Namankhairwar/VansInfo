import { NextResponse } from "next/server"
import { Resend } from "resend"

import {
  escapeHtml,
  type ContactApiErrorResponse,
  type ContactApiSuccessResponse,
  validateContactFormData,
} from "@/lib/contact"

export const runtime = "nodejs"

function getEnvConfig() {
  const resendApiKey = process.env.RESEND_API_KEY
  const fromEmail = process.env.CONTACT_FROM_EMAIL
  const toEmail = process.env.CONTACT_TO_EMAIL

  if (!resendApiKey || !fromEmail || !toEmail) {
    throw new Error("Missing Resend environment variables.")
  }

  return {
    resendApiKey,
    fromEmail,
    toEmail,
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const validation = validateContactFormData(body)

    if (!validation.success) {
      const response: ContactApiErrorResponse = {
        success: false,
        error: validation.error,
        fieldErrors: validation.fieldErrors,
      }

      return NextResponse.json(response, { status: 400 })
    }

    const { name, email, mobile, message } = validation.data
    const { resendApiKey, fromEmail, toEmail } = getEnvConfig()
    const resend = new Resend(resendApiKey)

    const safeName = escapeHtml(name)
    const safeEmail = escapeHtml(email)
    const safeMobile = escapeHtml(mobile)
    const safeMessage = escapeHtml(message).replaceAll("\n", "<br />")

    const [internalEmailResult, autoReplyResult] = await Promise.all([
      resend.emails.send({
        from: fromEmail,
        to: [toEmail],
        replyTo: email,
        subject: "New Contact Form Submission",
        text: [
          `Name: ${name}`,
          `Email: ${email}`,
          `Mobile Number: ${mobile}`,
          "",
          "Message:",
          message,
        ].join("\n"),
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Mobile Number:</strong> ${safeMobile}</p>
          <p><strong>Message:</strong></p>
          <p>${safeMessage}</p>
        `,
      }),
      resend.emails.send({
        from: fromEmail,
        to: [email],
        subject: "Thank You for Contacting Vans Healthcare",
        text: [
          `Hi ${name},`,
          "",
          "Thank you for contacting Vans Healthcare.",
          "We have received your message.",
          "Our team will review your inquiry and respond as soon as possible.",
          "",
          "Submitted message for reference:",
          message,
        ].join("\n"),
        html: `
          <p>Hi ${safeName},</p>
          <p>Thank you for contacting Vans Healthcare.</p>
          <p>We have received your message.</p>
          <p>Our team will review your inquiry and respond as soon as possible.</p>
          <p><strong>Submitted message for reference:</strong></p>
          <p>${safeMessage}</p>
        `,
      }),
    ])

    if (internalEmailResult.error || autoReplyResult.error) {
      console.error("Resend email send failed.", {
        internalError: internalEmailResult.error,
        autoReplyError: autoReplyResult.error,
      })

      return NextResponse.json(
        {
          success: false,
          error: "We could not send your message right now. Please try again.",
        } satisfies ContactApiErrorResponse,
        { status: 502 },
      )
    }

    const response: ContactApiSuccessResponse = {
      success: true,
      message: "Your message has been received successfully.",
    }

    return NextResponse.json(response, { status: 200 })
  } catch (error) {
    console.error("Contact API error:", error)

    return NextResponse.json(
      {
        success: false,
        error: "An unexpected server error occurred. Please try again later.",
      } satisfies ContactApiErrorResponse,
      { status: 500 },
    )
  }
}
