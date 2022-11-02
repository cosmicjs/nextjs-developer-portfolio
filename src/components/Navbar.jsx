import { useEffect, useState } from 'react'
import { CloseIcon, MenuIcon } from '@/configs/icons'
import ThemeChanger from './ThemeChanger'
import Logo from './Logo'
import { routes } from './MenuItems'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false)
  const currentPage = useRouter()

  useEffect(() => {
    const body = document.body

    if (navOpen) {
      body.style.setProperty('touch-action', 'none')
    }

    if (!navOpen) {
      body.style.removeProperty('touch-action')
    }
  }, [navOpen])

  useEffect(() => {
    if (navOpen) {
      setNavOpen(!navOpen)
    }
  }, [currentPage])

  return (
    <nav className="fixed top-0 h-12 w-full md:hidden backdrop-filter backdrop-blur-sm bg-opacity-30 z-50">
      <button
        className="absolute top-3 right-2 z-50"
        aria-label={!navOpen ? 'Open Menu' : 'Close Menu'}
        onClick={() => {
          setNavOpen(!navOpen)
        }}
      >
        {!navOpen ? <MenuIcon /> : <CloseIcon />}
      </button>
      {!navOpen ? (
        <div className="absolute top-3 left-2">
          <Logo />
        </div>
      ) : (
        <div className="flex flex-col z-40 h-screen w-full bg-back-primary overflow-hidden px-4 pt-16 mb-12">
          <ul className="flex flex-col gap-y-12">
            {routes.map(route => (
              <li
                key={route.path}
                className="border-b border-b-slate-400 border-opacity-30 pb-2"
              >
                <Link href={route.path} className="text-fore-secondary">
                  {route.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex justify-between mt-12">
            <ThemeChanger />
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar
