import { FiSearch, FiCalendar, FiCreditCard, FiStar } from 'react-icons/fi'

const steps = [
  {
    icon: FiSearch,
    step: '01',
    title: 'Search & Choose',
    desc: 'Browse our curated packages or tell us your dream destination.',
  },
  {
    icon: FiCalendar,
    step: '02',
    title: 'Customize & Plan',
    desc: 'Work with our experts to tailor your perfect itinerary.',
  },
  {
    icon: FiCreditCard,
    step: '03',
    title: 'Book & Confirm',
    desc: 'Secure your trip with easy payment options and instant confirmation.',
  },
  {
    icon: FiStar,
    step: '04',
    title: 'Travel & Enjoy',
    desc: 'Relax and enjoy your trip with our 24/7 on-ground support.',
  },
]

export default function HowItWorks() {
  return (
    <section className="section bg-gray-50/50">
      <div className="container-x text-center">
        <span className="badge-cyan mb-4">Simple Process</span>
        <h2 className="section-title">How It Works</h2>
        <p className="section-subtitle mb-12">
          Four simple steps to your perfect vacation — we handle the complexity.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, i) => (
            <div key={item.step} className="relative p-6 md:p-8">
              <div className="text-5xl font-bold text-cyan/10 absolute top-2 right-4 font-heading">
                {item.step}
              </div>
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan/10 to-cyan/5 flex items-center justify-center mx-auto mb-5">
                <item.icon className="w-7 h-7 text-cyan" />
              </div>
              <h3 className="text-lg font-heading font-semibold text-navy mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>

              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-[2px] bg-cyan/30" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
