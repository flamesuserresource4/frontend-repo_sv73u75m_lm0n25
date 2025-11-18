export default function Footer() {
  return (
    <footer className="py-12 bg-white border-t border-black/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-md bg-gradient-to-br from-lime-400 to-emerald-500 shadow-lg" />
            <span className="font-extrabold tracking-tight text-gray-900">Pillared Media</span>
          </a>
          <div className="text-sm text-gray-500">© {new Date().getFullYear()} Pillared Media. All rights reserved.</div>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <a href="#" className="hover:text-gray-900">hello@pillaredmedia.com</a>
            <a href="#" className="hover:text-gray-900">Instagram</a>
            <a href="#" className="hover:text-gray-900">Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
