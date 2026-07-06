import Image from 'next/image'

const reviews = [
  {
    text: '"Nie wierzyłem, że to zadziała, ale po dwóch dniach umówiłem się na spotkanie. Portal robi robotę, dziewczyny same piszą pierwsze!"',
    name: 'Piotr',
    stars: 5,
    avatar: '/avatar-piotr.png',
  },
  {
    text: '"Premium za tak małą kwotę to śmiech na sali – w pozytywnym sensie. Wiadomości sypią się non stop, a jakość profili naprawdę mnie zaskoczyła."',
    name: 'Michał',
    stars: 5,
    avatar: '/avatar-michal.png',
  },
  {
    text: '"Po rozwodzie myślałem, że randki nie są dla mnie. Tutaj poznałem kobietę, z którą spotykam się już regularnie. Serdecznie polecam każdemu facetowi."',
    name: 'Kamil',
    stars: 5,
    avatar: '/avatar-kamil.png',
  },
  {
    text: '"Próbowałem różnych portali, ale tylko tu naprawdę dochodzi do spotkań. Konkretne kobiety, żadnych botów, wszystko na luzie i bez ściemy."',
    name: 'Bartek',
    stars: 5,
    avatar: '/avatar-bartek.png',
  },
]

export default function TestimonialsSection() {
  return (
    <section id="opinie" className="bg-white py-14 sm:py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <h2 className="text-center text-3xl sm:text-4xl font-black text-gray-900 mb-2 text-balance">
          Zobacz co mówią{' '}
          <span style={{ color: '#00e5ff' }}>klienci</span>
        </h2>
        <p className="text-center text-gray-400 text-sm mb-10 sm:mb-12">
          Nie jesteś przekonany? Poznaj opinie innych.
        </p>

        {/* Reviews – single column on mobile, 2-col on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="flex flex-col gap-3 bg-gray-50 sm:bg-transparent rounded-2xl sm:rounded-none p-5 sm:p-0"
            >
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={review.avatar}
                    alt={`Zdjęcie ${review.name}`}
                    width={44}
                    height={44}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">{review.text}</p>
              </div>
              {/* Stars */}
              <div className="flex items-center gap-1 pl-15">
                {Array.from({ length: review.stars }).map((_, i) => (
                  <span key={i} style={{ color: '#ff0099' }} className="text-lg">★</span>
                ))}
              </div>
              <p className="text-gray-400 text-xs pl-15">{review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
