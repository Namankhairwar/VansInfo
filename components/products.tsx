import {
  FileText,
  BarChart3,
  Users,
  Lock,
  Network,
  Zap
} from 'lucide-react'

const services = [
  {
    icon: FileText,
    title: 'Electronic Health Record (EHR) Platform',
    description: 'Comprehensive digital patient records system that centralizes information and enables seamless data management.'
  },
  {
    icon: Zap,
    title: 'Healthcare Workflow Automation',
    description: 'Streamline clinical and administrative workflows to reduce manual tasks and improve operational efficiency.'
  },
  {
    icon: Users,
    title: 'Digital Patient Management',
    description: 'Tools for patient scheduling, engagement, and relationship management throughout their healthcare journey.'
  },
  {
    icon: BarChart3,
    title: 'Health Data Management Solutions',
    description: 'Secure storage, organization, and retrieval of health data with advanced analytics capabilities.'
  },
  {
    icon: BarChart3,
    title: 'Healthcare Analytics & Reporting',
    description: 'Actionable insights through advanced analytics and customizable reporting for better clinical decisions.'
  },
  {
    icon: Network,
    title: 'Connected Healthcare Ecosystem',
    description: 'Seamless integration with other healthcare systems for a truly connected care environment.'
  }
]

const approach = [
  { label: 'Secure', description: 'HIPAA compliant with enterprise-grade security' },
  { label: 'Connected', description: 'Interoperable with existing healthcare systems' },
  { label: 'Intelligent', description: 'AI-powered insights and decision support' },
  { label: 'Patient-Centric', description: 'Designed with patient outcomes in focus' }
]

export default function Products() {
  return (
    <section className="py-20 px-6 bg-white" id="products">
      <div className="max-w-7xl mx-auto">
        {/* Products & Services */}
        <div className="mb-24">
          <div className="mb-16">
            <p className="text-blue-600 text-sm font-semibold uppercase tracking-wider mb-3">
              Our Offerings
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Products & Services
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-pink-500 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg p-8 border border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all group"
                >
                  <div className="mb-6 inline-flex p-4 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{service.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
