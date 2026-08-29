import Link from 'next/link'
import { FiCheck } from 'react-icons/fi'

export default function SpecialOffer() {
  return (
    <section className="section bg-gradient-to-br from-navy-dark via-navy to-navy-dark overflow-hidden relative">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-cyan/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan/5 rounded-full blur-3xl" />

      <div className="container-x relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="badge-glass mb-6 inline-flex">Limited Time Offer</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Get <span className="text-cyan">20% OFF</span> on All Holiday Packages
            </h2>
            <p className="text-white/70 text-lg mb-8 leading-relaxed">
              Book your dream vacation today and save big. Offer valid for bookings made this month only.
            </p>

            <ul className="space-y-3 mb-8">
              {[
                'Free airport transfers included',
                'Flexible cancellation policy',
                'Complimentary travel insurance',
                'Dedicated travel consultant',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-white/80">
                  <span className="w-6 h-6 rounded-full bg-cyan/20 flex items-center justify-center shrink-0">
                    <FiCheck className="w-3.5 h-3.5 text-cyan" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <Link href="/holidays" className="btn-primary btn-lg">
              Claim Your Discount
            </Link>
          </div>

          <div className="hidden lg:flex items-center justify-center">
            <div className="relative">
              <div className="w-72 h-72 rounded-full border-2 border-cyan/30 flex items-center justify-center">
                <div className="w-56 h-56 rounded-full border-2 border-cyan/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl font-bold text-white">20%</div>
                    <div className="text-xl text-cyan font-semibold mt-2">OFF</div>
                    <div className="text-sm text-white/50 mt-1">Use code: EYEN20</div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-cyan/20 rounded-full blur-xl animate-float" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-cyan/15 rounded-full blur-xl animate-float" style={{ animationDelay: '3s' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
