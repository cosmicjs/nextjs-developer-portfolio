import { getAllPosts, getAllCategories } from '@/lib/cosmic'
import { PageMeta } from '@/components/Meta'
import FilteredPosts from '@/components/FilteredPosts'

async function getData() {
  const preview = false
  const allPosts = (await getAllPosts(preview, 'posts')) || []
  const allPostCategories = (await getAllCategories('post-categories')) || []
  return {
    allPosts,
    allPostCategories,
    preview,
  }
}

const PostsPage = async () => {
  const data = await getData()
  const allPosts = data.allPosts
  const allPostCategories = data.allPostCategories

  return (
    <>
      <PageMeta
        title="Posts | Developer Portfolio"
        description="The blog posts of this developer"
      />
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
