import Image from 'next/image'
import { FiStar } from 'react-icons/fi'
import { images } from '@/lib/images'

const testimonials = [
  {
    name: 'Ahmed Al-Rashid',
    role: 'Business Traveler',
    image: images.testimonials[0],
    text: 'Eyenholidays made my UAE visa process incredibly smooth. Approved in just 3 days! Their team is professional and always available.',
    rating: 5,
  },
  {
    name: 'Sarah Johnson',
    role: 'Family Vacation',
    image: images.testimonials[1],
    text: 'The Maldives package was beyond our expectations. Every detail was perfectly planned from flights to resort transfers. Highly recommend!',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Honeymoon Trip',
    image: images.testimonials[2],
    text: 'Our Bali honeymoon was a dream come true. The personalized itinerary and private villa were absolutely worth every penny.',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="section">
      <div className="container-x text-center">
        <span className="badge-cyan mb-4">Testimonials</span>
        <h2 className="section-title">What Our Travelers Say</h2>
        <p className="section-subtitle mb-12">
          Real experiences from real travelers who trusted us with their journeys.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="card p-6 md:p-8 text-left">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <FiStar key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">&ldquo;{t.text}&rdquo;</p>
              <div className="flex items-center gap-3">
                <Image
                  src={t.image}
                  alt={t.name}
                  width={44}
                  height={44}
                  className="rounded-full object-cover w-11 h-11"
                />
                <div>
                  <div className="font-heading font-semibold text-sm text-navy">{t.name}</div>
                  <div className="text-xs text-gray-500">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
