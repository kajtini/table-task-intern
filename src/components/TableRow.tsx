import { TableElement } from "./Table";

type TableRowProps = {
  tableElement: TableElement;
  handleClick: (id: number) => void;
  id: number;
};

function TableRow({ tableElement, handleClick, id }: TableRowProps) {
  return (
    <tr
      className="cursor-pointer"
      style={{ backgroundColor: tableElement.color }}
      onClick={() => handleClick(id)}
    >
      {Object.entries(tableElement).map(
        ([key, value]) =>
          key !== "color" &&
          key !== "pantone_value" && (
            <td key={key} className="px-6 py-5">
              {value}
            </td>
          )
      )}
    </tr>
  );
}

export default TableRow;
