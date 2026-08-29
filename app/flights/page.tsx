import PageHero from '@/components/PageHero'
import { FiCheck } from 'react-icons/fi'
import { FaPlaneDeparture, FaPlaneArrival } from 'react-icons/fa'
import { images } from '@/lib/images'

const routes = [
  { from: 'Dubai', to: 'London', price: '₹28,999', airline: 'Emirates' },
  { from: 'Dubai', to: 'New York', price: '₹49,999', airline: 'Etihad' },
  { from: 'Dubai', to: 'Singapore', price: '₹23,999', airline: 'Singapore Air' },
  { from: 'Dubai', to: 'Paris', price: '₹31,999', airline: 'Air France' },
  { from: 'Dubai', to: 'Bangkok', price: '₹20,999', airline: 'Thai Airways' },
  { from: 'Dubai', to: 'Sydney', price: '₹57,999', airline: 'Qantas' },
  { from: 'Dubai', to: 'Tokyo', price: '₹37,999', airline: 'Japan Airlines' },
  { from: 'Dubai', to: 'Istanbul', price: '₹16,999', airline: 'Turkish Air' },
]

const benefits = [
  'Best price guarantee on all bookings',
  'Flexible date changes and cancellations',
  'Access to exclusive airline deals',
  'Business & First class upgrades available',
  '24/7 booking support',
  'Group booking discounts',
]

export default function FlightsPage() {
  return (
    <>
      <PageHero
        title="Flight Booking"
        subtitle="Find the best deals on domestic and international flights."
        image={images.flights}
      />

      <section className="section">
        <div className="container-x">
          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16 max-w-3xl mx-auto">
            {benefits.map((b) => (
              <div key={b} className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-cyan/10 flex items-center justify-center shrink-0">
                  <FiCheck className="w-3.5 h-3.5 text-cyan" />
                </span>
                <span className="text-sm text-gray-700">{b}</span>
              </div>
            ))}
          </div>

          {/* Routes */}
          <div className="text-center mb-10">
            <h2 className="section-title">Popular Routes</h2>
            <p className="section-subtitle">Competitive fares on the most-travelled routes.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {routes.map((r) => (
              <div key={`${r.from}-${r.to}`} className="card p-5 hover:-translate-y-1">
                <div className="flex items-center gap-2 mb-3">
                  <FaPlaneDeparture className="w-4 h-4 text-cyan" />
                  <span className="text-sm font-medium text-gray-600">{r.from}</span>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <FaPlaneArrival className="w-4 h-4 text-navy" />
                  <span className="text-sm font-medium text-navy font-heading">{r.to}</span>
                </div>
                <div className="text-xs text-gray-500 mb-3">{r.airline}</div>
                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <span className="text-lg font-bold text-cyan">{r.price}</span>
                  <a href="/contact" className="text-xs font-semibold text-navy hover:text-cyan transition-colors">
                    Book →
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center bg-gray-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-navy mb-3">Can&apos;t Find Your Route?</h3>
            <p className="text-gray-600 mb-6 max-w-lg mx-auto">
              Contact us for custom flight bookings to any destination worldwide.
            </p>
            <a href="/contact" className="btn-primary btn-md">
              Get Custom Quote
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
