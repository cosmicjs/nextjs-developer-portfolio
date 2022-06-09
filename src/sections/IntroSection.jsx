import SocialIcons from '@/components/SocialIcons'
import React from 'react'
import { PaperIcon } from '@/configs/icons'
import Image from 'next/image'

const IntroSection = () => {
  return (
    <section className="w-full flex flex-col-reverse md:flex-row justify-start">
      <div className="flex-1 flex flex-col gap-y-4">
        <h1 className="text-3xl md:text-5xl font-bold max-w-2xl text-fore-primary">
          Developer Portfolio
        </h1>
        <h2 className="mb-4 max-w-lg">
          This portfolio template is powered by <strong>Cosmicjs</strong>.
        </h2>
        <div className="flex items-center">
          <a
            // upload your resume either on Cosmic or in the public file of this directory
            href="/your_resume_here.pdf"
            className="flex items-center mr-4 text-fore-primary border-2 border-accent w-fit px-4 py-1 rounded cursor-pointer hover:text-accent transition-colors"
          >
            <span className="mr-2">
              <PaperIcon />
            </span>
            Resume
          </a>
          <SocialIcons />
        </div>
      </div>
      <div className="w-[80px] sm:w-[186px] relative mb-6 sm:mb-0">
        <Image
          alt="Stefan Kudla"
          height={186}
          width={186}
          src="/images/avatar_4.png"
          className="rounded-full"
        />
      </div>
    </section>
  )
}

export default IntroSection
