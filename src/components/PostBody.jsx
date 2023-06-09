import markdownStyles from './markdown-styles.module.css'
import ReactMarkdown from 'react-markdown'
import Image from "next/image";

const components = {
  a: a => {
    return (
      <a href={a.href} rel="noopener noreferrer" target="_blank">
        {a.children}
      </a>
    )
  },
  img: img => {
    return (
      <Image
        src={img.src}
        alt={img.alt}
        width={400}
        height={300}
        quality={50}
        sizes="100vw"
        style={{
          width: "100%",
          height: "auto",
          objectFit: "contain",
          objectPosition: "center"
        }} />
    );
  },
}

const PostBody = ({ content }) => {
  return (
    <div className="max-w-2xl mx-auto">
      <ReactMarkdown
        className={markdownStyles['markdown']}
        components={components}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}
export default PostBody
