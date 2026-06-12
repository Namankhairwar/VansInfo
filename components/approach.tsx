'use client'

import { Lock, Network, Lightbulb, Heart } from 'lucide-react'

export default function Approach() {
  const approachItems = [
    {
      number: '01',
      label: 'Secure',
      description: 'HIPAA compliant with enterprise-grade security and data protection protocols.',
      icon: Lock
    },
    {
      number: '02',
      label: 'Connected',
      description: 'Interoperable with existing healthcare systems for seamless integration.',
      icon: Network
    },
    {
      number: '03',
      label: 'Intelligent',
      description: 'AI-powered insights and clinical decision support tools.',
      icon: Lightbulb
    },
    {
      number: '04',
      label: 'Patient-Centric',
      description: 'Designed with patient outcomes and experience at the forefront.',
      icon: Heart
    }
  ]

  return (
    <section className="py-20 px-6 bg-gray-50" id="approach">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-blue-600 text-sm font-semibold uppercase tracking-wider mb-3">
            How We Work
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Approach
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-pink-500 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {approachItems.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className="bg-white rounded-lg p-8 border border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="text-5xl font-bold text-blue-600 opacity-30">
                    {item.number}
                  </div>
                  <div className="inline-flex p-3 bg-blue-50 rounded-lg">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.label}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
