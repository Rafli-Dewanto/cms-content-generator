import { ComponentConfig } from "@measured/puck";
import InstallmentBlock from "./installment";

export type InstallmentProps = object;

export const Installment: ComponentConfig<InstallmentProps> = {
  label: "Installment",
  defaultProps: {
    price: "Rp. 0",
    twelveMonthsInstallmentPrice: "Rp. 0",
    eighteenMonthsInstallmentPrice: "Rp. 0",
    twentyFourMonthsInstallmentPrice: "Rp. 0",
  },
  fields: {
    price: { type: "text" },
    twelveMonthsInstallmentPrice: { type: "text" },
    eighteenMonthsInstallmentPrice: { type: "text" },
    twentyFourMonthsInstallmentPrice: { type: "text" },
  },
  render: () => <InstallmentBlock />,
};

export default Installment;
