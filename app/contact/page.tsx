'use client'

import PageHero from '@/components/PageHero'
import { FiMapPin, FiPhone, FiMail, FiClock, FiMessageCircle } from 'react-icons/fi'
import { siteConfig } from '@/lib/config'
import { images } from '@/lib/images'

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Get in touch with our travel experts for personalized assistance."
        image={images.contact}
      />

      <section className="section">
        <div className="container-x">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              <div className="card p-6">
                <h3 className="font-heading font-semibold text-navy text-lg mb-5">Get in Touch</h3>
                <ul className="space-y-5">
                  <li className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-cyan/10 flex items-center justify-center shrink-0">
                      <FiMapPin className="w-5 h-5 text-cyan" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-navy mb-1">UAE Office</p>
                      <p className="text-sm text-gray-600">
                        {siteConfig.address.line1}<br />
                        {siteConfig.address.line2}<br />
                        {siteConfig.address.city}, {siteConfig.address.country}
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-cyan/10 flex items-center justify-center shrink-0">
                      <FiMapPin className="w-5 h-5 text-cyan" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-navy mb-1">India Office</p>
                      <p className="text-sm text-gray-600">
                        {siteConfig.addressCalicut.line1}<br />
                        {siteConfig.addressCalicut.line2}<br />
                        {siteConfig.addressCalicut.line3}<br />
                        {siteConfig.addressCalicut.city}
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-cyan/10 flex items-center justify-center shrink-0">
                      <FiPhone className="w-5 h-5 text-cyan" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-navy mb-1">Phone</p>
                      <a href={`tel:${siteConfig.phoneUAE}`} className="text-sm text-gray-600 hover:text-cyan block">
                        {siteConfig.phoneUAE} (UAE)
                      </a>
                      <a href={`tel:${siteConfig.phone}`} className="text-sm text-gray-600 hover:text-cyan block mt-1">
                        {siteConfig.phone} (India)
                      </a>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-cyan/10 flex items-center justify-center shrink-0">
                      <FiMail className="w-5 h-5 text-cyan" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-navy mb-1">Email</p>
                      <a href={`mailto:${siteConfig.email}`} className="text-sm text-gray-600 hover:text-cyan">
                        {siteConfig.email}
                      </a>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-cyan/10 flex items-center justify-center shrink-0">
                      <FiClock className="w-5 h-5 text-cyan" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-navy mb-1">Working Hours</p>
                      <p className="text-sm text-gray-600">{siteConfig.hours}</p>
                      <p className="text-xs text-gray-400 mt-0.5">Fri & Sat — Closed</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="card p-6 bg-gradient-to-br from-cyan/5 to-transparent">
                <div className="flex items-center gap-3 mb-3">
                  <FiMessageCircle className="w-5 h-5 text-cyan" />
                  <h4 className="font-heading font-semibold text-navy">WhatsApp</h4>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Chat with us directly for instant responses.
                </p>
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}`}
                  className="btn-primary btn-md w-full"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="card p-6 md:p-8">
                <h3 className="font-heading font-semibold text-navy text-lg mb-6">Send Us a Message</h3>
                <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name</label>
                      <input type="text" placeholder="John Doe" className="input" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address</label>
                      <input type="email" placeholder="john@example.com" className="input" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number</label>
                      <input type="tel" placeholder="+971 50 000 0000" className="input" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Service Required</label>
                      <select className="input">
                        <option value="">Select a service</option>
                        <option>Visa Services</option>
                        <option>Holiday Package</option>
                        <option>Flight Booking</option>
                        <option>Hotel Booking</option>
                        <option>Guided Tour</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Destination</label>
                    <input type="text" placeholder="Where would you like to go?" className="input" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Message</label>
                    <textarea
                      rows={5}
                      placeholder="Tell us about your travel plans..."
                      className="input resize-none"
                    />
                  </div>
                  <button type="submit" className="btn-primary btn-lg w-full sm:w-auto">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
