/* eslint-disable react/jsx-no-useless-fragment */
import { formatRupiah } from "@/utils/format-rupiah";

type IphoneCardProps = {
  src: string;
  title: string;
  price: string;
  // slug?: string;
  url?: string;
};

const IphoneCard = (props: IphoneCardProps) => {
  const { src, title, price, url } = props;
  // const { data, error, status } = useIphone(slug ?? "");

  return (
    <>
      <a href={url ?? ""}>
        <div className="relative mx-auto my-0 block h-auto max-w-[300px] border border-[#dedede]">
          {/* Next Image Component doesnt work with CDN */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={title}
            loading="lazy"
            width={100}
            height={100}
            style={{ width: "96%" }}
            className="block aspect-square h-auto max-w-full object-contain"
          />

          <div className="mx-auto mb-6 px-2 text-center text-base font-bold tracking-[0.03em]">
            {title}
          </div>
          {price ? (
            <div className="mx-auto mb-6 mt-4 px-2 text-center text-base tracking-[0.03em]">
              {formatRupiah(Number(price))}
            </div>
          ) : null}
          <div
            style={{
              color: "#88867e",
            }}
            className="mx-auto mb-8 mt-4 text-center text-base tracking-[0.03em]"
          />
        </div>
      </a>
    </>
  );
};

export default IphoneCard;
