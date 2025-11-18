export default function HowItWorks() {
  const steps = [
    { title: 'Survey', desc: 'Qualify prospects with key questions (budget, timeline, service type).'},
    { title: 'Landing Page', desc: 'High-converting pages matched to your service & area.'},
    { title: 'Automation', desc: 'Instant SMS & email sequences that follow up within minutes.'},
    { title: 'Pipeline', desc: 'Track, drag-and-drop, and close more jobs with a clear CRM.'},
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="aspect-video rounded-2xl bg-white border border-black/5 shadow-xl overflow-hidden">
              <div className="w-full h-full grid place-items-center text-center p-8">
                <div>
                  <div className="mx-auto w-16 h-16 rounded-xl bg-lime-100 text-lime-700 grid place-items-center font-bold mb-4">▶</div>
                  <p className="text-gray-700 font-semibold">See the full system in action</p>
                  <p className="text-gray-500 text-sm">Demo placeholder</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900">From click to booked consultation</h2>
            <p className="mt-3 text-gray-600">Our end-to-end flow consistently turns Meta traffic into real appointments.</p>
            <div className="mt-8 space-y-4">
              {steps.map((s, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-lime-500/10 text-lime-700 grid place-items-center font-bold">{i+1}</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{s.title}</h3>
                    <p className="text-gray-600 text-sm">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
