import { cn } from "@/lib/utils";
import { ComponentConfig } from "@measured/puck";

export type HeadingProps = {
  fontWeight:
    | "thin"
    | "extralight"
    | "light"
    | "normal"
    | "medium"
    | "semibold"
    | "bold"
    | "extrabold"
    | "black";
  className?: string;
  title: string;
  textAlign: "left" | "center" | "right";
  size:
    | "xs"
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "6xl"
    | "7xl"
    | "8xl"
    | "9xl";
};

export const Heading: ComponentConfig<HeadingProps> = {
  label: "Heading",
  fields: {
    fontWeight: {
      type: "select",
      options: [
        {
          label: "Thin",
          value: "thin",
        },
        {
          label: "Extralight",
          value: "extralight",
        },
        {
          label: "Light",
          value: "light",
        },
        {
          label: "Normal",
          value: "normal",
        },
        {
          label: "Medium",
          value: "medium",
        },
        {
          label: "Semibold",
          value: "semibold",
        },
        {
          label: "Bold",
          value: "bold",
        },
        {
          label: "Extrabold",
          value: "extrabold",
        },
        {
          label: "Black",
          value: "black",
        },
      ],
    },
    className: {
      type: "text",
    },
    title: {
      type: "text",
    },
    size: {
      type: "select",
      options: [
        {
          label: "xs",
          value: "xs",
        },
        {
          label: "sm",
          value: "sm",
        },
        {
          label: "md",
          value: "md",
        },
        {
          label: "lg",
          value: "lg",
        },
        {
          label: "xl",
          value: "xl",
        },
        {
          label: "2xl",
          value: "2xl",
        },
        {
          label: "3xl",
          value: "3xl",
        },
        {
          label: "4xl",
          value: "4xl",
        },
        {
          label: "5xl",
          value: "5xl",
        },
        {
          label: "6xl",
          value: "6xl",
        },
        {
          label: "7xl",
          value: "7xl",
        },
        {
          label: "8xl",
          value: "8xl",
        },
        {
          label: "9xl",
          value: "9xl",
        },
      ],
    },
    textAlign: {
      type: "radio",
      options: [
        {
          label: "Left",
          value: "left",
        },
        {
          label: "Center",
          value: "center",
        },
        {
          label: "Right",
          value: "right",
        },
      ],
    },
  },
  defaultProps: {
    fontWeight: "bold",
    title: "Heading",
    textAlign: "center",
    size: "2xl",
  },
  render: ({ title, textAlign, size, className, fontWeight }) => (
    <div style={{ padding: 64 }}>
      <h1 style={{ textAlign }} className={cn(`text-${size} font-${fontWeight}`, className)}>
        {title}
      </h1>
    </div>
  ),
};
