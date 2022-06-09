import '@/styles/globals.css'
import Layout from '../components/Layout'
import { ThemeProvider } from 'next-themes'

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider
      defaultTheme="system"
      attribute="class"
      disableTransitionOnChange
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
