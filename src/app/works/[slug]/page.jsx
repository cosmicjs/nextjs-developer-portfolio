import PostBody from '@/components/PostBody'
import PostHeader from '@/components/PostHeader'
import { getPostAndMorePosts, getPageBySlug } from '@/lib/cosmic'
import AlertPreview from '@/components/AlertPreview'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'
import getMetadata from 'helpers/getMetadata'

export async function generateMetadata({ params }) {
  const [getData, socialData, siteSettings] = await Promise.all([
    getPostAndMorePosts(params.slug),
    getPageBySlug('social-config', 'metadata'),
    getPageBySlug('site-settings', 'metadata'),
  ])
  const currentPage = 'works'

  const title = getMetadata(getData?.post?.title)
  const description = getMetadata(getData?.post?.metadata?.excerpt)
  const image = getMetadata(
    getData?.post?.metadata?.cover_image?.imgix_url,
    siteSettings?.metadata?.default_meta_image?.imgix_url ?? ''
  )
  const url = getMetadata(
    `${siteSettings?.metadata.site_url}/${currentPage}/${params.slug}`
  )
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

const SingleWork = async ({ params }) => {
  const { isEnabled } = draftMode()
  const getData = await getPostAndMorePosts(params.slug, isEnabled)

  if (!getData) {
    return notFound()
  }

  const post = getData.post

  return (
    <>
      <article className="border-b border-back-subtle py-8 mb-8">
        {post.status === 'draft' ? <AlertPreview preview={true} /> : undefined}
        <PostHeader post={post} />
        <PostBody content={post.metadata.content} />
      </article>
    </>
  )
}
export default SingleWork
