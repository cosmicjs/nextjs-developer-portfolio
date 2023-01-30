import Socials from '@/components/Socials'
import { PaperIcon } from '@/configs/icons'
import Image from 'next/legacy/image'
import avatar from '../../public/images/avatar_4.png'

const IntroSection = ({ heading, subHeading, resumeLink, socials }) => {
  return (
    <section className="w-full flex flex-col-reverse md:flex-row justify-start">
      <div className="flex-1 flex flex-col gap-y-4">
        <h1 className="text-3xl md:text-5xl font-bold max-w-2xl text-fore-primary">
          {heading || 'Developer Portfolio'}
        </h1>
        <h2 className="mb-4 max-w-lg">
          {subHeading || 'This portfolio template is powered by Cosmic.'}
        </h2>
        <Socials
          resume={socials?.metadata.resume.url}
          email={socials?.metadata.email}
          github={socials?.metadata.github}
          linkedin={socials?.metadata.linkedin}
        />
      </div>
      <div className="w-[80px] sm:w-[186px] relative mb-6 sm:mb-0 rounded-full">
        <Image
          src={avatar}
          alt="Stefan Kudla"
          height={186}
          width={186}
          quality={60}
          className="rounded-full"
          placeholder="blur"
        />
      </div>
    </section>
  )
}

export default IntroSection
