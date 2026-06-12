'use client'

import { Mail, MapPin, ExternalLink } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const contactItems = [
    {
      icon: Mail,
      label: 'EMAIL',
      value: 'vans.healthcare.ehr@gmail.com',
      href: 'mailto:vans.healthcare.ehr@gmail.com'
    },
    {
      icon: MapPin,
      label: 'ADDRESS',
      value: 'Mumbai, Maharashtra, India',
      href: '#'
    },
    {
      icon: ExternalLink,
      label: 'LINKEDIN',
      value: 'Vans & Co.',
      href: 'https://www.linkedin.com/company/vans-co'
    }
  ]

  return (
    <footer className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Left - CTA */}
          <div className="space-y-6">
            <h3 className="text-4xl font-bold leading-tight">
              Ready to Transform Your Healthcare Operations?
            </h3>
            <p className="text-gray-400 text-lg">
              Connect with us to explore how Vans & Co. can help streamline your healthcare delivery.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Right - Contact Info Boxes */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {contactItems.map((item, index) => {
              const Icon = item.icon
              return (
                <a
                  key={index}
                  href={item.href}
                  target={item.label === 'LINKEDIN' ? '_blank' : undefined}
                  rel={item.label === 'LINKEDIN' ? 'noreferrer' : undefined}
                  className="group flex flex-col items-start gap-3 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <div className="p-2 bg-blue-600 rounded">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                      {item.label}
                    </p>
                    <p className="text-sm text-white group-hover:text-blue-400 transition-colors mt-1 break-words">
                      {item.value}
                    </p>
                  </div>
                </a>
              )
            })}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; {currentYear} Vans & Co. All rights reserved.</p>
            <p className="mt-4 md:mt-0 italic text-gray-500">When it comes to life, every second counts.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
