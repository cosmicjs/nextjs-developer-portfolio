import React from 'react'
import PostList from '@/components/PostList'
import { FlaskIcon } from '@/configs/icons'

const WorksSection = ({ posts }) => {
  return (
    <section className="mt-24">
      <span className="flex items-center mb-8">
        <div className="bg-back-subtle p-2 mr-4 rounded-full">
          <FlaskIcon />
        </div>
        <h4 className="text-xl text-accent font-semibold">Works</h4>
      </span>
      <PostList allPosts={posts} postType="works" home={true} />
    </section>
  )
}

export default WorksSection
