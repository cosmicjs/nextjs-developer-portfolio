import Date from './Date'
import Link from 'next/link'
import { ForwardArrowIcon } from '@/configs/icons'

const PostList = ({ allPosts, postType, home }) => {
  return <>
    <ul
      className={!home ? 'grid grid-cols-1 md:grid-cols-2 gap-8' : undefined}
    >
      {allPosts.map(post => (
        <li
          className={
            home
              ? 'py-5'
              : 'flex flex-col bg-white dark:bg-gray-800 rounded shadow-sm hover:shadow-md transition-all relative'
          }
          key={post.title}
        >
          <Link
            href={`/${postType}/${post.slug}`}
            className={
              home
                ? 'group flex flex-col lg:flex-row lg:items-center lg:justify-between px-8 py-5 -my-5 -mx-7 hover:bg-back-subtle transition-colors border-b-2'
                : 'group flex flex-col justify-start gap-y-6 p-8 h-full'
            }>

            <div className="max-w-lg">
              <h3 className="text-xl font-bold mb-1 group-hover:text-accent transition-colors">
                {post.title}{' '}
                {post.status === 'draft' && home && (
                  <span className="text-fore-subtle ml-2">
                    &#40;Draft&#41;
                  </span>
                )}
              </h3>
              <p className="text-fore-subtle mb-3 lg:mb-0 lg:pr-6">
                {post.metadata.excerpt}
              </p>
            </div>
            {home ? (
              <Date
                dateString={post.created_at}
                formatStyle="LLLL, yyyy"
              ></Date>
            ) : (
              <p className="flex items-center text-fore-subtle text-sm">
                Read more
                <span className="group hidden group-hover:block ml-2">
                  <ForwardArrowIcon />
                </span>
                {post.status === 'draft' && (
                  <span className="absolute right-1 top-1 bg-back-subtle px-3 py-1 rounded text-accent">
                    Draft
                  </span>
                )}
              </p>
            )}

          </Link>
        </li>
      ))}
    </ul>
  </>;
}
export default PostList
