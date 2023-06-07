import Socials from '@/components/Socials'
import Image from "next/image"

const IntroSection = ({ heading, subHeading, avatar, socials }) => {
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
          alt="Developer Avatar"
          height={186}
          width={186}
          quality={60}
          className="rounded-full"
          style={{
            maxWidth: "100%",
            height: "auto"
          }} />
      </div>
    </section>
  );
}

export default IntroSection
