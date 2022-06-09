import Image from 'next/image'

const CoverImage = ({ title, url }) => {
  return (
    <div className="relative">
      <Image
        src={url}
        width="100%"
        height="75%"
        alt={`Cover image for ${title}`}
        layout="responsive"
        objectFit="contain"
        priority
      />
    </div>
  )
}
export default CoverImage
