import { formatRupiah } from "@/utils/format-rupiah";
import Link from "next/link";

type ProductCardProps = {
  name: string;
  price: number;
  thumbnail: string;
  productURL: string;
};

const ProductCard = (props: ProductCardProps) => {
  const {
    name = "Product Name",
    price = 15000000,
    thumbnail = "https://placehold.co/600x400/png",
    productURL = "",
  } = props;

  return (
    <Link href={productURL}>
      <div className="relative mx-auto my-0 block h-auto max-w-[300px] border border-[#dedede]">
        {/* Next Image Component doesn't work with CDN */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={thumbnail}
          alt={name}
          loading="lazy"
          width={100}
          height={100}
          style={{ width: "96%" }}
          className="block aspect-square h-auto max-w-full object-contain p-6"
        />

        <div className="mx-auto mb-6 px-2 text-center text-base font-bold tracking-[0.03em]">
          {name}
        </div>
        <div className="mx-auto mb-6 mt-4 px-2 text-center text-base tracking-[0.03em]">
          {formatRupiah(Number(price))}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
