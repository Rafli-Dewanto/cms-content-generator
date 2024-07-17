import { ComponentConfig } from "@measured/puck";
import IphoneCardBlock from "./iphone-card";

export type IphoneCardProps = {
  price: string;
  title: string;
  imageSource: string;
  productUrl?: string;
  slug?: string;
};

export const IphoneCard: ComponentConfig<IphoneCardProps> = {
  label: "iPhone Card",
  fields: {
    productUrl: { type: "text", label: "Product URL" },
    imageSource: { type: "text" },
    price: { type: "number" },
    title: { type: "text" },
    slug: { type: "text" },
  },
  defaultProps: {
    imageSource: `${process.env.NEXT_PUBLIC_HOST_CDN}/pub/media/wysiwyg/ibox/information-iphone15/ID_iPhone_15_Pro_Max_Natural_Titanium_PDP_Image_Position_1A_Natural.jpg`,
    price: "24999000",
    title: "iPhone 15 Pro Max",
    productUrl: "",
  },
  render: ({ imageSource, price, title, productUrl: url }) => (
    <IphoneCardBlock src={imageSource} title={title} price={price} url={url} />
  ),
};
