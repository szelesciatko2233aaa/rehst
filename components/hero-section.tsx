import { Heart, Shield, Navigation } from 'lucide-react'

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: '#0d0d0d' }}
    >
      {/* Background woman image */}
      <img
        src="/hero-bg.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-top md:object-[center_right]"
      />
      {/* Dark overlay – stronger on mobile so text is always readable */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.65) 50%, rgba(0,0,0,0.92) 100%)',
        }}
      />
      {/* Desktop overlay – side gradient */}
      <div
        className="absolute inset-0 hidden md:block"
        style={{
          background:
            'linear-gradient(to right, rgba(0,0,0,0.90) 40%, rgba(0,0,0,0.2) 100%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-5 sm:px-8 pt-24 pb-10">
        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight max-w-3xl text-balance mb-3">
          Darmowe{' '}
          <span style={{ color: '#ff0099' }}>dyskretne</span>{' '}
          spotkania z{' '}
          <span style={{ color: '#00e5ff' }}>kobietami</span>!
        </h1>

        <p className="text-white/80 text-sm sm:text-base md:text-lg mb-7 max-w-sm sm:max-w-md text-pretty">
          Zarejestruj się w kilka sekund i otrzymuj wiadomości już teraz!
        </p>

        {/* CTA Button */}
        <a
          href="https://firead.org/link/3106/49575523"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-white font-bold text-base sm:text-lg px-8 sm:px-10 py-3.5 sm:py-4 rounded-full transition-all duration-200 hover:scale-105 active:scale-95 mb-7"
          style={{ background: '#ff0099', boxShadow: '0 0 30px rgba(255,0,153,0.5)' }}
        >
          Zarejestruj się <span className="text-xl">→</span>
        </a>

        {/* Rating */}
        <div className="flex flex-col items-center gap-1 mb-10">
          <p className="text-white text-sm">
            <span className="font-bold">Randkuj24.pl</span> oceniono na
          </p>
          <div
            className="flex items-center gap-2 px-5 py-2 rounded-md"
            style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)' }}
          >
            <span style={{ color: '#f5a623' }}>★</span>
            <span className="text-white font-bold text-lg">4.8</span>
          </div>
          <p className="text-white/60 text-sm">Na podstawie 828 recenzji</p>
        </div>

        {/* Feature boxes – single column on mobile, 3 columns on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 max-w-4xl w-full">
          <div className="flex flex-row sm:flex-col items-start gap-3 text-left bg-black/30 sm:bg-transparent rounded-xl sm:rounded-none p-4 sm:p-0">
            <div
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: '#ff0099' }}
            >
              <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-white fill-white" />
            </div>
            <div>
              <h3 className="text-white font-bold text-sm sm:text-base mb-1">Kobiety piszą pierwsze</h3>
              <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
                Dzięki specjalnemu systemowi zdecydowanie większa część na naszym portalu stanowią kobiety i to one zazwyczaj rozpoczynają konwersacje!
              </p>
            </div>
          </div>

          <div className="flex flex-row sm:flex-col items-start gap-3 text-left bg-black/30 sm:bg-transparent rounded-xl sm:rounded-none p-4 sm:p-0">
            <div
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: '#7c3aed' }}
            >
              <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <div>
              <h3 className="text-white font-bold text-sm sm:text-base mb-1">Zweryfikowane profile</h3>
              <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
                Nasz zespół czuwa nad weryfikacją profili, dzięki czemu masz pewność, że rozmawiasz z realnymi osobami.
              </p>
            </div>
          </div>

          <div className="flex flex-row sm:flex-col items-start gap-3 text-left bg-black/30 sm:bg-transparent rounded-xl sm:rounded-none p-4 sm:p-0">
            <div
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: '#ff0099' }}
            >
              <Navigation className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <div>
              <h3 className="text-white font-bold text-sm sm:text-base mb-1">Spotkania w twojej okolicy</h3>
              <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
                Poznaj tysiące samotnych osób z całej Polski, a nawet z twojej okolicy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
