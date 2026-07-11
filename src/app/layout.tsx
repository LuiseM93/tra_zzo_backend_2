import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://trazzoapp.online'

export const metadata: Metadata = {
  title: 'Trazzo Recibo — Genera recibos profesionales gratis',
  description: 'Crea, previsualiza y envía recibos profesionales por WhatsApp en segundos. Sin guardar datos, sin complicaciones. Versión Pro con logo y sin marca de agua.',
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: 'Trazzo Recibo — Genera recibos profesionales gratis',
    description: 'Crea y envía recibos por WhatsApp en segundos. Privacidad total: no guardamos tus datos.',
    url: SITE_URL,
    siteName: 'Trazzo Recibo',
    images: [
      {
        url: '/assets/logo.png',
        width: 1200,
        height: 630,
        alt: 'Trazzo Recibo — Generador de recibos profesionales',
      },
    ],
    locale: 'es_MX',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trazzo Recibo — Genera recibos profesionales gratis',
    description: 'Crea y envía recibos por WhatsApp en segundos. Privacidad total: no guardamos tus datos.',
    images: ['/assets/logo.png'],
  },
  icons: {
    icon: [
      { url: '/assets/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/assets/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/assets/favicon.ico' }
    ],
    apple: [
      { url: '/assets/apple-touch-icon.png' }
    ]
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-7DM2DHT01V`}
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-7DM2DHT01V', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body suppressHydrationWarning className="bg-[var(--color-background)] text-[var(--color-on-background)] antialiased selection:bg-[var(--color-primary)] selection:text-[var(--color-on-primary)] min-h-screen">
        {children}
      </body>
    </html>
  )
}
