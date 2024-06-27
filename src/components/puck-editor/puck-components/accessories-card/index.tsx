import { ComponentConfig } from "@measured/puck";
import AccessoriesCardBlock from "./accessories-card";

export type AccessoriesCardProps = {
  imageSource: string;
  title: string;
  href: string;
  className?: string;
};

export const AccessoriesCard: ComponentConfig<AccessoriesCardProps> = {
  label: "Accessories Card",
  fields: {
    imageSource: { type: "text" },
    title: { type: "text" },
    href: { type: "text" },
    className: { type: "text" },
  },
  defaultProps: {
    imageSource: `
    ${process.env.NEXT_PUBLIC_HOST_CDN}/pub/media/wysiwyg/ibox/information-iphone15/image_2023-10-12_22-36-43.png
    `,
    title: "Airpods",
    href: "https://ibox.co.id/page/iphone-15-information#promosi-dan-cicilan",
  },
  render: ({ imageSource, title, href, className }) => (
    <AccessoriesCardBlock
      className={className}
      imageSource={imageSource}
      title={title}
      href={href}
    />
  ),
};
