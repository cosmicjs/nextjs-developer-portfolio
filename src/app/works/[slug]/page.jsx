import PostBody from '@/components/PostBody'
import PostHeader from '@/components/PostHeader'
import { getPostAndMorePosts } from '@/lib/cosmic'
import AlertPreview from '@/components/AlertPreview'

import { PostMeta } from '@/components/Meta'

const SingleWork = async ({ params }) => {
  const { post } = await getPostAndMorePosts(params.slug)

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
        {post.status === 'draft' ? <AlertPreview preview={true} /> : undefined}
        <PostHeader post={post} />
        <PostBody content={post.metadata.content} />
      </article>
    </>
  )
}
export default SingleWork
