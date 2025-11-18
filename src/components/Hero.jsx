export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_80%_-10%,rgba(163,230,53,0.15),transparent_60%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-lime-600 bg-lime-50 rounded-full px-3 py-1 border border-lime-200">
              Home Improvement Growth Partner
            </span>
            <h1 className="mt-6 text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
              Consistent leads, faster follow-up, more booked jobs.
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              We run high-intent Meta ads and plug in a complete nurturing system—surveys, landing pages, SMS/email automation, and pipeline management—to turn clicks into booked consultations.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href="#book-call" className="inline-flex items-center justify-center bg-lime-500 hover:bg-lime-600 text-gray-900 font-semibold py-3 px-6 rounded-xl shadow-sm transition-colors">
                Book a Free Strategy Call
              </a>
              <a href="#how-it-works" className="inline-flex items-center justify-center border border-black/10 hover:border-black/20 text-gray-900 font-semibold py-3 px-6 rounded-xl transition-colors">
                See how it works
              </a>
            </div>

            <div className="mt-8 flex items-center gap-6 text-sm text-gray-500">
              <div className="flex -space-x-3">
                {[1,2,3,4,5].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full ring-2 ring-white bg-gradient-to-br from-gray-200 to-gray-300" />
                ))}
              </div>
              <p><span className="font-semibold text-gray-900">30+ contractors</span> booked calls last month</p>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-video rounded-2xl bg-white shadow-2xl border border-black/5 overflow-hidden">
              <div className="w-full h-full grid place-items-center text-center p-8">
                <div>
                  <div className="mx-auto w-16 h-16 rounded-xl bg-lime-100 text-lime-700 grid place-items-center font-bold mb-4">▶</div>
                  <p className="text-gray-700 font-semibold">Watch a 90-second overview</p>
                  <p className="text-gray-500 text-sm">Video placeholder</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white border border-black/5 shadow-xl rounded-xl px-4 py-3 text-sm">
              <p className="font-semibold text-gray-900">Qualified leads</p>
              <p className="text-gray-500">Garden rooms, decking, attic conversions, and more</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
