'use client'

import { FiSend } from 'react-icons/fi'

export default function Newsletter() {
  return (
    <section className="section bg-gradient-to-br from-cyan/5 to-cyan/10">
      <div className="container-x text-center">
        <h2 className="section-title">Stay Updated</h2>
        <p className="section-subtitle mb-8">
          Subscribe to get exclusive deals, travel tips, and new destination alerts.
        </p>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="max-w-lg mx-auto flex flex-col sm:flex-row gap-3"
        >
          <input
            type="email"
            placeholder="Enter your email address"
            className="input flex-1"
          />
          <button type="submit" className="btn-primary btn-md whitespace-nowrap">
            <FiSend className="w-4 h-4" />
            Subscribe
          </button>
        </form>

        <p className="text-xs text-gray-500 mt-4">
          No spam, unsubscribe anytime. We respect your privacy.
        </p>
      </div>
    </section>
  )
}
