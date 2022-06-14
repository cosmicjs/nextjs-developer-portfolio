import React from 'react'
import { PaperIcon } from '@/configs/icons'
import SocialIcons from '@/components/SocialIcons'
import Image from 'next/image'
import Head from 'next/head'
import avatar from '../../public/images/avatar_4.png'

const About = () => {
  return (
    <>
      <Head>
        <title>About | Developer Portfolio</title>
        <meta property="og:title" content="About | Developer Portfolio" />
        <meta property="og:image" content="/images/Cosmic_OGImage.png" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="About this developer" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@CosmicJS" />
        <meta name="twitter:title" content="About | Developer Portfolio" />
        <meta name="twitter:description" content="About this developer" />
        <meta
          name="twitter:image"
          content="https://imgix.cosmicjs.com/7832da80-eb5c-11ec-bb77-f7704be6fe97-CosmicOGImage.png"
        />
      </Head>
      <section>
        <h1 className="text-2xl md:text-3xl mb-12 font-bold">About Me</h1>
        <div className="flex flex-col md:flex-row-reverse border-b pb-12">
          <div className="flex-1 relative">
            <Image
              src={avatar}
              alt="Stefan Kudla"
              quality={85}
              layout="responsive"
              className="rounded-md"
              placeholder="blur"
              priority
            />
          </div>
          <div className="flex-1 mt-12 md:mt-0 flex flex-col justify-start gap-y-8 pr-20">
            <p>I love solving problems!</p>
            <p>
              My name is Stefan Kudla. Originally from rainy Seattle,
              Washington, I now reside in the dry valley of Las Vegas, Nevada.
              When I&apos;m not writing code, you can usually find me brushing
              my teeth with coffee or looking for the best view atop a mountain.
            </p>
            <p>Get in touch to create something awesome together!</p>
            <div className="flex items-center md:mt-6">
              <a
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
        </div>
      </section>
    </>
  )
}

export default About
