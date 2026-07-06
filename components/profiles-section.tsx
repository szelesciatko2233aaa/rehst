'use client'

import Image from 'next/image'
import { MessageCircle } from 'lucide-react'
import { useRef, useState, useEffect, useCallback } from 'react'

const profiles = [
  {
    name: 'Natalia',
    nick: 'NatiBlonka',
    age: 27,
    status: 'Samotna',
    hobbies: 'Joga, Wino, Kino',
    image: '/natalia.png',
  },
  {
    name: 'Klaudia',
    nick: 'KlaudiaXO',
    age: 31,
    status: 'Samotna',
    hobbies: 'Fitness, Taniec, Podróże',
    image: '/klaudia.png',
  },
  {
    name: 'Weronika',
    nick: 'WeraGorąca',
    age: 29,
    status: 'Samotna',
    hobbies: 'Fotografia, Kawa, Imprezy',
    image: '/weronika.png',
  },
]

const AFFILIATE_URL = 'https://radarkobiet.pl/link/3106/49575523'
const AUTO_ADVANCE_MS = 3500

export default function ProfilesSection() {
  const [active, setActive] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const touchStartX = useRef<number>(0)
  const touchStartY = useRef<number>(0)
  const autoTimer = useRef<ReturnType<typeof setInterval> | null>(null)

  const goTo = useCallback((index: number) => {
    setActive(index)
  }, [])

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % profiles.length)
  }, [])

  const resetTimer = useCallback(() => {
    if (autoTimer.current) clearInterval(autoTimer.current)
    autoTimer.current = setInterval(next, AUTO_ADVANCE_MS)
  }, [next])

  // Auto-advance
  useEffect(() => {
    autoTimer.current = setInterval(next, AUTO_ADVANCE_MS)
    return () => {
      if (autoTimer.current) clearInterval(autoTimer.current)
    }
  }, [next])

  // Touch handlers
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
    touchStartY.current = e.touches[0].clientY
    setIsDragging(false)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    const dx = Math.abs(e.touches[0].clientX - touchStartX.current)
    const dy = Math.abs(e.touches[0].clientY - touchStartY.current)
    if (dx > dy) setIsDragging(true)
  }

  const onTouchEnd = (e: React.TouchEvent) => {
    if (!isDragging) return
    const dx = e.changedTouches[0].clientX - touchStartX.current
    if (Math.abs(dx) < 40) return
    const direction = dx < 0 ? 1 : -1
    const newIndex = (active + direction + profiles.length) % profiles.length
    goTo(newIndex)
    resetTimer()
  }

  const handleDotClick = (i: number) => {
    goTo(i)
    resetTimer()
  }

  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-center text-3xl sm:text-4xl font-black text-gray-900 mb-10 sm:mb-14 text-balance">
          Popularne{' '}
          <span
            style={{
              background: 'linear-gradient(90deg, #ff0099, #00e5ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            profile
          </span>{' '}
          w twojej okolicy
        </h2>
      </div>

      {/* Desktop: 3-column grid */}
      <div className="hidden sm:grid sm:grid-cols-3 gap-8 max-w-5xl mx-auto px-4">
        {profiles.map((profile) => (
          <ProfileCard key={profile.name} profile={profile} />
        ))}
      </div>

      {/* Mobile: swipe carousel */}
      <div className="sm:hidden select-none">
        <div
          className="overflow-hidden"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div
            className="flex transition-transform duration-400 ease-in-out"
            style={{ transform: `translateX(-${active * 100}%)` }}
          >
            {profiles.map((profile) => (
              <div
                key={profile.name}
                className="flex-shrink-0 w-full flex justify-center px-8"
              >
                <ProfileCard profile={profile} />
              </div>
            ))}
          </div>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {profiles.map((_, i) => (
            <button
              key={i}
              onClick={() => handleDotClick(i)}
              aria-label={`Przejdź do profilu ${i + 1}`}
              className="rounded-full transition-all duration-300"
              style={{
                width: active === i ? 24 : 8,
                height: 8,
                background: active === i ? '#ff0099' : '#e5e7eb',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProfileCard({ profile }: { profile: typeof profiles[number] }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-44 sm:w-48 h-52 sm:h-56 rounded-2xl overflow-hidden mb-4 shadow-md">
        <Image
          src={profile.image}
          alt={`Zdjęcie ${profile.name}`}
          width={192}
          height={224}
          className="w-full h-full object-cover object-top"
        />
      </div>

      <h3 className="text-xl font-bold mb-2" style={{ color: '#ff0099' }}>
        {profile.name}
      </h3>

      <div className="text-gray-500 text-sm space-y-0.5 mb-4">
        <p>Nick na portalu: {profile.nick}</p>
        <p>Wiek: {profile.age} lat</p>
        <p>Status: {profile.status}</p>
        <p>Hobby: {profile.hobbies}</p>
      </div>

      <a
        href={AFFILIATE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-white font-semibold text-sm px-6 py-2.5 rounded-full transition-all duration-200 hover:scale-105 active:scale-95"
        style={{ background: '#ff0099' }}
      >
        Wyślij wiadomość <MessageCircle className="w-4 h-4" />
      </a>
    </div>
  )
}
