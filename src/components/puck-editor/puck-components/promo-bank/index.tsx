import { ComponentConfig } from "@measured/puck";
import PromoBankBlock from "./promo-bank";

export const PromoBank: ComponentConfig = {
  label: "Promo Bank",
  render: () => {
    return <PromoBankBlock />;
  },
};
