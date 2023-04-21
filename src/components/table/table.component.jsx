import React from "react";
import { useSelector } from "react-redux";
import { selectOrders } from "../../store/orders/orders.selector";
import TableColumn from "../table-column/table-column.component";

const Table = () => {
  const orders = useSelector(selectOrders);

  return (
    <div>
      {/* <div className="pb-4 w-full">
        <label htmlFor="table-search" className="sr-only">
          Search
        </label>
        <div className="relative mt-1 ">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            id="table-search"
            className="block mt-4 p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80  focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400 dark:text-grey-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search for items"
          />
        </div>
      </div> */}

      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead style={{backgroundColor: "#F4B1A1"}} className="text-xs text-white uppercase  dark:bg-gray-300 dark:text-white">
          <tr>
            <th scope="col" className="p-4">
              <div className="flex items-center">
                <input
                  id="checkbox-all-search"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label htmlFor="checkbox-all-search" className="sr-only">
                  Checkbox
                </label>
              </div>
            </th>
            <th scope="col" className="px-6 py-3">
              Product name
            </th>
            <th scope="col" className="px-6 py-3">
              Color
            </th>
            <th scope="col" className="px-6 py-3">
              Category
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {orders.map((eachorders) => {
            const { id } = eachorders;
            return <TableColumn key={id} order={eachorders} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
