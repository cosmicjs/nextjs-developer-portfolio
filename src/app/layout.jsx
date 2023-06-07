import '@/styles/globals.css'
import Providers from './providers'
import { Meta } from '@/components/Meta'
import Header from '@/components/Header'
import AlertPreview from '@/components/AlertPreview'
import Footer from '@/components/Footer'

export default function RootLayout({ children, preview }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
        />
        <Meta />
      </head>

      <body>
        <Providers>
          <Header />
          {preview && <AlertPreview />}
          <main className="flex flex-col min-h-screen container flex-grow max-w-screen-lg px-5 m-auto mt-16 md:px-12 lg:px-20">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
