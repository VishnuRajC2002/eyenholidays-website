import Image from 'next/image'
import PageHero from '@/components/PageHero'
import { FiStar, FiMapPin, FiWifi, FiCoffee } from 'react-icons/fi'
import { images } from '@/lib/images'

const hotels = [
  {
    name: 'Atlantis The Palm',
    location: 'Dubai, UAE',
    stars: 5,
    price: '₹37,999',
    image: images.destinations.dubai,
    amenities: ['Pool', 'Spa', 'Beach', 'Restaurant'],
  },
  {
    name: 'Soneva Fushi',
    location: 'Maldives',
    stars: 5,
    price: '₹74,999',
    image: images.destinations.maldives,
    amenities: ['Private Pool', 'Butler', 'Diving', 'Sunset Bar'],
  },
  {
    name: 'Le Meurice',
    location: 'Paris, France',
    stars: 5,
    price: '₹54,999',
    image: images.destinations.paris,
    amenities: ['City View', 'Fine Dining', 'Spa', 'Concierge'],
  },
  {
    name: 'Hanging Gardens',
    location: 'Bali, Indonesia',
    stars: 5,
    price: '₹31,999',
    image: images.destinations.bali,
    amenities: ['Infinity Pool', 'Jungle View', 'Yoga', 'Organic Dining'],
  },
  {
    name: 'The Chedi',
    location: 'Andermatt, Switzerland',
    stars: 5,
    price: '₹43,999',
    image: images.destinations.switzerland,
    amenities: ['Ski Access', 'Alpine Spa', 'Fireplace', 'Fine Dining'],
  },
  {
    name: 'Four Seasons',
    location: 'Istanbul, Turkey',
    stars: 5,
    price: '₹34,499',
    image: images.destinations.turkey,
    amenities: ['Bosphorus View', 'Pool', 'Hammam', 'Terrace'],
  },
]

export default function HotelsPage() {
  return (
    <>
      <PageHero
        title="Hotel Booking"
        subtitle="Handpicked luxury hotels and resorts for a perfect stay."
        image={images.hotels}
      />

      <section className="section">
        <div className="container-x">
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {['All', 'Luxury', 'Resort', 'Beach', 'City', 'Mountain'].map((cat) => (
              <button
                key={cat}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  cat === 'All'
                    ? 'bg-cyan text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hotels.map((hotel) => (
              <div key={hotel.name} className="card overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={hotel.image}
                    alt={hotel.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 md:p-6">
                  <div className="flex gap-0.5 mb-2">
                    {Array.from({ length: hotel.stars }).map((_, i) => (
                      <FiStar key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <h3 className="font-heading font-semibold text-navy text-lg mb-1">{hotel.name}</h3>
                  <p className="flex items-center gap-1.5 text-sm text-gray-500 mb-4">
                    <FiMapPin className="w-3.5 h-3.5" /> {hotel.location}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {hotel.amenities.map((a) => (
                      <span key={a} className="text-xs px-2.5 py-1 bg-gray-100 rounded-md text-gray-600">{a}</span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div>
                      <span className="text-xs text-gray-500">per night</span>
                      <div className="text-xl font-bold text-cyan">{hotel.price}</div>
                    </div>
                    <a href="/contact" className="text-sm font-semibold text-navy hover:text-cyan transition-colors">
                      Reserve →
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
