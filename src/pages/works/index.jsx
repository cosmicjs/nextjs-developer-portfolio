import { useState } from 'react'
import Layout from '@/components/Layout'
import { getAllPosts, getAllWorkCategories } from '@/lib/cosmic'
import PostList from '@/components/PostList'
import Head from 'next/head'

const Works = ({ allPosts, allWorkCategories }) => {
  const [filterCategory, setFilterCategory] = useState('All')

  const filteredPosts = allPosts.filter(
    work => work.metadata.category.title === filterCategory
  )

  return (
    <>
      <Head>
        <title>Works | Developer Portfolio</title>
        <meta property="og:title" content="Works | Developer Portfolio" />
        <meta property="og:image" content="/images/Cosmic_OGImage.png" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="The works of this developer" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@CosmicJS" />
        <meta name="twitter:title" content="Works | Developer Portfolio" />
        <meta
          name="twitter:description"
          content="The works of this developer"
        />
        <meta
          name="twitter:image"
          content="https://imgix.cosmicjs.com/7832da80-eb5c-11ec-bb77-f7704be6fe97-CosmicOGImage.png"
        />
      </Head>
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
    </>
  )
}

export async function getStaticProps({ preview }) {
  const allPosts = (await getAllPosts(preview, 'works')) || []
  const allWorkCategories = (await getAllWorkCategories()) || []
  return {
    props: { allPosts, allWorkCategories },
  }
}
export default Works
