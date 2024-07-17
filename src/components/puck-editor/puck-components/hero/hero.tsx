import { cn } from "@/lib/utils";

type Props = {
  imageSource: string;
  className?: string;
};

const Hero = (props: Props) => {
  const { imageSource, className } = props;
  return (
    <section className="mx-auto grid w-full place-items-center">
      <img
        className={cn(`w-full object-cover lg:object-contain`, className)}
        defaultValue={`${process.env.NEXT_PUBLIC_HOST_CDN}/pub/media/wysiwyg/ibox/information-iphone15/Web-category-pre-order-_black-out-date_---web-banner-iphone-15--desktop_.webp`}
        alt="hero"
        src={imageSource}
        width={900}
        height={750}
      />
    </section>
  );
};

export default Hero;
