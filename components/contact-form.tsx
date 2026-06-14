"use client";

import { useState } from "react";
import { CheckCircle } from "lucide-react";
import type { ChangeEvent, FormEvent } from "react";
import type { ContactApiResponse, ContactFormData } from "@/lib/contact";

const initialFormData: ContactFormData = {
  name: "",
  email: "",
  mobile: "",
  message: "",
};

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState<
    Partial<Record<keyof ContactFormData, string>>
  >({});

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setFieldErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setFieldErrors({});

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result: ContactApiResponse = await response.json();

      if (!response.ok) {
        const errorResult = result as Extract<
          ContactApiResponse,
          { success: false }
        >;
        setError(errorResult.error || "Failed to submit form");
        if (errorResult.fieldErrors) {
          setFieldErrors(errorResult.fieldErrors);
        }
        return;
      }

      setSubmitted(true);
      setFormData(initialFormData);
      setTimeout(() => setSubmitted(false), 5000);
    } catch {
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {submitted && (
        <div className="mb-8 flex items-start gap-4 rounded-lg border border-green-200 bg-green-50 p-6">
          <CheckCircle className="mt-0.5 h-6 w-6 flex-shrink-0 text-green-600" />
          <div>
            <h3 className="font-semibold text-green-900">
              Thank you for reaching out!
            </h3>
            <p className="mt-1 text-sm text-green-800">
              We&apos;ve received your message and will respond within 24 hours.
            </p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-semibold text-gray-900"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            {fieldErrors.name && (
              <p className="mt-2 text-sm text-red-700">{fieldErrors.name}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-semibold text-gray-900"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            {fieldErrors.email && (
              <p className="mt-2 text-sm text-red-700">{fieldErrors.email}</p>
            )}
          </div>
        </div>

        <div>
          <label
            htmlFor="mobile"
            className="mb-2 block text-sm font-semibold text-gray-900"
          >
            Mobile Number
          </label>
          <input
            type="tel"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            placeholder="+91 XXXXXXXXXX"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          {fieldErrors.mobile && (
            <p className="mt-2 text-sm text-red-700">{fieldErrors.mobile}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="message"
            className="mb-2 block text-sm font-semibold text-gray-900"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your needs and how we can help..."
            rows={6}
            className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          {fieldErrors.message && (
            <p className="mt-2 text-sm text-red-700">{fieldErrors.message}</p>
          )}
        </div>

        {error && (
          <div className="rounded-lg border border-red-200 bg-red-50 p-4">
            <p className="text-sm text-red-800">{error}</p>
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition-colors hover:bg-blue-700 disabled:bg-gray-400"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

        <p className="text-center text-sm text-gray-600">
          We'll respond to your inquiry as soon as possible.
        </p>
      </form>
    </>
  );
}
