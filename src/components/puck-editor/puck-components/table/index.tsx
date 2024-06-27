/* eslint-disable react/no-array-index-key */
import { ComponentConfig, DropZone } from "@measured/puck";

export type TableProps = {
  rows: number;
  columns: number;
};

export const Table: ComponentConfig<TableProps> = {
  label: "Table",
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
  render: ({ rows, columns }) => {
    return (
      <div className="container mx-auto overflow-x-auto">
        <table className="w-full border-collapse border border-slate-400 bg-white shadow-sm">
          <tbody>
            {Array.from({ length: rows }).map((_, rowIndex) => (
              <tr key={rowIndex}>
                {Array.from({ length: columns }).map((_, colIndex) => (
                  <td
                    key={`${rowIndex}-${colIndex}`}
                    className="min-w-[24rem] border border-slate-300 p-2 text-center"
                  >
                    <DropZone zone={`${rowIndex}-${colIndex}`} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  },
};
