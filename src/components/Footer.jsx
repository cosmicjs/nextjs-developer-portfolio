import { CosmicIcon } from '@/configs/icons'
import MenuItems from './MenuItems'

const Footer = () => {
  return (
    <footer className="flex flex-col items-center md:items-stretch max-w-screen-lg mx-auto gap-y-6 py-12 px-6 md:px-12 lg:px-20">
      <div className="flex flex-col items-center md:flex-row md:justify-between gap-y-6 md:gap-y-0">
        <MenuItems />
      </div>
      <div className="flex flex-col-reverse md:flex-row items-center md:justify-between gap-y-6 md:gap-y-0">
        <span className="text-sm">
          &copy; {new Date().getFullYear()} Developer Portfolio All Rights
          Reserved.
        </span>
        <span className="flex items-center text-sm">
          Powered by
          <a
            href="https://www.cosmicjs.com/"
            target="_blank"
            rel="noreferrer"
            className="ml-2"
          >
            <CosmicIcon />
          </a>
        </span>
      </div>
    </footer>
  )
}
export default Footer
