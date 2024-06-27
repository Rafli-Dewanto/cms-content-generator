import { ComponentConfig } from "@measured/puck";

export type ImageProps = {
  src: string;
  alt?: string;
};

export const ImageBlock: ComponentConfig<ImageProps> = {
  label: "Image",
  fields: {
    src: { type: "text", label: "Image URL" },
    alt: { type: "text", label: "Alt" },
  },
  render: ({ src, alt }) => {
    return (
      <img
        src={src}
        alt={alt}
        loading="lazy"
        fetchPriority="high"
        className="h-full w-full object-cover"
      />
    );
  },
};
