import PostPreview from './PostPreview'

const MorePosts = ({ posts }) => {
  return (
    <section>
      <h2 className="mb-8 text-xl font-bold tracking-tighter leading-tight">
        More Stories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        {posts.map(post => (
          // <PostPreview
          //   key={post.slug}
          //   title={post.title}
          //   slug={post.slug}
          //   excerpt={post.metadata.excerpt}
          // />
          <></>
        ))}
      </div>
    </section>
  )
}
export default MorePosts
