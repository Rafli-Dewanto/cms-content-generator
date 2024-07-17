import { ComponentConfig } from "@measured/puck";

export type ListProps = {
  listItems: Array<{ text: string }>;
  ordered: 1 | 0;
  className?: string;
};

export const ListComponent: ComponentConfig<ListProps> = {
  label: "List",
  defaultProps: {
    listItems: [{ text: "List Item" }],
    ordered: 1,
    className: "",
  },
  fields: {
    listItems: {
      type: "array",
      label: "List Items",
      arrayFields: {
        text: { type: "text", label: "List Item" },
      },
    },
    ordered: {
      type: "number",
      label: "Ordered List",
    },
    className: {
      type: "text",
      label: "Class Name",
    },
  },
  render: ({ listItems, ordered, className }) => {
    const ListTag = ordered ? "ol" : "ul";
    return (
      <ListTag className={className}>
        {listItems.map(item => (
          <li key={item.text.replaceAll(" ", "-").concat("-", listItems.indexOf(item).toString())}>
            {item.text}
          </li>
        ))}
      </ListTag>
    );
  },
};
