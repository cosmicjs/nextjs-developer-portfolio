'use client'
import { useState } from 'react'
import PostList from './PostList'

const FilteredPosts = ({ posts, categories, postType }) => {
  const [filterCategory, setFilterCategory] = useState('All')

  const filteredPosts = posts?.filter(
    post => post.metadata.category.title === filterCategory
  )
  return (
    <>
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
        {categories.map(category => (
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
        allPosts={filterCategory === 'All' ? posts : filteredPosts}
        postType={postType}
        home={false}
      />
    </>
  )
}

export default FilteredPosts
