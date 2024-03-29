import { deleteDoc, doc } from "firebase/firestore";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  approveOrder,

  deleteOrder,

} from "../../store/orders/orders.action";
import { selectOrders } from "../../store/orders/orders.selector";

import {
  db,
  deleteocumentsFroomCollections,
  updateDocumentsFromCollection,
} from "../../utils/firebase/firebase";

import { MdCheckCircle } from "react-icons/md";

const TableColumn = ({ order }) => {
  const dispatch = useDispatch();

  const { category, price, color, name, id, approved } = order;

  const orders = useSelector(selectOrders);

  const deleteOrdersHandler = (id) => {
    console.log(id);

    deleteocumentsFroomCollections(id);
    dispatch(deleteOrder(orders, order));
  };

  const approveOrdersHandlers = (id) => {
    updateDocumentsFromCollection(id);

    dispatch(approveOrder(orders, order));
  };

  return (
    <>
      <tr className="bg-white border-b ">
        <td className="w-4 p-4">
          <div className="flex items-center">
            <input
              id="checkbox-table-search-1"
              type="checkbox"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label htmlFor="checkbox-table-search-1" className="sr-only">
              checkbox
            </label>
          </div>
        </td>
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-400 whitespace-nowrap "
        >
          {name}
        </th>
        <td className="px-6 py-4">{color}</td>
        <td className="px-6 py-4">{category}</td>
        <td className="px-6 py-4">{price}</td>

        {approved ? (
          <td className="px-6 gap-3 flex items-center py-4">
            <a
              href="#"
              className="font-medium flex items-center text-white dark:text-gray-400 rounded  py-1 hover:underline"
            >
              Approved <MdCheckCircle className=" mx-1 text-green-800" />
            </a>
          </td>
        ) : (
          <td className="px-6 gap-3 flex items-center py-4">
            <a
              href="#"
              onClick={() => approveOrdersHandlers(id)}
              className="font-medium text-white dark:text-white rounded px-3 py-1 bg-blue-500 hover:underline"
            >
              Approve
            </a>

            <a
              href="#"
              onClick={() => {
                deleteOrdersHandler(id);
              }}
              className="font-medium text-white dark:text-white rounded px-3 py-1 bg-red-500 hover:underline"
            >
              Delete
            </a>
          </td>
        )}
        {/* <td className="px-6 gap-3 flex items-center py-4">
          <a
            href="#"
            onClick={() => updateDocumentsFromCollection(id)}
            className="font-medium text-white dark:text-white rounded px-3 py-1 bg-blue-500 hover:underline"
          >
            Approve
          </a>

          <a
            href="#"
            onClick={() => {
              deleteOrdersHandler(id);
            }}
            className="font-medium text-white dark:text-white rounded px-3 py-1 bg-red-500 hover:underline"
          >
            Delete
          </a>
        </td> */}
      </tr>
    </>
  );
};

export default TableColumn;
