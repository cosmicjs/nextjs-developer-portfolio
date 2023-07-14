import '@/styles/globals.css'
import Providers from './providers'
import Header from '@/components/Header'
import AlertPreview from '@/components/AlertPreview'
import Footer from '@/components/Footer'
import { draftMode } from 'next/headers'
import { getSiteSettings } from '@/lib/cosmic'
import getMetadata from 'helpers/getMetadata'

const siteSettings = await getSiteSettings()
const enableRobots = getMetadata(siteSettings?.metadata?.enable_robots, false)
const siteUrl = getMetadata(siteSettings?.metadata?.site_url)

export const metadata = {
  metadataBase: new URL(siteUrl),
  icons: {
    icon: '/favicon/icon.ico',
    shortcut: '/favicon/shortcut-icon.png',
    apple: '/favicon/apple-touch-icon.png',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  robots: {
    index: enableRobots,
    follow: enableRobots,
    nocache: enableRobots,
    googleBot: {
      index: enableRobots,
      follow: enableRobots,
      noimageindex: enableRobots,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({ children }) {
  const { isEnabled } = draftMode()

  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
        />
      </head>

      <body>
        <Providers>
          <Header />
          {isEnabled && <AlertPreview enabled={isEnabled} />}
          <main className="flex flex-col min-h-screen container flex-grow max-w-screen-lg px-5 m-auto mt-16 md:px-12 lg:px-20">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
