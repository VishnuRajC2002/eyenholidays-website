import Image from 'next/image'
import PageHero from '@/components/PageHero'
import { FiClock, FiMapPin } from 'react-icons/fi'
import { images } from '@/lib/images'

const activities = [
  {
    title: 'Desert Safari',
    location: 'Dubai, UAE',
    duration: '6 Hours',
    price: '$59',
    image: images.destinations.dubai,
    desc: 'Dune bashing, camel rides, BBQ dinner under the stars.',
  },
  {
    title: 'Scuba Diving',
    location: 'Maldives',
    duration: '3 Hours',
    price: '$89',
    image: images.destinations.maldives,
    desc: 'Explore vibrant coral reefs with certified instructors.',
  },
  {
    title: 'Cooking Class',
    location: 'Bali, Indonesia',
    duration: '4 Hours',
    price: '$45',
    image: images.destinations.bali,
    desc: 'Learn traditional Balinese cuisine in a tropical setting.',
  },
  {
    title: 'Hot Air Balloon',
    location: 'Cappadocia, Turkey',
    duration: '2 Hours',
    price: '$180',
    image: images.destinations.turkey,
    desc: 'Sunrise flight over fairy chimneys and valleys.',
  },
  {
    title: 'Wine Tasting',
    location: 'Paris, France',
    duration: '3 Hours',
    price: '$75',
    image: images.destinations.paris,
    desc: 'Sample fine wines at boutique vineyards near Paris.',
  },
  {
    title: 'Glacier Walk',
    location: 'Swiss Alps',
    duration: '5 Hours',
    price: '$120',
    image: images.destinations.switzerland,
    desc: 'Guided glacier trek with stunning alpine panoramas.',
  },
]

export default function ActivitiesPage() {
  return (
    <>
      <PageHero
        title="Activities & Experiences"
        subtitle="Unique adventures and cultural experiences to enrich your trip."
        image={images.tours}
      />

      <section className="section">
        <div className="container-x">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((a) => (
              <div key={a.title} className="card overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={a.image}
                    alt={a.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 md:p-6">
                  <h3 className="font-heading font-semibold text-lg text-navy mb-2">{a.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{a.desc}</p>
                  <div className="flex gap-4 text-xs text-gray-500 mb-4">
                    <span className="flex items-center gap-1"><FiClock className="w-3.5 h-3.5" /> {a.duration}</span>
                    <span className="flex items-center gap-1"><FiMapPin className="w-3.5 h-3.5" /> {a.location}</span>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div>
                      <span className="text-xs text-gray-500">per person</span>
                      <div className="text-xl font-bold text-cyan">{a.price}</div>
                    </div>
                    <a href="/contact" className="text-sm font-semibold text-navy hover:text-cyan transition-colors">
                      Book Now →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
