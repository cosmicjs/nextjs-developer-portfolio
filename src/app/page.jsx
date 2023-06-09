import { getAllPosts, getPageBySlug } from '@/lib/cosmic'
import IntroSection from '@/sections/IntroSection'
import AboutMeSection from '@/sections/AboutMeSection'
import ToolboxSection from '@/sections/ToolboxSection'
import WorksSection from '@/sections/WorksSection'
import PostsSection from '@/sections/PostsSection'
import ContactSection from '@/sections/ContactSection'
import { PageMeta } from '@/components/Meta'
import { draftMode } from 'next/headers'

async function getData() {
  const { isEnabled } = draftMode()
  const allPosts = (await getAllPosts(isEnabled, 'posts', 3)) || []
  const allWorks = (await getAllPosts(isEnabled, 'works', 3)) || []
  const pageData = await getPageBySlug('home-page', 'metadata')
  return {
    allPosts,
    allWorks,
    pageData,
  }
}

const HomePage = async () => {
  const data = await getData()
  const allPosts = data.allPosts
  const allWorks = data.allWorks
  const pageData = data.pageData

  return (
    <>
      <PageMeta
        title={pageData?.metadata.meta_title}
        description={pageData?.metadata.meta_title}
      />
      <IntroSection
        avatar={pageData?.metadata.avatar?.imgix_url}
        heading={pageData?.metadata.heading}
        subHeading={pageData?.metadata.sub_heading}
        socials={pageData?.metadata.socials}
      />
      <AboutMeSection bodyText={pageData?.metadata.about} />
      <ToolboxSection />
      <WorksSection posts={allWorks} />
      <PostsSection posts={allPosts} />
      <ContactSection
        heading={pageData?.metadata.contact_heading}
        bodyText={pageData?.metadata.contact_text}
        email={pageData?.metadata.socials.metadata.email}
      />
    </>
  )
}
export const revalidate = 60
export default HomePage
