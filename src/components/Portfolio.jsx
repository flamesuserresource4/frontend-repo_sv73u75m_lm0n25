export default function Portfolio() {
  return (
    <section className="py-20" id="portfolio">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900">Recent work & mockups</h2>
            <p className="mt-2 text-gray-600">Landing pages, ads, and system screenshots.</p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="aspect-[4/3] rounded-xl bg-gradient-to-br from-gray-100 to-white border border-black/5 shadow-sm" />
          ))}
        </div>
      </div>
    </section>
  )
}
