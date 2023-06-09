import Image from "next/image";

const CoverImage = ({ title, url }) => {
  return (
    <div className="relative w-full my-4 pb-[55%]">
      <Image
        src={url}
        quality={60}
        alt={`Cover image for ${title}`}
        placeholder="blur"
        blurDataURL={`${url}?auto=format,compress&q=1&blur=500&w=2`}
        priority
        fill
        sizes="100vw"
        style={{
          objectFit: "cover"
        }} />
    </div>
  );
}
export default CoverImage
