import { LetterIcon } from '@/configs/icons'
import { sanitize } from 'isomorphic-dompurify'

const ContactSection = ({ heading, bodyText, email }) => {
  return (
    <section className="group h-72 flex flex-col items-center justify-center my-32">
      <h3 className="text-3xl flex items-center gap-x-2 font-bold">
        <span className="bg-back-subtle p-1 rounded-full">
          <LetterIcon />
        </span>
        {heading}
      </h3>
      <div
        className="text-fore-subtle my-3 text-center space-y-4"
        dangerouslySetInnerHTML={{
          __html: sanitize(bodyText),
        }}
      />
      <a
        href={`mailto:${email}`}
        className="text-white px-16 py-3.5 mt-8 text-xl bg-gradient-to-r from-accent to-violet-400 rounded hover:from-pink-500 hover:to-yellow-500"
      >
        Say hello
      </a>
    </section>
  )
}

export default ContactSection
