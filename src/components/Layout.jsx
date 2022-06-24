import Footer from './Footer'
import { Meta } from './Meta'
import Header from './Header'
import AlertPreview from './AlertPreview'

const Layout = ({ children, preview }) => {
  return (
    <>
      <Meta />
      <Header />
      {preview && <AlertPreview />}
      <main className="flex flex-col min-h-screen container flex-grow max-w-screen-lg px-5 m-auto mt-16 md:px-12 lg:px-20">
        {children}
      </main>
      <Footer />
    </>
  )
}
export default Layout
