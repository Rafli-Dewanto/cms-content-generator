import { ComponentConfig } from "@measured/puck";
import PromoCardBlock from "./promo-card";

type iconOptionsValue =
  | "mystery-package"
  | "cart"
  | "debit"
  | "cicilan"
  | "my-eraspace"
  | "tecprotec"
  | "telkomsel"
  | "trade-in"
  | "voucher"
  | "xl";

export type PromoCardProps = {
  icon: iconOptionsValue;
  title: string;
  href: string;
  secondaryTitle: string;
  className?: string;
};

export const PromoCard: ComponentConfig<PromoCardProps> = {
  label: "Promo Card",
  defaultProps: {
    icon: "mystery-package",
    title: "Mystery Package",
    href: "",
    secondaryTitle: "hingga 4 juta",
  },
  fields: {
    className: {
      type: "text",
    },
    icon: {
      type: "select",
      options: [
        {
          label: "Mystery Package",
          value: "mystery-package",
        },
        {
          label: "Cart",
          value: "cart",
        },
        {
          label: "Debit",
          value: "debit",
        },
        {
          label: "Cicilan",
          value: "cicilan",
        },
        {
          label: "My Eraspace",
          value: "my-eraspace",
        },
        {
          label: "Delivery",
          value: "delivery",
        },
        {
          label: "Tecprotec",
          value: "tecprotec",
        },
        {
          label: "Telkomsel",
          value: "telkomsel",
        },
        {
          label: "XL",
          value: "xl",
        },
        {
          label: "Voucher",
          value: "voucher",
        },
        {
          label: "Trade in",
          value: "trade-in",
        },
      ],
    },
    title: { type: "text" },
    secondaryTitle: { type: "text", label: "Secondary title" },
    href: { type: "text" },
  },
  render: ({ icon, title, href, secondaryTitle, className }) => (
    <PromoCardBlock
      icon={icon}
      title={title}
      href={href}
      secondaryTitle={secondaryTitle}
      className={className}
    />
  ),
};
