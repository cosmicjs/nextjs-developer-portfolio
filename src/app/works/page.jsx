import { getAllPosts, getAllCategories } from '@/lib/cosmic'
import { PageMeta } from '@/components/Meta'
import FilteredPosts from '@/components/FilteredPosts'

async function getData() {
  const preview = false
  const allPosts = (await getAllPosts(preview, 'works')) || []
  const allWorkCategories = (await getAllCategories('work-categories')) || []
  return {
    allPosts,
    allWorkCategories,
    preview,
  }
}

const WorksPage = async () => {
  const data = await getData()
  const allPosts = data.allPosts
  const allWorkCategories = data.allWorkCategories

  return (
    <>
      <PageMeta
        title="Works | Developer Portfolio"
        description="The works of this developer"
      />
      <h1 className="text-2xl md:text-3xl text-fore-primary font-bold">
        Works
      </h1>
      <FilteredPosts
        posts={allPosts}
        categories={allWorkCategories}
        postType={'works'}
      />
    </>
  )
}

export const revalidate = 60
export default WorksPage
