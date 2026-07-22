export default function CtaSection() {
  return (
    <section
      className="py-16 sm:py-24 px-5 flex flex-col items-center justify-center text-center"
      style={{
        background: 'linear-gradient(135deg, #0d2a2e 0%, #1a1030 50%, #2d0a1e 100%)',
      }}
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 text-balance">
        Gotowy na{' '}
        <span style={{ color: '#00e5ff' }}>nowe</span>{' '}
        <span style={{ color: '#ff0099' }}>znajomości</span>?
      </h2>
      <p className="text-white/60 text-sm sm:text-base mb-8 sm:mb-10 max-w-sm sm:max-w-lg text-pretty">
        Dołącz do tysięcy zadowolonych użytkowników. Rejestracja zajmuje tylko chwilę.
      </p>
      <a
        href="https://afffire.icu/link/3106/49575523"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-white font-bold text-base sm:text-lg px-8 sm:px-12 py-3.5 sm:py-4 rounded-full transition-all duration-200 hover:scale-105 active:scale-95"
        style={{ background: '#ff0099', boxShadow: '0 0 40px rgba(255,0,153,0.4)' }}
      >
        Zarejestruj się za darmo <span className="text-xl">→</span>
      </a>
    </section>
  )
}
