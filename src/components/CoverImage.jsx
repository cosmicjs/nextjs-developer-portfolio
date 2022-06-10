import Image from 'next/image'

const CoverImage = ({ title, url }) => {
  return (
    <div>
      <Image
        src={url}
        alt={`Cover image for ${title}`}
        width={1200}
        height={700}
        quality={60}
        layout="responsive"
        objectFit="contain"
        priority
        sizes="50vw"
      />
    </div>
  )
}
export default CoverImage
