import Link from 'next/link'
import Image from 'next/image'
import { FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi'
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa'
import { siteConfig } from '@/lib/config'

const services = [
  { label: 'Visa Services', href: '/visa' },
  { label: 'Holiday Packages', href: '/holidays' },
  { label: 'Flight Booking', href: '/flights' },
  { label: 'Hotel Booking', href: '/hotels' },
  { label: 'Guided Tours', href: '/tours' },
]

const quickLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms & Conditions', href: '#' },
]

const socialLinks = [
  { icon: FaFacebookF, href: siteConfig.social.facebook },
  { icon: FaInstagram, href: siteConfig.social.instagram },
  { icon: FaTwitter, href: siteConfig.social.twitter },
  { icon: FaLinkedinIn, href: siteConfig.social.linkedin },
]

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white/80">
      <div className="container-x pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2.5 mb-5">
              <Image
                src="/images/logo.png"
                alt={siteConfig.name}
                width={150}
                height={48}
                className="h-10 w-auto"
              />
              <span className="font-heading font-bold text-xl text-white tracking-tight">
                Eyenholidays
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-6 text-white/60">
              {siteConfig.description}
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-white/70 hover:bg-cyan hover:text-white transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-heading font-semibold text-base mb-5">Services</h4>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-white/60 hover:text-cyan transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-heading font-semibold text-base mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-white/60 hover:text-cyan transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-heading font-semibold text-base mb-5">Contact</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm">
                <FiMapPin className="w-4 h-4 mt-0.5 text-cyan shrink-0" />
                <span className="text-white/60">
                  <strong className="text-white/80 block mb-0.5">UAE Office</strong>
                  {siteConfig.address.line1}, {siteConfig.address.line2}, {siteConfig.address.city}, {siteConfig.address.country}
                </span>
              </li>
              <li className="flex gap-3 text-sm">
                <FiMapPin className="w-4 h-4 mt-0.5 text-cyan shrink-0" />
                <span className="text-white/60">
                  <strong className="text-white/80 block mb-0.5">India Office</strong>
                  {siteConfig.addressCalicut.line1}, {siteConfig.addressCalicut.line2}, {siteConfig.addressCalicut.line3}, {siteConfig.addressCalicut.city}
                </span>
              </li>
              <li className="flex gap-3 text-sm">
                <FiPhone className="w-4 h-4 mt-0.5 text-cyan shrink-0" />
                <a href={`tel:${siteConfig.phone}`} className="text-white/60 hover:text-cyan transition-colors">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex gap-3 text-sm">
                <FiMail className="w-4 h-4 mt-0.5 text-cyan shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="text-white/60 hover:text-cyan transition-colors">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex gap-3 text-sm">
                <FiClock className="w-4 h-4 mt-0.5 text-cyan shrink-0" />
                <span className="text-white/60">{siteConfig.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/40">
          <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <p>Crafted with passion for extraordinary travel experiences</p>
        </div>
      </div>
    </footer>
  )
}
