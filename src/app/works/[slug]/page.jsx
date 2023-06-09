import PostBody from '@/components/PostBody'
import PostHeader from '@/components/PostHeader'
import { getPostAndMorePosts } from '@/lib/cosmic'
import AlertPreview from '@/components/AlertPreview'
import { draftMode } from 'next/headers'
import { PostMeta } from '@/components/Meta'
import { notFound } from 'next/navigation'

const SingleWork = async ({ params }) => {
  const { isEnabled } = draftMode()
  const getData = await getPostAndMorePosts(params.slug, isEnabled)

  if (!getData) {
    return notFound()
  }

  const post = getData.post

  return (
    <>
      <PostMeta
        title={post.title}
        description={post.metadata.excerpt}
        slug={post.slug}
        page="works"
        imageUrl={post.metadata.cover_image.imgix_url}
      />
      <article className="border-b border-back-subtle py-8 mb-8">
        {post.status === 'draft' ? <AlertPreview preview={true} /> : undefined}
        <PostHeader post={post} />
        <PostBody content={post.metadata.content} />
      </article>
    </>
  )
}
export default SingleWork
