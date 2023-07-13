import { getAllPosts, getAllCategories, getPageBySlug } from '@/lib/cosmic'
import FilteredPosts from '@/components/FilteredPosts'
import { draftMode } from 'next/headers'
import getMetadata from 'helpers/getMetadata'

async function getData() {
  const { isEnabled } = draftMode()
  const [allPosts, allPostCategories] = await Promise.all([
    getAllPosts(isEnabled, 'posts') || [],
    getAllCategories('post-categories') || [],
  ])
  return {
    allPosts,
    allPostCategories,
  }
}

export async function generateMetadata() {
  const [socialData, siteSettings] = await Promise.all([
    getPageBySlug('social-config', 'metadata'),
    getPageBySlug('site-settings', 'metadata'),
  ])

  const title = 'Posts | Developer Portfolio'
  const description = 'The blog posts of this developer'
  const image = getMetadata(
    siteSettings?.metadata?.default_meta_image?.imgix_url
  )
  const url = getMetadata(`${siteSettings?.metadata.site_url}/posts`)
  const twitterHandle = getMetadata(socialData?.metadata?.twitter)

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
      creator: twitterHandle,
      images: [image],
    },
  }
}

const PostsPage = async () => {
  const data = await getData()
  const allPosts = data.allPosts
  const allPostCategories = data.allPostCategories

  return (
    <>
      <h1 className="text-2xl md:text-3xl text-fore-primary font-bold">
        Posts
      </h1>
      <FilteredPosts
        posts={allPosts}
        categories={allPostCategories}
        postType={'posts'}
      />
    </>
  )
}

export const revalidate = 60
export default PostsPage
