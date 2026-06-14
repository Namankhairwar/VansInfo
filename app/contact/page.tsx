"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ContactForm from "@/components/contact-form";

export default function ContactPage() {
  return (
    <>
      <div className="bg-white border-b border-gray-200 py-6 px-6 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </div>

      <main className="min-h-screen bg-gray-50 py-20 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="mb-12 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h1>
            <p className="text-lg text-gray-600">
              Have questions about our healthcare solutions? We&apos;d love to
              hear from you. Fill out the form below and our team will get back
              to you shortly.
            </p>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-8 shadow-sm">
            <ContactForm />
          </div>
        </div>
      </main>
    </>
  );
}
