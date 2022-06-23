import Link from 'next/link'

const AlertPreview = () => {
  return (
    <div className="absolute w-full z-20 top-28 md:top-20 left-0 text-fore-subtle bg-back-subtle px-8">
      <div className="py-2 text-center text-sm">
        <>
          This page is a draft.{' '}
          <Link href="/api/exit-preview">
            <a className="underline hover:text-accent transition-colors cursor-pointer">
              Click here
            </a>
          </Link>{' '}
          to exit preview mode.
        </>
      </div>
    </div>
  )
}
export default AlertPreview
