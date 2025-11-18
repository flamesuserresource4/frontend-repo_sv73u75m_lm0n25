import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'How it works', href: '#how-it-works' },
    { label: 'Features', href: '#features' },
    { label: 'Results', href: '#portfolio' },
    { label: 'FAQ', href: '#faq' },
  ]

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-black/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-md bg-gradient-to-br from-lime-400 to-emerald-500 shadow-lg" />
            <span className="font-extrabold tracking-tight text-gray-900">Pillared Media</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#book-call" className="inline-flex items-center gap-2 bg-lime-500 hover:bg-lime-600 text-gray-900 font-semibold py-2 px-4 rounded-lg shadow-sm transition-colors">
              Book a Free Call
            </a>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-black/10"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 space-y-2">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="block text-sm font-medium text-gray-700">
                {item.label}
              </a>
            ))}
            <a href="#book-call" className="block text-center bg-lime-500 hover:bg-lime-600 text-gray-900 font-semibold py-2 px-4 rounded-lg shadow-sm transition-colors">
              Book a Free Call
            </a>
          </div>
        )}
      </div>
    </header>
  )
}
