import { useState } from 'react'
import { getAllPosts, getAllCategories } from '@/lib/cosmic'
import PostList from '@/components/PostList'
import { PageMeta } from '@/components/Meta'
import Layout from '@/components/Layout'

const Works = ({ allPosts, allWorkCategories, preview }) => {
  const [filterCategory, setFilterCategory] = useState('All')

  const filteredPosts = allPosts.filter(
    work => work.metadata.category.title === filterCategory
  )

  return (
    <>
      <PageMeta
        title="Works | Developer Portfolio"
        description="The works of this developer"
      />
      <Layout preview={preview}>
        <h1 className="text-2xl md:text-3xl text-fore-primary font-bold">
          Works
        </h1>
        <ul className="flex gap-x-4 my-4">
          <li
            className={
              'All' === filterCategory
                ? 'cursor-pointer font-bold filter--active transition'
                : 'cursor-pointer text-fore-subtle transition'
            }
            onClick={() => setFilterCategory('All')}
            key={'All'}
          >
            All
          </li>
          {allWorkCategories.map(category => (
            <li
              className={
                category.title === filterCategory
                  ? 'cursor-pointer font-bold filter--active transition'
                  : 'cursor-pointer text-fore-subtle transition hover:text-accent'
              }
              onClick={() => setFilterCategory(category.title)}
              key={category.title}
            >
              {category.title}
            </li>
          ))}
        </ul>
        <PostList
          allPosts={filterCategory === 'All' ? allPosts : filteredPosts}
          postType="works"
          home={false}
        />
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = null }) {
  const allPosts = (await getAllPosts(preview, 'works')) || []
  const allWorkCategories = (await getAllCategories('work-categories')) || []
  return {
    props: { allPosts, allWorkCategories, preview },
  }
}
export default Works
