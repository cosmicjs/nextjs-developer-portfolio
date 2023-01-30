import Link from 'next/link'
import { ForwardArrowIcon } from '@/configs/icons'
import { sanitize } from 'isomorphic-dompurify'

const AboutMeSection = ({ bodyText }) => {
  return (
    <section className="mt-24">
      <h3 className="text-2xl md:text-3xl mb-8 text-fore-primary border-b border-b-slate-200 dark:border-b-gray-600 w-fit">
        About Me
      </h3>
      <div
        className="text-fore-primary mb-8 space-y-4"
        dangerouslySetInnerHTML={{
          __html: sanitize(bodyText),
        }}
      />
      <Link
        href="/about"
        className="flex items-center text-accent underline underline-offset-2 cursor-pointer hover:opacity-70 transition hover:translate-x-1 w-fit"
      >
        <span className="mr-1">
          <ForwardArrowIcon />
        </span>
        Learn more
      </Link>
    </section>
  )
}

export default AboutMeSection
