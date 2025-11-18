import { useEffect, useRef } from 'react'

const testimonials = [
  {
    name: 'James K.',
    role: 'Garden Rooms Contractor',
    quote: 'Booked 18 consultations in 30 days. The automation did the heavy lifting while we worked on installs.',
  },
  {
    name: 'Ava L.',
    role: 'Flooring & Epoxy',
    quote: 'Lead quality is night and day vs what we had before. Our pipeline is finally organized.',
  },
  {
    name: 'Noah P.',
    role: 'Bathroom Remodeler',
    quote: 'We scaled from 3 to 12 jobs/month. The survey + follow-up system is a game changer.',
  },
  {
    name: 'Sophia R.',
    role: 'Decking & Fencing',
    quote: 'Fast, professional, and the systems actually work. We now get back to leads within minutes.',
  },
  {
    name: 'Daniel W.',
    role: 'Attic Conversions',
    quote: 'Consistent appointments on the calendar and less chasing. Exactly what we needed.',
  },
]

export default function Testimonials() {
  const scrollerRef = useRef(null)

  useEffect(() => {
    const el = scrollerRef.current
    if (!el) return
    let animation
    const start = () => {
      animation = el.animate(
        [{ transform: 'translateX(0)' }, { transform: 'translateX(-50%)' }],
        { duration: 20000, iterations: Infinity, easing: 'linear' }
      )
    }
    start()
    return () => animation && animation.cancel()
  }, [])

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">What contractors are saying</h2>
      </div>
      <div className="overflow-hidden">
        <div className="flex w-[200%]" ref={scrollerRef}>
          {[...testimonials, ...testimonials].map((t, i) => (
            <div key={i} className="w-96 shrink-0 p-4">
              <div className="h-full bg-white border border-black/5 shadow-sm rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-200 to-gray-300" />
                  <div>
                    <p className="font-semibold text-gray-900">{t.name}</p>
                    <p className="text-sm text-gray-500">{t.role}</p>
                  </div>
                </div>
                <p className="text-gray-700">“{t.quote}”</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
