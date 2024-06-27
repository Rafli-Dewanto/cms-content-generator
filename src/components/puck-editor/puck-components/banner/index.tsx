import { ComponentConfig } from "@measured/puck";
import BannerBlock from "./banner";

export type BannerProps = {
  imageSource: string;
  className?: string;
};

export const Banner: ComponentConfig<BannerProps> = {
  label: "Banner",
  fields: {
    imageSource: { type: "text", label: "Image URL" },
    className: { type: "text", label: "Class Name" },
  },
  render: ({ imageSource, className }) => (
    <BannerBlock className={className} imageSource={imageSource} />
  ),
};
