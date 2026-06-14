'use client'

export default function Hero() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    contactSection?.scrollIntoView({ behavior: 'smooth' })
  }

  const stats = [
    { number: '2024', label: 'Year Founded' },
    { number: 'Mumbai', label: 'Headquarters' },
    { number: 'EHR', label: 'Flagship Product' },
  ]

  return (
    <section className="bg-white pt-24 pb-20 px-6" id="hero">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-blue-600 text-sm font-semibold uppercase tracking-wider">
                Welcome to
              </p>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Vans & Co.
              </h1>
              <p className="text-2xl text-gray-400 font-light">
                When it comes to life, every second counts.
              </p>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed max-w-md">
              HealthTech solutions transforming healthcare through innovative digital platforms. We believe healthcare professionals should spend less time managing records and more time caring for patients.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={scrollToContact}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Get Started
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Stats */}
          <div className="grid grid-cols-1 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-lg border-l-4 border-blue-600"
              >
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
