import CoverImage from './CoverImage'
import Link from 'next/link'

const PostPreview = ({ title, excerpt, slug }) => {
  return (
    <div>
      <div className="mb-5">
        {/* <CoverImage title={title} url={coverImage.imgix_url} /> */}
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link href={`/posts/${slug}`} className="hover:underline">
          {title}
        </Link>
      </h3>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
    </div>
  );
}
export default PostPreview
