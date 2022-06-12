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
        placeholder="blur"
        blurDataURL={`${url}?w=10`}
      />
    </div>
  )
}
export default CoverImage
