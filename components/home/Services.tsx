import Link from 'next/link'
import { FiFileText, FiSun, FiNavigation, FiHome, FiCompass, FiHeadphones } from 'react-icons/fi'

const services = [
  {
    icon: FiFileText,
    title: 'Visa Services',
    desc: 'Fast-track visa processing for 50+ countries with 99% approval rate.',
    href: '/visa',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: FiSun,
    title: 'Holiday Packages',
    desc: 'Curated vacation packages for families, couples, and solo travelers.',
    href: '/holidays',
    color: 'from-amber-500 to-orange-500',
  },
  {
    icon: FiNavigation,
    title: 'Flight Booking',
    desc: 'Best deals on domestic and international flights with flexible options.',
    href: '/flights',
    color: 'from-cyan to-cyan-light',
  },
  {
    icon: FiHome,
    title: 'Hotel Booking',
    desc: 'Handpicked hotels from budget-friendly stays to luxury resorts.',
    href: '/hotels',
    color: 'from-emerald-500 to-green-500',
  },
  {
    icon: FiCompass,
    title: 'Guided Tours',
    desc: 'Expert-led tours with local insights and authentic experiences.',
    href: '/tours',
    color: 'from-purple-500 to-violet-500',
  },
  {
    icon: FiHeadphones,
    title: '24/7 Support',
    desc: 'Round-the-clock assistance for all your travel needs and emergencies.',
    href: '/contact',
    color: 'from-rose-500 to-pink-500',
  },
]

export default function Services() {
  return (
    <section className="section bg-gray-50/50">
      <div className="container-x text-center">
        <span className="badge-cyan mb-4">What We Offer</span>
        <h2 className="section-title">Our Premium Services</h2>
        <p className="section-subtitle mb-12">
          End-to-end travel solutions designed to make your journey seamless and memorable.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="card group p-6 md:p-8 text-left hover:-translate-y-1"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                <service.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-heading font-semibold text-navy mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {service.desc}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
