const features = [
  {
    title: 'Meta Ads System',
    desc: 'Hyper-local, service-specific campaigns optimized for quality, not just volume.',
  },
  {
    title: 'High-Converting Landing Pages',
    desc: 'Clean, fast, and persuasive pages that pre-qualify and push to book.',
  },
  {
    title: 'Survey Funnel',
    desc: 'Identify the best prospects with budget, service type, and timeline logic.',
  },
  {
    title: 'Nurturing Automations (SMS & Email)',
    desc: 'Instant responses, reminders, and follow-ups to keep you top-of-mind.',
  },
  {
    title: 'CRM App & Pipeline',
    desc: 'Full visibility on every lead with drag-and-drop pipeline stages.',
  },
]

export default function FeatureAlternating() {
  return (
    <section className="py-20" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-20">
          {features.map((f, i) => (
            <div key={f.title} className={`grid md:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              <div className="order-2 md:order-none">
                <h3 className="text-2xl font-extrabold text-gray-900">{f.title}</h3>
                <p className="mt-3 text-gray-600">{f.desc}</p>
                <ul className="mt-6 space-y-2 text-sm text-gray-600">
                  <li className="flex gap-2"><span className="text-lime-600">•</span> Built for home improvement niches</li>
                  <li className="flex gap-2"><span className="text-lime-600">•</span> Proven creative & copy frameworks</li>
                  <li className="flex gap-2"><span className="text-lime-600">•</span> Measurable outcomes and tracking</li>
                </ul>
              </div>
              <div className="order-1 md:order-none">
                <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-black/5 shadow-xl grid place-items-center text-gray-500">
                  <div className="text-center">
                    <div className="mx-auto w-16 h-16 rounded-xl bg-lime-100 text-lime-700 grid place-items-center font-bold mb-4">▦</div>
                    <p className="font-semibold text-gray-700">Visual mockup placeholder</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
