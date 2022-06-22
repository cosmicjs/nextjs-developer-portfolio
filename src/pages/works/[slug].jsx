import { useRouter } from 'next/router'
import PostBody from '@/components/PostBody'
import PostHeader from '@/components/PostHeader'
import { getAllPostsWithSlug, getPostAndMorePosts } from '@/lib/cosmic'
import PostTitle from '@/components/PostTitle'
import markdownToHtml from '@/lib/markdownToHtml'
import AlertPreview from '@/components/AlertPreview'
import PageNotFound from '../404'
import Loader from '@/components/Loader'
import { PostMeta } from '@/components/Meta'

const Post = ({ post }) => {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <PageNotFound />
  }
  return (
    <>
      {router.isFallback ? (
        <PostTitle>
          <div className="flex justify-center items-center">
            <Loader />
          </div>
        </PostTitle>
      ) : (
        <>
          <PostMeta
            title={post.title}
            description={post.metadata.excerpt}
            slug={post.slug}
            page="works"
            imageUrl={post.metadata.cover_image.imgix_url}
          />
          <article className="border-b border-back-subtle py-8 mb-8">
            {post.status === 'draft' ? (
              <AlertPreview preview={true} />
            ) : undefined}
            <PostHeader post={post} />
            <PostBody content={post.content} />
          </article>
        </>
      )}
    </>
  )
}
export default Post

export async function getStaticProps({ params, preview = null }) {
  const data = await getPostAndMorePosts(params.slug, preview)
  const content = await markdownToHtml(data.post?.metadata?.content || '')

  return {
    props: {
      preview,
      post: {
        ...data.post,
        content,
      },
      morePosts: data.morePosts || [],
    },
  }
}

export async function getStaticPaths() {
  const allPosts = (await getAllPostsWithSlug()) || []
  return {
    paths: allPosts.map(post => `/works/${post.slug}`),
    fallback: true,
  }
}
