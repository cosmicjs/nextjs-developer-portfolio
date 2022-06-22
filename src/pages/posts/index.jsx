import { useState } from 'react'
import { getAllPosts, getAllCategories } from '@/lib/cosmic'
import PostList from '@/components/PostList'
import { PageMeta } from '@/components/Meta'

const Posts = ({ allPosts, allPostCategories }) => {
  const [filterCategory, setFilterCategory] = useState('All')

  const filteredPosts = allPosts.filter(
    post => post.metadata.category.title === filterCategory
  )

  return (
    <>
      <PageMeta
        title="Posts | Developer Portfolio"
        description="The blog posts of this developer"
      />
      <h1 className="text-2xl md:text-3xl text-fore-primary font-bold">
        Posts
      </h1>
      <ul className="flex flex-wrap gap-y-2 sm:gap-y-0 gap-x-4 my-4">
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
        {allPostCategories.map(category => (
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
        postType="posts"
        home={false}
      />
    </>
  )
}

export async function getStaticProps({ preview }) {
  const allPosts = (await getAllPosts(preview, 'posts')) || []
  const allPostCategories = (await getAllCategories('post-categories')) || []
  return {
    props: { allPosts, allPostCategories },
    revalidate: 60,
  }
}
export default Posts
