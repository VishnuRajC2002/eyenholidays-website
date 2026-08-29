import PageHero from '@/components/PageHero'
import { FiCheck, FiClock, FiShield, FiGlobe } from 'react-icons/fi'
import { images } from '@/lib/images'

const countries = [
  { name: 'UAE', time: '3-5 days', price: '$149' },
  { name: 'USA', time: '10-15 days', price: '$299' },
  { name: 'UK', time: '7-10 days', price: '$249' },
  { name: 'Schengen (Europe)', time: '10-15 days', price: '$279' },
  { name: 'Canada', time: '15-20 days', price: '$289' },
  { name: 'Australia', time: '15-20 days', price: '$319' },
  { name: 'Japan', time: '7-10 days', price: '$199' },
  { name: 'Singapore', time: '3-5 days', price: '$129' },
]

const features = [
  { icon: FiClock, title: 'Fast Processing', desc: 'Quick turnaround times with express options available.' },
  { icon: FiShield, title: '99% Success Rate', desc: 'Expert documentation review ensures maximum approval chances.' },
  { icon: FiGlobe, title: '50+ Countries', desc: 'Comprehensive visa services for destinations worldwide.' },
  { icon: FiCheck, title: 'End-to-End Support', desc: 'From application to approval, we guide you every step.' },
]

export default function VisaPage() {
  return (
    <>
      <PageHero
        title="Visa Services"
        subtitle="Hassle-free visa processing for 50+ countries with industry-leading approval rates."
        image={images.visa}
      />

      {/* Features */}
      <section className="section">
        <div className="container-x">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {features.map((f) => (
              <div key={f.title} className="card p-6 text-center">
                <div className="w-14 h-14 rounded-xl bg-cyan/10 flex items-center justify-center mx-auto mb-4">
                  <f.icon className="w-6 h-6 text-cyan" />
                </div>
                <h3 className="font-heading font-semibold text-navy mb-2">{f.title}</h3>
                <p className="text-sm text-gray-600">{f.desc}</p>
              </div>
            ))}
          </div>

          {/* Country List */}
          <div className="text-center mb-10">
            <h2 className="section-title">Visa Services by Country</h2>
            <p className="section-subtitle">Select your destination and let us handle the paperwork.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {countries.map((c) => (
              <div key={c.name} className="card p-5 flex flex-col hover:-translate-y-1">
                <h4 className="font-heading font-semibold text-navy mb-3">{c.name}</h4>
                <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                  <span className="flex items-center gap-1.5">
                    <FiClock className="w-3.5 h-3.5" /> {c.time}
                  </span>
                </div>
                <div className="mt-auto pt-3 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-lg font-bold text-cyan">{c.price}</span>
                  <a href="/contact" className="text-sm text-navy font-semibold hover:text-cyan transition-colors">
                    Apply →
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Process */}
          <div className="mt-16 bg-navy-dark rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">How Our Visa Process Works</h3>
            <p className="text-white/60 mb-8 max-w-2xl mx-auto">Simple, transparent, and efficient.</p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {['Submit Documents', 'Expert Review', 'Application Filed', 'Visa Approved'].map((step, i) => (
                <div key={step} className="text-center">
                  <div className="w-10 h-10 rounded-full bg-cyan/20 flex items-center justify-center mx-auto mb-3 text-cyan font-bold">
                    {i + 1}
                  </div>
                  <p className="text-white text-sm font-medium">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
