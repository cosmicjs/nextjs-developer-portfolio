import { PaperIcon } from '@/configs/icons'
import Image from 'next/legacy/image'
import avatar from '../../public/images/avatar_4.png'
import { PageMeta } from '@/components/Meta'
import Layout from '@/components/Layout'
import { getAllPosts, getPageBySlug } from '@/lib/cosmic'
import Socials from '@/components/Socials'
import { sanitize } from 'isomorphic-dompurify'

const About = ({ pageData, preview }) => {
  return (
    <>
      <PageMeta
        title={pageData.metadata.meta_title}
        description={pageData.metadata.meta_description}
      />
      <Layout preview={preview}>
        <section>
          <h1 className="text-2xl md:text-3xl mb-12 font-bold">
            {pageData.metadata.heading}
          </h1>
          <div className="flex flex-col md:flex-row-reverse border-b pb-12">
            <div className="flex-1 relative">
              <Image
                src={pageData.metadata.image.imgix_url || avatar}
                alt="Avatar"
                quality={85}
                width={500}
                height={500}
                className="rounded-md"
                priority
              />
            </div>
            <div className="flex-1 mt-12 md:mt-0 flex flex-col justify-start gap-y-8 pr-20">
              <div
                className="text-fore-primary mb-8 space-y-4"
                dangerouslySetInnerHTML={{
                  __html: sanitize(pageData.content),
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
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = null }) {
  const allPosts = (await getAllPosts(preview, 'posts')) || []
  const pageData = await getPageBySlug('about-page', 'content,metadata')
  return {
    props: { allPosts, pageData, preview },
    revalidate: 60,
  }
}

export default About
