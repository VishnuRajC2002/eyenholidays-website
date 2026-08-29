import Image from 'next/image'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import { FiClock, FiUsers, FiStar } from 'react-icons/fi'
import { images } from '@/lib/images'

const packages = [
  {
    title: 'Magical Maldives',
    duration: '5 Days / 4 Nights',
    people: '2 Adults',
    price: '₹1,09,999',
    rating: 4.9,
    image: images.destinations.maldives,
    features: ['Water Villa', 'All Meals', 'Snorkeling', 'Spa'],
  },
  {
    title: 'Enchanting Bali',
    duration: '6 Days / 5 Nights',
    people: '2 Adults',
    price: '₹74,999',
    rating: 4.8,
    image: images.destinations.bali,
    features: ['Private Pool Villa', 'Temple Tours', 'Rice Terraces', 'Beach Club'],
  },
  {
    title: 'Romantic Paris',
    duration: '5 Days / 4 Nights',
    people: '2 Adults',
    price: '₹95,999',
    rating: 4.9,
    image: images.destinations.paris,
    features: ['Eiffel Tower', 'Seine Cruise', 'Louvre Access', 'Wine Tasting'],
  },
  {
    title: 'Swiss Alps Adventure',
    duration: '7 Days / 6 Nights',
    people: '2 Adults',
    price: '₹1,34,999',
    rating: 4.9,
    image: images.destinations.switzerland,
    features: ['Mountain Trains', 'Lake Cruises', 'Chocolate Tour', 'Skiing'],
  },
  {
    title: 'Dubai Extravaganza',
    duration: '4 Days / 3 Nights',
    people: '2 Adults',
    price: '₹57,999',
    rating: 4.7,
    image: images.destinations.dubai,
    features: ['Burj Khalifa', 'Desert Safari', 'City Tour', 'Dhow Cruise'],
  },
  {
    title: 'Turkish Delight',
    duration: '6 Days / 5 Nights',
    people: '2 Adults',
    price: '₹69,999',
    rating: 4.8,
    image: images.destinations.turkey,
    features: ['Cappadocia', 'Hot Air Balloon', 'Bosphorus Cruise', 'Grand Bazaar'],
  },
]

export default function HolidaysPage() {
  return (
    <>
      <PageHero
        title="Holiday Packages"
        subtitle="Handcrafted vacation packages designed for unforgettable memories."
        image={images.holidays}
      />

      <section className="section">
        <div className="container-x">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <div key={pkg.title} className="card overflow-hidden group">
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={pkg.image}
                    alt={pkg.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3">
                    <span className="badge-glass text-xs">
                      <FiStar className="w-3 h-3 fill-amber-400 text-amber-400" /> {pkg.rating}
                    </span>
                  </div>
                </div>
                <div className="p-5 md:p-6">
                  <h3 className="font-heading font-semibold text-lg text-navy mb-3">{pkg.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <span className="flex items-center gap-1"><FiClock className="w-3.5 h-3.5" /> {pkg.duration}</span>
                    <span className="flex items-center gap-1"><FiUsers className="w-3.5 h-3.5" /> {pkg.people}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {pkg.features.map((f) => (
                      <span key={f} className="text-xs px-2.5 py-1 bg-gray-100 rounded-md text-gray-600">{f}</span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div>
                      <span className="text-xs text-gray-500">Starting from</span>
                      <div className="text-xl font-bold text-cyan">{pkg.price}</div>
                    </div>
                    <Link href="/contact" className="text-sm font-semibold text-navy hover:text-cyan transition-colors">
                      Book Now →
                    </Link>
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
