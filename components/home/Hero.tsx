'use client'

import { FiSearch, FiMapPin, FiCalendar } from 'react-icons/fi'
import { images } from '@/lib/images'

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${images.hero})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/70 via-navy/60 to-navy-dark/80" />

      {/* Animated Orbs */}
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-cyan/20 blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-navy/30 blur-3xl animate-float" style={{ animationDelay: '2s' }} />

      <div className="container-x relative z-10 pt-24 pb-16">
        <div className="max-w-3xl">
          <span className="badge-glass mb-6">Trusted by 10,000+ Travelers</span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Discover the World{' '}
            <span className="bg-gradient-to-r from-cyan to-cyan-light bg-clip-text text-transparent">
              with Confidence
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/80 max-w-xl mb-10 leading-relaxed">
            Premium travel experiences crafted with care. From visa services to luxury holidays, we handle every detail.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="/holidays" className="btn-primary btn-lg">
              Explore Packages
            </a>
            <a href="/contact" className="btn-outline btn-lg">
              Get Free Consultation
            </a>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mt-12 md:mt-16 glass p-4 md:p-6 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
            <div className="relative">
              <FiMapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50" />
              <input
                type="text"
                placeholder="Where to?"
                className="w-full pl-12 pr-4 py-3.5 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-cyan focus:bg-white/15 transition-all"
              />
            </div>
            <div className="relative">
              <FiCalendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50" />
              <input
                type="text"
                placeholder="Travel Date"
                className="w-full pl-12 pr-4 py-3.5 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-cyan focus:bg-white/15 transition-all"
              />
            </div>
            <div className="relative">
              <input
                type="number"
                placeholder="Travelers"
                min="1"
                className="w-full px-4 py-3.5 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-cyan focus:bg-white/15 transition-all"
              />
            </div>
            <button className="flex items-center justify-center gap-2 py-3.5 bg-gradient-to-r from-cyan to-cyan-light text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan/40 transition-all">
              <FiSearch className="w-5 h-5" />
              Search
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-10 flex flex-wrap gap-8 md:gap-12">
          {[
            { value: '50+', label: 'Destinations' },
            { value: '10K+', label: 'Happy Travelers' },
            { value: '99%', label: 'Visa Success Rate' },
            { value: '24/7', label: 'Support' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
              <div className="text-sm text-white/60 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
