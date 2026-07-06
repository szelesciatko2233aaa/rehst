export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-8 py-4 sm:py-5">
      <div className="text-white font-bold text-lg sm:text-xl tracking-tight">
        <span className="text-white">randkuj</span>
        <span style={{ color: '#ff0099' }}>24</span>
        <span className="text-white">.pl</span>
      </div>
      <a
        href="https://radarkobiet.pl/link/3106/49575523"
        target="_blank"
        rel="noopener noreferrer"
        className="border border-white text-white text-xs sm:text-sm font-semibold px-3 sm:px-5 py-2 sm:py-2.5 hover:bg-white hover:text-black transition-colors duration-200"
        style={{ letterSpacing: '0.1em' }}
      >
        ZACZNIJ TERAZ
      </a>
    </nav>
  )
}
