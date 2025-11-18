export default function CTABanner() {
  return (
    <section className="py-16" id="book-call">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-gradient-to-br from-lime-400 to-emerald-500 p-8 md:p-12 shadow-xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900">Ready to scale your home improvement business?</h3>
              <p className="mt-2 text-gray-800/80">Book a free strategy call to see how the system plugs into your company.</p>
            </div>
            <div className="md:text-right">
              <a href="#" className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-gray-900 font-semibold py-3 px-6 rounded-xl shadow-sm transition-colors">
                Book Your Free Strategy Call
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
