import { getAllPosts, getPageBySlug } from '@/lib/cosmic'
import IntroSection from '@/sections/IntroSection'
import AboutMeSection from '@/sections/AboutMeSection'
import ToolboxSection from '@/sections/ToolboxSection'
import WorksSection from '@/sections/WorksSection'
import PostsSection from '@/sections/PostsSection'
import ContactSection from '@/sections/ContactSection'
import { PageMeta } from '@/components/Meta'
import Layout from '@/components/Layout'

const Index = ({ allPosts, allWorks, pageData, preview }) => {
  return (
    <>
      <PageMeta
        title={pageData.metadata.meta_title}
        description={pageData.metadata.meta_title}
      />
      <Layout preview={preview}>
        <IntroSection
          heading={pageData.metadata.heading}
          subHeading={pageData.metadata.sub_heading}
          socials={pageData.metadata.socials}
        />
        <AboutMeSection bodyText={pageData.metadata.about} />
        <ToolboxSection />
        <WorksSection posts={allWorks} />
        <PostsSection posts={allPosts} />
        <ContactSection
          heading={pageData.metadata.contact_heading}
          bodyText={pageData.metadata.contact_text}
          email={pageData.metadata.socials.metadata.email}
        />
      </Layout>
    </>
  )
}

// Below, we are calling the function in our cosmic.js file, and getting the posts from our Cosmic bucket. Since we are fetching from a single function in our cosmic.js file, we state whether we are viewing a preview of our page, what kind of posts we want (since we have blog posts and works posts), and the amount of posts we want to grab. In this case on the home page, I specified a limit of 3 posts.

export async function getStaticProps({ preview = null }) {
  const allPosts = (await getAllPosts(preview, 'posts', 3)) || []
  const allWorks = (await getAllPosts(preview, 'works', 3)) || []
  const pageData = await getPageBySlug(
    'home-page',
    'metadata.heading,metadata.sub_heading,metadata.socials,metadata.meta_title,metadata.meta_description,metadata.about,metadata.contact_heading,metadata.contact_text'
  )
  return {
    props: { allPosts, allWorks, pageData, preview },
    revalidate: 60,
  }
}
export default Index
