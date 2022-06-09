import Link from 'next/link'

const Logo = () => {
  return (
    <Link href="/">
      <a
        aria-label="Website logo, go back to homepage."
        className="flex items-center border-white group focus-visible:outline-accent"
      >
        <div className="overflow-hidden transition ease-in-out rounded-full  hover:opacity-60">
          <span className="text-sm">cosmicDev</span>
          <span className="text-sm text-accent">.com</span>
        </div>
      </a>
    </Link>
  )
}
export default Logo
