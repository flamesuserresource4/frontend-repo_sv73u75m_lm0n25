const faqs = [
  {
    q: 'How fast can we go live?',
    a: 'Typically 7-10 days including ad creative, landing page, surveys, and automations.'
  },
  {
    q: 'Do you work with my niche?',
    a: 'Yes. We specialize in home improvement—garden rooms, decking, fencing, attic conversions, epoxy floors, bathrooms, and more.'
  },
  {
    q: 'What do you need from us?',
    a: 'Brand assets, service areas, margins, and any previous offers or pricing. We handle the rest.'
  },
  {
    q: 'Is there a contract?',
    a: 'Month-to-month after setup. We earn the right to keep working together by delivering results.'
  },
]

export default function FAQ() {
  return (
    <section className="py-20" id="faq">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-extrabold text-gray-900">FAQ</h2>
          <p className="mt-2 text-gray-600">Straight answers to common questions.</p>
        </div>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {faqs.map((f) => (
            <div key={f.q} className="bg-white rounded-2xl border border-black/5 shadow-sm p-6">
              <h3 className="font-semibold text-gray-900">{f.q}</h3>
              <p className="text-gray-600 mt-2 text-sm">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )}
