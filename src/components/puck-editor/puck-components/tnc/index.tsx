/* eslint-disable react/no-array-index-key */
import { DropZone, ComponentConfig } from "@measured/puck";
import TNC from "./tnc";

export type TncProps = {
  rows: number;
  columns: number;
};

export const Tnc: ComponentConfig<TncProps> = {
  label: "Syarat & Ketentuan",
  defaultProps: {
    rows: 3,
    columns: 3,
  },
  fields: {
    rows: {
      type: "number",
      label: "Number of Rows",
      min: 1,
      max: 10,
    },
    columns: {
      type: "number",
      label: "Number of Columns",
      min: 1,
      max: 10,
    },
  },
  render: ({ columns, rows }) => {
    return (
      <TNC>
        <div className="container mx-auto overflow-x-auto">
          <table className="w-full border-collapse border border-slate-400 bg-white shadow-sm">
            <tbody>
              {Array.from({ length: rows }).map((_, rowIndex) => (
                <tr key={rowIndex}>
                  {Array.from({ length: columns }).map((_, colIndex) => (
                    <td
                      key={`${rowIndex}-${colIndex}`}
                      className="h-[24rem] min-w-[24rem] border border-slate-300 text-center"
                    >
                      <DropZone zone={`${rowIndex}-${colIndex}`} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </TNC>
    );
  },
};
