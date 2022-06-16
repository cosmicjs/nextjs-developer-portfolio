import MenuItems from './MenuItems'
import ThemeChanger from './ThemeChanger'
import Logo from './Logo'
import Navbar from './Navbar'

const Header = () => {
  return (
    <>
      <div className="mt-12 p-2 md:mt-0 text-center border-b bg-white dark:bg-black text-sm">
        The source code for this portfolio is{' '}
        <a
          href="https://github.com/cosmicjs/nextjs-developer-portfolio"
          target="_parent"
          className="underline hover:text-accent transition-colors"
        >
          available on GitHub
        </a>
        .
      </div>
      <header className="md:pt-4 container max-w-screen-lg m-auto md:px-12 lg:px-20">
        <nav
          className="hidden md:flex justify-start items-center h-full mt-auto space-x-6 text-sm lg:justify-start backdrop-filter backdrop-blur-sm  bg-opacity-30"
          aria-label="Main Navigation"
        >
          <Logo />
          <MenuItems />
          <ThemeChanger
            styles={
              'hidden transition-transform ease-in-out focus:outline-none sm:block hover:text-accent group focus-visible:outline-accent'
            }
          />
        </nav>
        <Navbar />
      </header>
    </>
  )
}
export default Header
