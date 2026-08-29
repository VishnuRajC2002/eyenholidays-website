interface PageHeroProps {
  title: string
  subtitle: string
  image: string
}

export default function PageHero({ title, subtitle, image }: PageHeroProps) {
  return (
    <section className="relative min-h-[45vh] md:min-h-[50vh] flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/80 via-navy/70 to-navy-dark/90" />
      <div className="container-x relative z-10 pt-24 pb-12 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">{title}</h1>
        <p className="text-lg text-white/70 max-w-2xl mx-auto">{subtitle}</p>
      </div>
    </section>
  )
}
