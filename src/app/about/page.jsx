import Image from 'next/image'
import { PageMeta } from '@/components/Meta'
import { getPageBySlug } from '@/lib/cosmic'
import Socials from '@/components/Socials'
import { sanitize } from 'isomorphic-dompurify'

async function getData() {
  const pageData = (await getPageBySlug('about-page', 'content,metadata')) || []
  return {
    pageData,
  }
}

export async function generateMetadata() {
  const pageData = await getPageBySlug('about-page', 'metadata')
  const socialData = await getPageBySlug('social-config', 'metadata')

  const title = pageData?.metadata?.meta_title
  const description = pageData?.metadata?.meta_description
  const image = pageData?.metadata?.meta_image?.imgix_url
  const url = pageData?.metadata?.meta_url
  const twitterHanlde = socialData?.metadata?.twitter

  return {
    title: title,
    description: description,
    image: image,
    openGraph: {
      title: title,
      description: description,
      url: url,
      images: [
        {
          url: image,
          width: 800,
          height: 600,
        },
        {
          url: image,
          width: 1800,
          height: 1600,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: description,
      creator: twitterHanlde,
      images: [image],
    },
  }
}

const AboutPage = async () => {
  const data = await getData()
  const pageData = data.pageData

  return (
    <>
      <section>
        <h1 className="text-2xl md:text-3xl mb-12 font-bold">
          {pageData?.metadata.heading}
        </h1>
        <div className="flex flex-col md:flex-row-reverse justify-between">
          {pageData.metadata.image && (
            <div className="relative max-w-[200px] md:max-w-sm mb-12">
              <Image
                src={pageData.metadata.image?.imgix_url}
                alt="Developer avatar"
                quality={60}
                width={270}
                height={270}
                priority
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                }}
                className="w-fit"
              />
            </div>
          )}
          <div className="flex-1 mt-12 md:mt-0 flex flex-col justify-start gap-y-8 pr-12">
            <div
              className="text-fore-primary mb-8 space-y-4"
              dangerouslySetInnerHTML={{
                __html: sanitize(pageData?.content),
              }}
            />
            <Socials
              resume={pageData?.metadata.socials.metadata.resume.url}
              email={pageData?.metadata.socials.metadata.email}
              github={pageData?.metadata.socials.metadata.github}
              linkedin={pageData?.metadata.socials.metadata.linkedin}
            />
          </div>
        </div>
      </section>
    </>
  )
}

export const revalidate = 60
export default AboutPage
