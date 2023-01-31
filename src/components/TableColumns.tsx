import { TableElement } from "./Table";

type TableColumnsProps = {
  tableElements: TableElement[];
};

function TableColumns({ tableElements }: TableColumnsProps) {
  return (
    <>
      {Object.keys(tableElements[0]).map(
        (key) =>
          key !== "color" &&
          key !== "pantone_value" && (
            <th className="px-6 py-5" key={key}>
              {key}
            </th>
          )
      )}
    </>
  );
}

export default TableColumns;
