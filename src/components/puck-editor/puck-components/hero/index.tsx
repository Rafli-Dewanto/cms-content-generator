import { ComponentConfig } from "@measured/puck";
import HeroBlock from "./hero";

export type HeroProps = {
  imageSource: string;
  className?: string;
};

export const Hero: ComponentConfig<HeroProps> = {
  label: "Hero",
  fields: {
    className: { type: "text", label: "Class Name" },
    imageSource: { type: "text", label: "Image URL" },
  },
  defaultProps: {
    imageSource: `${process.env.NEXT_PUBLIC_HOST_CDN}/pub/media/wysiwyg/ibox/information-iphone15/Web-category-pre-order-_black-out-date_---web-banner-iphone-15--desktop_.webp`,
  },
  render: ({ imageSource, className }) => {
    return <HeroBlock imageSource={imageSource} className={className} />;
  },
};
