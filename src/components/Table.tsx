import axios from "axios";
import { useEffect, useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";
import PaginationBtn from "./PaginationBtn";
import SearchById from "./SearchById";
import TableColumns from "./TableColumns";
import TableRow from "./TableRow";

export type TableElement = {
  color: string;
  id: number;
  name: string;
  pantone_value: string;
  year: number;
};

function Table() {
  const [tableElements, setTableElements] = useState<TableElement[] | null>(
    null
  );
  const [searchedElement, setSearchedElement] = useState<TableElement | null>(
    null
  );
  const [modalItem, setModalItem] = useState<TableElement | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const perPage = 5;

  useEffect(() => {
    async function fetchData() {
      try {
        const [res1, res2] = await Promise.all([
          axios.get("https://reqres.in/api/products?page=1"),
          axios.get("https://reqres.in/api/products?page=2"),
        ]);

        setTableElements([...res1.data.data, ...res2.data.data]);
        setTotalPages(Math.ceil(res1.data.total / 5));
      } catch (err) {
        console.error(`Problem with getting the data ${err}`);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        if (tableElements) {
          if (+search >= 1 && +search <= tableElements?.length) {
            const res = await axios.get(
              `https://reqres.in/api/unknown/${search}`
            );

            setSearchedElement(res.data.data);
          } else {
            setSearchedElement(null);
          }
        }
      } catch (err) {
        console.error(`Problem with getting the data ${err}`);
      }
    }
    fetchData();
  }, [search]);

  function handleNextClick() {
    if (currentPage + 1 <= totalPages) {
      setCurrentPage((prevCurrentPage) => prevCurrentPage + 1);
    }
  }

  function handlePreviousClick() {
    if (currentPage - 1 >= 1) {
      setCurrentPage((prevCurrentPage) => prevCurrentPage - 1);
    }
  }

  function handleRowClick(id: number) {
    setIsOpen(true);
    const clickedItem = tableElements?.find((element) => element.id === id);
    if (clickedItem) {
      setModalItem(clickedItem);
    }
  }

  return (
    <>
      {tableElements && (
        <div className="max-w-xs sm:max-w-xl w-full">
          <SearchById search={search} setSearch={setSearch} />
          <table className="text-left w-full rounded-lg overflow-hidden text-lg mb-5">
            <thead className="bg-white bg-opacity-5">
              <tr>
                <TableColumns tableElements={tableElements} />
              </tr>
            </thead>
            <tbody>
              {searchedElement ? (
                <TableRow
                  id={searchedElement.id}
                  tableElement={searchedElement}
                  handleClick={handleRowClick}
                />
              ) : (
                tableElements
                  .map((tableElement) => (
                    <TableRow
                      key={tableElement.id}
                      id={tableElement.id}
                      tableElement={tableElement}
                      handleClick={handleRowClick}
                    />
                  ))
                  .slice((currentPage - 1) * perPage, perPage * currentPage)
              )}
            </tbody>
          </table>

          <div className="grid grid-cols-2 max-w-sm ml-auto gap-x-3">
            <PaginationBtn
              direction="previous"
              handlePreviousClick={handlePreviousClick}
              handleNextClick={handleNextClick}
            />
            <PaginationBtn
              direction="next"
              handlePreviousClick={handlePreviousClick}
              handleNextClick={handleNextClick}
            />
          </div>

          {isOpen && (
            <>
              <Modal element={modalItem} />
              <Backdrop setIsOpen={setIsOpen} />
            </>
          )}
        </div>
      )}
    </>
  );
}

export default Table;
