export default function ProductOverview() {
  const pillars = [
    { title: 'Meta Ads', desc: 'High-intent campaigns for local services.' },
    { title: 'Landing Page', desc: 'Persuasive pages built to convert.' },
    { title: 'Automations', desc: 'Instant SMS/email follow-ups.' },
    { title: 'CRM & Pipeline', desc: 'Track, manage, and close more jobs.' },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900">The Pillared Media System</h2>
          <p className="mt-3 text-gray-600">Everything you need to turn traffic into booked consultations.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p) => (
            <div key={p.title} className="bg-white rounded-2xl border border-black/5 shadow-sm p-6 text-center">
              <div className="mx-auto w-12 h-12 rounded-xl bg-lime-100 text-lime-700 grid place-items-center font-bold mb-4">★</div>
              <h3 className="font-semibold text-gray-900">{p.title}</h3>
              <p className="text-gray-600 mt-1 text-sm">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
