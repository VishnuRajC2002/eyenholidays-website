'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { FiMenu, FiX, FiPhone } from 'react-icons/fi'
import { siteConfig } from '@/lib/config'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-lg shadow-lg shadow-navy/5'
          : 'bg-transparent'
      }`}
    >
      <div className="container-x flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 relative z-50">
          <Image
            src="/images/logo.png"
            alt={siteConfig.name}
            width={140}
            height={45}
            className="h-9 md:h-11 w-auto"
            priority
          />
          <span className={`font-heading font-bold text-lg md:text-xl tracking-tight transition-colors ${
            scrolled ? 'text-navy' : 'text-white'
          } ${open ? 'text-navy' : ''}`}>
            Eyenholidays
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                pathname === item.href
                  ? 'text-cyan bg-cyan/10'
                  : scrolled
                  ? 'text-gray-700 hover:text-cyan hover:bg-cyan/5'
                  : 'text-white/90 hover:text-white hover:bg-white/10'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA + Hamburger */}
        <div className="flex items-center gap-3">
          <a
            href={`tel:${siteConfig.phone}`}
            className={`hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
              scrolled
                ? 'bg-cyan text-white shadow-md shadow-cyan/30 hover:shadow-lg hover:shadow-cyan/40'
                : 'bg-white/15 backdrop-blur-md text-white border border-white/25 hover:bg-white/25'
            }`}
          >
            <FiPhone className="w-4 h-4" />
            Call Now
          </a>

          <button
            onClick={() => setOpen(!open)}
            className={`lg:hidden relative z-50 p-2 rounded-lg transition-colors ${
              open
                ? 'text-navy'
                : scrolled
                ? 'text-navy'
                : 'text-white'
            }`}
            aria-label="Toggle menu"
          >
            {open ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={`lg:hidden fixed inset-0 bg-white z-40 transition-all duration-300 ${
          open ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-2">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-xl font-heading font-semibold px-8 py-3 rounded-xl transition-colors ${
                pathname === item.href
                  ? 'text-cyan bg-cyan/10'
                  : 'text-navy hover:text-cyan hover:bg-cyan/5'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={`tel:${siteConfig.phone}`}
            className="mt-6 btn-primary btn-md"
          >
            <FiPhone className="w-5 h-5" />
            {siteConfig.phone}
          </a>
        </nav>
      </div>
    </header>
  )
}
