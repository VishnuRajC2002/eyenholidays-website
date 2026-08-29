import PageHero from '@/components/PageHero'
import { FiTarget, FiHeart, FiAward, FiGlobe } from 'react-icons/fi'
import { images } from '@/lib/images'

const values = [
  { icon: FiTarget, title: 'Our Mission', desc: 'To make premium travel accessible and stress-free for everyone, one extraordinary journey at a time.' },
  { icon: FiHeart, title: 'Our Passion', desc: 'We live and breathe travel. Every itinerary we craft is infused with genuine love for exploration.' },
  { icon: FiAward, title: 'Our Promise', desc: 'Transparency, reliability, and excellence in every interaction. Your trust is our greatest asset.' },
  { icon: FiGlobe, title: 'Our Reach', desc: '50+ destinations worldwide with local expertise ensuring authentic and immersive experiences.' },
]

const stats = [
  { value: '10,000+', label: 'Happy Travelers' },
  { value: '50+', label: 'Destinations' },
  { value: '8+', label: 'Years Experience' },
  { value: '99%', label: 'Satisfaction Rate' },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Eyenholidays"
        subtitle="Your trusted travel partner based in the heart of the UAE."
        image={images.about}
      />

      <section className="section">
        <div className="container-x">
          {/* Story */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="badge-cyan mb-4">Our Story</span>
            <h2 className="section-title">Crafting Dream Vacations Since 2016</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Founded in Ras Al Khaimah, Eyenholidays was born from a simple belief: everyone
              deserves extraordinary travel experiences. What started as a boutique visa consultancy
              has grown into a full-service travel agency serving thousands of satisfied clients annually.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our team of seasoned travel consultants combines local expertise with global connections
              to deliver personalized journeys that exceed expectations. From visa processing to luxury
              holiday packages, we handle every detail so you can focus on making memories.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((s) => (
              <div key={s.label} className="text-center p-6 rounded-2xl bg-gray-50">
                <div className="text-3xl md:text-4xl font-bold text-cyan mb-2">{s.value}</div>
                <div className="text-sm text-gray-600">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((v) => (
              <div key={v.title} className="card p-6 md:p-8 flex gap-5">
                <div className="w-14 h-14 rounded-xl bg-cyan/10 flex items-center justify-center shrink-0">
                  <v.icon className="w-6 h-6 text-cyan" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-navy text-lg mb-2">{v.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center bg-gradient-to-br from-navy-dark to-navy rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Start Your Journey?</h3>
            <p className="text-white/70 mb-6 max-w-lg mx-auto">
              Let our experts craft the perfect trip for you. Get in touch today.
            </p>
            <a href="/contact" className="btn-primary btn-lg">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
