import { ComponentConfig } from "@measured/puck";
import CaraMembeliBlock from "./cara-membeli";

export type CaraMembeliProps = {
  title: string;
  icon: string;
  description: string;
  subheading: string;
  listItems: Array<{ text: string }>;
  anchorTitle: string;
  anchorHref: string;
  className?: string;
};

export const CaraMembeli: ComponentConfig<CaraMembeliProps> = {
  label: "Cara Membeli",
  fields: {
    title: { type: "text" },
    className: { type: "text" },
    icon: {
      type: "select",
      options: [
        {
          label: "Beli Online",
          value:
            "https://bim4s4kti.eraspace.com/pub/media/wysiwyg/ibox/information-iphone15/Group.png",
        },
        {
          label: "Click & Pickuup",
          value:
            "https://bim4s4kti.eraspace.com/pub/media/wysiwyg/ibox/information-iphone15/Group_3_.png",
        },
        {
          label: "Pesan di Toko",
          value:
            "https://bim4s4kti.eraspace.com/pub/media/wysiwyg/ibox/information-iphone15/Group_2_.png",
        },
      ],
    },
    description: { type: "text" },
    subheading: { type: "text" },
    listItems: {
      label: "List Items",
      type: "array",
      arrayFields: {
        text: { type: "text" },
      },
      getItemSummary(item) {
        return item.text;
      },
      defaultItemProps: { text: "Click here to change text" },
    },
    anchorTitle: { type: "text", label: "Anchor Title" },
    anchorHref: { type: "text", label: "Anchor Href" },
  },
  defaultProps: {
    title: "Cara Membeli",
    icon: "https://bim4s4kti.eraspace.com/pub/media/wysiwyg/ibox/information-iphone15/Group.png",
    description: "Cara Membeli",
    subheading: "Cara Membeli",
    listItems: [{ text: "Cara Membeli" }],
    anchorTitle: "Cara Membeli",
    anchorHref: "#cara-membeli",
  },
  render: props => {
    return <CaraMembeliBlock {...props} />;
  },
};
