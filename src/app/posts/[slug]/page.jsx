import PostBody from '@/components/PostBody'
import PostHeader from '@/components/PostHeader'
import { getPostAndMorePosts } from '@/lib/cosmic'
import { PostMeta } from '@/components/Meta'
import { notFound } from 'next/navigation'
import { draftMode } from 'next/headers'

const SinglePost = async ({ params }) => {
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
        page="posts"
        imageUrl={post.metadata.cover_image.imgix_url}
      />
      <article className="border-b border-back-subtle py-8 mb-8">
        <PostHeader post={post} />
        <PostBody content={post.metadata.content} />
      </article>
    </>
  )
}
export default SinglePost
