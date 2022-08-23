import Link from 'next/link'
import React from 'react'
import { ForwardArrowIcon } from '@/configs/icons'

const AboutMeSection = () => {
  return (
    <section className="mt-24">
      <h3 className="text-2xl md:text-3xl mb-8 text-fore-primary border-b border-b-slate-200 dark:border-b-gray-600 w-fit">
        About Me
      </h3>
      <p className="text-fore-primary mb-8 ">
        I love working with jamstack and headless architecture. I am currently
        building with TypeScript, Cosmic, Next.js, Tailwind CSS, and Node.js.
      </p>
      <p className="text-fore-primary mb-8">
        Coming from a background in audio engineering and music production, I
        quickly found that writing code was a bit like putting the secret sauce
        on a vocal mix; there&apos;s not necessarily a single way to do it, and
        the person behind the keyboard has the power to put their style into a
        great solution.
      </p>
      <p className="text-fore-primary mb-8">
        My favorite part about coding is the constant innovation of
        architectures, libraries, and frameworks. I think web development is
        experiencing a major breakthrough with headless architecture and
        jamstack, and want to be involved in any way I can.
      </p>
      <Link href="/about">
        <a className="flex items-center text-accent underline underline-offset-2 cursor-pointer hover:opacity-70 transition hover:translate-x-1 w-fit">
          <span className="mr-1">
            <ForwardArrowIcon />
          </span>
          Learn more
        </a>
      </Link>
    </section>
  )
}

export default AboutMeSection
