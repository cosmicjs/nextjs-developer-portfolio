import Image from "next/legacy/image";

const ProductCard = ({ productName, imgPath, description, productLink }) => {
  return (
    <a
      href={productLink}
      className="hover:opacity-70 w-auto transition-opacity"
    >
      <div className="w-[230px] h-[270px] border rounded-md">
        <div className="flex justify-center items-center bg-back-secondary h-3/5 rounded-t-md relative">
          <Image src={imgPath} width={130} height={130} alt={productName} />
        </div>
        <div className="p-5 bg-white dark:bg-slate-900 rounded-b-md h-2/5">
          <h4 className="font-bold text-sm">{productName}</h4>
          <p className="text-sm pt-2">{description}</p>
        </div>
      </div>
    </a>
  )
}

export default ProductCard
