import { getAllPosts } from '@/lib/cosmic'
import IntroSection from '@/sections/IntroSection'
import AboutMeSection from '@/sections/AboutMeSection'
import ToolboxSection from '@/sections/ToolboxSection'
import WorksSection from '@/sections/WorksSection'
import PostsSection from '@/sections/PostsSection'
import ContactSection from '@/sections/ContactSection'
import { PageMeta } from '@/components/Meta'
import Layout from '@/components/Layout'

const Index = ({ allPosts, allWorks, preview }) => {
  return (
    <>
      <PageMeta
        title="Cosmic | Developer Portfolio"
        description="Developer Portfolio Template built with Next.js and Cosmic"
      />
      <Layout preview={preview}>
        <IntroSection />
        <AboutMeSection />
        <ToolboxSection />
        <WorksSection posts={allWorks} />
        <PostsSection posts={allPosts} />
        <ContactSection />
      </Layout>
    </>
  )
}

// Below, we are calling the function in our cosmic.js file, and getting the posts from our Cosmic bucket. Since we are fetching from a single function in our cosmic.js file, we state whether we are viewing a preview of our page, what kind of posts we want (since we have blog posts and works posts), and the amount of posts we want to grab. In this case on the home page, I specified a limit of 3 posts.

export async function getStaticProps({ preview = null }) {
  const allPosts = (await getAllPosts(preview, 'posts', 3)) || []
  const allWorks = (await getAllPosts(preview, 'works', 3)) || []
  return {
    props: { allPosts, allWorks, preview },
  }
}
export default Index
