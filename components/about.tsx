'use client'

export default function About() {
  return (
    <section className="py-20 px-6 bg-gray-50" id="about">
      <div className="max-w-7xl mx-auto">
        {/* About Us */}
        <div className="mb-20">
          <p className="text-blue-600 text-sm font-semibold uppercase tracking-wider mb-3">
            About Us
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Founded in 2024
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-pink-500 rounded-full mb-8"></div>

          <div className="max-w-3xl">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Vans & Co. was established with a vision to transform healthcare through technology. We believe healthcare professionals should spend less time managing records and more time caring for patients.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our team of healthcare and technology experts are committed to building solutions that make a real difference in healthcare delivery and patient outcomes.
            </p>
          </div>
        </div>

        {/* Mission and Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="bg-white border border-gray-200 rounded-lg p-8 hover:border-blue-400 hover:shadow-lg transition-all">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed text-sm">
              To build technology-driven healthcare solutions that improve efficiency, accessibility, and patient outcomes.
            </p>
          </div>
          <div className="bg-blue-600 rounded-lg p-8 text-white hover:bg-blue-700 transition-colors">
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="leading-relaxed text-sm">
              To create a connected, secure, and intelligent healthcare ecosystem through innovative digital solutions.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div>
          <p className="text-blue-600 text-sm font-semibold uppercase tracking-wider mb-3">
            Our Foundation
          </p>
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Core Values</h3>
          <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-pink-500 rounded-full mb-8"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Patient-First', desc: 'Designed with patient outcomes in mind' },
              { title: 'Security', desc: 'Enterprise-grade data protection' },
              { title: 'Innovation', desc: 'Continuous improvement and evolution' },
              { title: 'Collaboration', desc: 'Partnership-driven approach' }
            ].map((value, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-400 hover:shadow-lg transition-all">
                <h4 className="font-bold text-gray-900 mb-2">{value.title}</h4>
                <p className="text-gray-600 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
