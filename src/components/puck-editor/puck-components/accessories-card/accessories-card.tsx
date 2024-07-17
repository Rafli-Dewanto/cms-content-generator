import { cn } from "@/lib/utils";
import Link from "next/link";

type Props = {
  imageSource: string;
  title: string;
  href: string;
  className?: string;
};

const AccessoriesCard = (props: Props) => {
  const { href, imageSource, title, className } = props;
  return (
    <div
      className={cn(`flex items-center justify-center rounded border border-[#dedede]`, className)}
    >
      <Link href={href} target="_blank" rel="noreferrer">
        <div className="h-[200px] w-[200px]">
          <img className="grid place-items-center object-contain" src={imageSource} alt={title} />
        </div>
        <p className="mx-auto mb-4 pt-4 text-center text-base font-bold tracking-[0.03em]">
          {title}
        </p>
      </Link>
    </div>
  );
};

export default AccessoriesCard;
