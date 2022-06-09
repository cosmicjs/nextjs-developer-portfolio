import Link from 'next/link'

const AlertPreview = ({ preview }) => {
  return preview ? (
    <div className="fixed text-fore-subtle left-5">
      <div className="py-2 text-center text-sm">
        <>
          This page is a draft.{' '}
          <Link href="/api/exit-preview">
            <a className="underline hover:text-cyan duration-200 transition-colors cursor-pointer">
              click here
            </a>
          </Link>{' '}
          to exit preview mode.
        </>
      </div>
    </div>
  ) : undefined
}
export default AlertPreview
