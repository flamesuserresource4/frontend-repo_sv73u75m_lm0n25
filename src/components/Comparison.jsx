export default function Comparison() {
  const rows = [
    { k: 'Automation & Follow-Up', us: 'Built-in surveys, SMS & email, pipeline', other: 'Manual or non-existent' },
    { k: 'Lead Quality', us: 'Pre-qualified with budget & timeline', other: 'Any lead counts' },
    { k: 'Speed to Lead', us: 'Instant replies & reminders', other: 'Hours or days' },
    { k: 'Transparency', us: 'Clear dashboards & pipeline', other: 'Unclear reporting' },
    { k: 'Focus', us: 'Home improvement specialists', other: 'Generalist' },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900">Why contractors choose Pillared Media</h2>
        <div className="mt-8 overflow-hidden rounded-2xl border border-black/5 shadow-sm">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr className="text-left text-gray-600">
                <th className="p-4">Capability</th>
                <th className="p-4">Pillared Media</th>
                <th className="p-4">Other Agencies</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-black/[0.06]">
              {rows.map((r) => (
                <tr key={r.k} className="bg-white">
                  <td className="p-4 font-medium text-gray-900">{r.k}</td>
                  <td className="p-4 text-gray-700">{r.us}</td>
                  <td className="p-4 text-gray-500">{r.other}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
