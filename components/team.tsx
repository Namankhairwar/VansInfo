'use client'

import { ExternalLink } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function Team() {
  return (
    <section className="py-20 px-6 bg-white" id="team">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-blue-600 text-sm font-semibold uppercase tracking-wider mb-3">
            Leadership
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Team
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-pink-500 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Photo */}
          <div className="flex justify-center">
            <div className="w-80 h-80 bg-gray-100 rounded-lg shadow-xl overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/NamanPhoto-IHDDHOWGj5AUvR7CdX9QuVFdBoohFz.png"
                alt="Naman Khairwar - Founder & CEO"
                width={320}
                height={320}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right - Bio */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-4xl font-bold text-gray-900">Naman Khairwar</h3>
              <p className="text-xl text-blue-600 font-semibold">Founder & CEO</p>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">
              With a passion for healthcare innovation and deep expertise in technology, Naman leads Vans & Co.'s mission to transform healthcare delivery through intelligent, secure, and user-centric digital solutions. His vision is to empower healthcare professionals to focus on what matters most—patient care.
            </p>

            <div className="flex flex-col gap-4">
              <a
                href="https://www.linkedin.com/in/naman-khairwar/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors w-fit"
              >
                <span>Connect on LinkedIn</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <Link
                href="/team"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors w-fit"
              >
                <span>Meet Our Team</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
