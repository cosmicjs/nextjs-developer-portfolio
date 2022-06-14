import { getAllPosts } from '@/lib/cosmic'
import IntroSection from '@/sections/IntroSection'
import AboutMeSection from '@/sections/AboutMeSection'
import ToolboxSection from '@/sections/ToolboxSection'
import WorksSection from '@/sections/WorksSection'
import PostsSection from '@/sections/PostsSection'
import ContactSection from '@/sections/ContactSection'
import Head from 'next/head'

const Index = ({ allPosts, allWorks }) => {
  return (
    <>
      <Head>
        <title>Cosmic | Developer Portfolio</title>
        <meta property="og:title" content="Cosmic | Developer Portfolio" />
        <meta property="og:image" content="/images/Cosmic_OGImage.png" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Developer Portfolio Template built with Next.js and Cosmic"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@CosmicJS" />
        <meta name="twitter:title" content="Cosmic | Developer Portfolio" />
        <meta
          name="twitter:description"
          content="Developer Portfolio Template built with Next.js and Cosmic"
        />
        <meta
          name="twitter:image"
          content="https://imgix.cosmicjs.com/7832da80-eb5c-11ec-bb77-f7704be6fe97-CosmicOGImage.png"
        />
      </Head>
      <IntroSection />
      <AboutMeSection />
      <ToolboxSection />
      <WorksSection posts={allWorks} />
      <PostsSection posts={allPosts} />
      <ContactSection />
    </>
  )
}

// Below, we are calling the function in our cosmic.js file, and getting the posts from our Cosmic bucket. Since we are fetching from a single function in our cosmic.js file, we state whether we are viewing a preview of our page, what kind of posts we want (since we have blog posts and works posts), and the amount of posts we want to grab. In this case on the home page, I specified a limit of 3 posts.

export async function getStaticProps({ preview }) {
  const allPosts = (await getAllPosts(preview, 'posts', 3)) || []
  const allWorks = (await getAllPosts(preview, 'works', 3)) || []
  return {
    props: { allPosts, allWorks },
  }
}
export default Index
