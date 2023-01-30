import Image from "next/legacy/image";

const CoverImage = ({ title, url }) => {
  return (
    <div className="relative w-full my-4 pb-[55%]">
      <Image
        src={url}
        quality={60}
        alt={`Cover image for ${title}`}
        layout="fill"
        objectFit="cover"
        placeholder="blur"
        blurDataURL={`${url}?auto=format,compress&q=1&blur=500&w=2`}
        priority
      />
    </div>
  )
}
export default CoverImage
