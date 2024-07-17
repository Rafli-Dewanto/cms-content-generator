import { ComponentConfig } from "@measured/puck";
import SectionCardBlock from "./section-card";

export type SectionCardProps = {
  id: string;
  title: string;
  className: string;
};

export const SectionCard: ComponentConfig<SectionCardProps> = {
  label: "Section Card",
  fields: {
    id: { type: "text" },
    title: { type: "text" },
    className: { type: "text" },
  },
  render: ({ id, title, className }) => {
    return <SectionCardBlock id={id} title={title} className={className} />;
  },
};
