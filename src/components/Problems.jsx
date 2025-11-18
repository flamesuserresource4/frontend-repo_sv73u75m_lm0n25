const problems = [
  { title: 'Inconsistent Leads', desc: 'Spiky enquiries and empty weeks that kill momentum.' },
  { title: 'No Follow-Up System', desc: 'Leads go cold because no one texts, emails, or nurtures fast enough.' },
  { title: 'Wasted Ad Spend', desc: 'Clicks don’t convert because funnels aren’t dialed.' },
  { title: 'No Time to Market', desc: 'You’re on site, not in an ad account.' },
  { title: 'Messy Pipeline', desc: 'No clear view of who’s ready to book or needs a nudge.' },
  { title: 'Lead Quality', desc: 'Tire-kickers clogging your inbox, not qualified buyers.' },
]

export default function Problems() {
  return (
    <section className="py-20" id="problems">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-extrabold text-gray-900">The common roadblocks</h2>
          <p className="mt-3 text-gray-600">We’ve solved these for garden rooms, decking, fencing, attic conversions, epoxy floors, bathrooms, and more.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((p) => (
            <div key={p.title} className="bg-white rounded-2xl border border-black/5 shadow-sm p-6">
              <div className="w-10 h-10 rounded-lg bg-lime-100 text-lime-700 grid place-items-center font-bold mb-4">✓</div>
              <h3 className="font-semibold text-gray-900">{p.title}</h3>
              <p className="text-gray-600 mt-1 text-sm">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
