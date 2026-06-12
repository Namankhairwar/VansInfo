import { Mail, MapPin, ExternalLink } from 'lucide-react'

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'vans.healthcare.ehr@gmail.com',
      href: 'mailto:vans.healthcare.ehr@gmail.com'
    },
    {
      icon: MapPin,
      label: 'Address',
      value: 'Mumbai, Maharashtra, India',
      href: '#'
    },
    {
      icon: ExternalLink,
      label: 'LinkedIn',
      value: 'Vans & Co.',
      href: 'https://www.linkedin.com/company/vans-co'
    }
  ]

  return (
    <section id="contact" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-blue-600 text-sm font-semibold uppercase tracking-wider mb-3">
            Contact Us
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-pink-500 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, index) => {
            const Icon = info.icon
            return (
              <a
                key={index}
                href={info.href}
                target={info.label === 'LinkedIn' ? '_blank' : undefined}
                rel={info.label === 'LinkedIn' ? 'noreferrer' : undefined}
                className="group flex flex-col items-start gap-4 p-6 bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all"
              >
                <div className="flex-shrink-0 p-3 bg-blue-600 rounded-lg group-hover:bg-blue-700 transition-colors">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-gray-900 uppercase tracking-wider">{info.label}</p>
                  <p className="text-gray-600 text-sm break-all group-hover:text-blue-600 transition-colors mt-2">
                    {info.value}
                  </p>
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
