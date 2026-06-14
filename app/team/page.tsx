'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'

export default function TeamPage() {
  const teamMembers = [
    {
      name: 'Naman Khairwar',
      role: 'Founder & CEO',
      description: 'Visionary leader with deep expertise in healthcare technology and innovation. Drives the strategic direction of Vans & Co. and ensures alignment with our mission to transform healthcare delivery.',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/NamanPhoto-IHDDHOWGj5AUvR7CdX9QuVFdBoohFz.png',
      color: 'from-blue-400 to-blue-600'
    },
    {
      name: 'Vikas Kumawat',
      role: 'Design Analyst',
      description: 'Creative design professional focused on building intuitive and visually appealing user experiences. Ensures our products are not only functional but delightful to use for healthcare professionals.',
      image: null,
      color: 'from-purple-400 to-purple-600'
    },
    {
      name: 'Aman Pandey',
      role: 'Research & Development',
      description: 'Innovative technologist dedicated to exploring cutting-edge solutions in healthcare. Drives technical excellence and ensures our platform stays at the forefront of healthcare technology innovation.',
      image: null,
      color: 'from-green-400 to-green-600'
    },
    {
      name: 'Shubham Jirage',
      role: 'Operation Head',
      description: 'Operational strategist ensuring seamless execution and scalability. Oversees day-to-day operations, manages resources efficiently, and maintains high standards across all organizational functions.',
      image: null,
      color: 'from-orange-400 to-orange-600'
    }
  ]

  return (
    <>
      {/* Header */}
      <div className="bg-white border-b border-gray-200 py-6 px-6 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </div>

      <main className="min-h-screen bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="mb-20 text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4">Meet Our Team</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Talented professionals dedicated to transforming healthcare through innovative technology solutions
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group flex flex-col bg-white border border-gray-200 rounded-lg overflow-hidden hover:border-blue-400 hover:shadow-lg transition-all"
              >
                {/* Photo */}
                <div className={`h-64 w-full bg-gradient-to-br ${member.color} flex items-center justify-center overflow-hidden`}>
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={300}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="text-white text-4xl font-bold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-lg text-blue-600 font-semibold mb-4">{member.role}</p>
                  <p className="text-gray-700 leading-relaxed text-sm flex-1">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}
