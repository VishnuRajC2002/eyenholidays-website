import Image from 'next/image'
import Link from 'next/link'
import { images } from '@/lib/images'

const destinations = [
  { name: 'Dubai', country: 'UAE', price: 'From $599', img: images.destinations.dubai },
  { name: 'Maldives', country: 'South Asia', price: 'From $1,299', img: images.destinations.maldives },
  { name: 'Paris', country: 'France', price: 'From $899', img: images.destinations.paris },
  { name: 'Bali', country: 'Indonesia', price: 'From $749', img: images.destinations.bali },
  { name: 'Switzerland', country: 'Europe', price: 'From $1,099', img: images.destinations.switzerland },
  { name: 'Istanbul', country: 'Turkey', price: 'From $649', img: images.destinations.turkey },
]

export default function Destinations() {
  return (
    <section className="section">
      <div className="container-x">
        <div className="text-center mb-12">
          <span className="badge-cyan mb-4">Top Picks</span>
          <h2 className="section-title">Popular Destinations</h2>
          <p className="section-subtitle">
            Explore the world&apos;s most sought-after destinations, handpicked for unforgettable experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((dest) => (
            <Link
              key={dest.name}
              href="/holidays"
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] block"
            >
              <Image
                src={dest.img}
                alt={dest.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                <p className="text-xs text-white/70 uppercase tracking-wider mb-1">{dest.country}</p>
                <h3 className="text-xl font-heading font-bold text-white mb-1">{dest.name}</h3>
                <p className="text-sm text-cyan-light font-semibold">{dest.price}</p>
              </div>
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="badge-glass text-xs">View Details</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/holidays" className="btn-secondary btn-md">
            View All Destinations
          </Link>
        </div>
      </div>
    </section>
  )
}
