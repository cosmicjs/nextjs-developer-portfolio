import { useRouter } from 'next/router'
import PostBody from '@/components/PostBody'
import PostHeader from '@/components/PostHeader'
import { getAllPostsWithSlug, getPostAndMorePosts } from '@/lib/cosmic'
import PostTitle from '@/components/PostTitle'
import Head from 'next/head'
import markdownToHtml from '@/lib/markdownToHtml'
import AlertPreview from '@/components/AlertPreview'
import PageNotFound from '../404'
import Loader from '@/components/Loader'

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
          <Head>
            <title>{post.title}</title>
            <meta name="description" content={post.metadata.excerpt} />
            <meta property="og:image" content="/images/Cosmic_OGImage.png" />
          </Head>
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
