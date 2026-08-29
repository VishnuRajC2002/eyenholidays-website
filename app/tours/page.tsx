import Image from 'next/image'
import PageHero from '@/components/PageHero'
import { FiClock, FiUsers, FiMapPin } from 'react-icons/fi'
import { images } from '@/lib/images'

const tours = [
  {
    title: 'Dubai City Tour',
    desc: 'Explore iconic landmarks including Burj Khalifa, Dubai Marina, and the Gold Souk.',
    duration: '8 Hours',
    groupSize: 'Up to 15',
    location: 'Dubai, UAE',
    price: '$79',
    image: images.destinations.dubai,
  },
  {
    title: 'Cappadocia Balloon Flight',
    desc: 'Soar above fairy chimneys and ancient valleys at sunrise.',
    duration: '3 Hours',
    groupSize: 'Up to 20',
    location: 'Cappadocia, Turkey',
    price: '$189',
    image: images.destinations.turkey,
  },
  {
    title: 'Bali Temple & Rice Terrace',
    desc: 'Visit ancient temples, lush rice terraces, and hidden waterfalls.',
    duration: '10 Hours',
    groupSize: 'Up to 10',
    location: 'Ubud, Bali',
    price: '$65',
    image: images.destinations.bali,
  },
  {
    title: 'Paris Walking Tour',
    desc: 'Walk through historic Montmartre, visit the Louvre, and cruise the Seine.',
    duration: '6 Hours',
    groupSize: 'Up to 12',
    location: 'Paris, France',
    price: '$99',
    image: images.destinations.paris,
  },
  {
    title: 'Swiss Alps Train Journey',
    desc: 'Scenic rail journey through the Alps with stops at picturesque villages.',
    duration: 'Full Day',
    groupSize: 'Up to 8',
    location: 'Interlaken, Switzerland',
    price: '$249',
    image: images.destinations.switzerland,
  },
  {
    title: 'Maldives Snorkeling Safari',
    desc: 'Swim with manta rays and explore vibrant coral reefs.',
    duration: '5 Hours',
    groupSize: 'Up to 6',
    location: 'Maldives',
    price: '$129',
    image: images.destinations.maldives,
  },
]

export default function ToursPage() {
  return (
    <>
      <PageHero
        title="Guided Tours"
        subtitle="Expert-led experiences that bring destinations to life."
        image={images.tours}
      />

      <section className="section">
        <div className="container-x">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tours.map((tour) => (
              <div key={tour.title} className="card overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={tour.image}
                    alt={tour.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 md:p-6">
                  <h3 className="font-heading font-semibold text-lg text-navy mb-2">{tour.title}</h3>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">{tour.desc}</p>
                  <div className="flex flex-wrap gap-3 text-xs text-gray-500 mb-4">
                    <span className="flex items-center gap-1"><FiClock className="w-3.5 h-3.5" /> {tour.duration}</span>
                    <span className="flex items-center gap-1"><FiUsers className="w-3.5 h-3.5" /> {tour.groupSize}</span>
                    <span className="flex items-center gap-1"><FiMapPin className="w-3.5 h-3.5" /> {tour.location}</span>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div>
                      <span className="text-xs text-gray-500">per person</span>
                      <div className="text-xl font-bold text-cyan">{tour.price}</div>
                    </div>
                    <a href="/contact" className="text-sm font-semibold text-navy hover:text-cyan transition-colors">
                      Book Tour →
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
