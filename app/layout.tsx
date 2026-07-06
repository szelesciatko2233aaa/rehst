import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Randkuj24.pl – Darmowe sex spotkania z kobietami!',
  description: 'Zarejestruj się w kilka sekund i otrzymuj wiadomości już teraz! Randkuj24.pl – największy portal randkowy w Polsce.',
}

export const viewport: Viewport = {
  themeColor: '#111111',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pl" className="bg-background">
      <body className={`${inter.className} antialiased overflow-x-hidden`}>
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                function removeBadge() {
                  document.querySelectorAll('a[href*="v0.dev"], [data-v0-badge]').forEach(function(el) {
                    el.remove();
                  });
                }
                removeBadge();
                var obs = new MutationObserver(removeBadge);
                obs.observe(document.body, { childList: true, subtree: true });
              })();
            `,
          }}
        />
      </body>
    </html>
  )
}
