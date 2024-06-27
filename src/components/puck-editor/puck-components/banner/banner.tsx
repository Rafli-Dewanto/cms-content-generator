import { cn } from "@/lib/utils";

type Props = {
  imageSource: string;
  className?: string;
};

const Banner = (props: Props) => {
  const { imageSource, className } = props;
  return (
    <div>
      <img
        width={323}
        height={200}
        src={imageSource}
        alt="iPhone"
        className={cn("hidden w-full lg:block", className)}
      />
      <img
        width={323}
        height={200}
        src={imageSource}
        alt="iPhone"
        className={cn("block w-full lg:hidden", className)}
      />
    </div>
  );
};

export default Banner;
