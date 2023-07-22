import React, {useState}  from "react";
import { useSelector } from "react-redux";
import { selectOrders } from "../../store/orders/orders.selector";
import TableColumn from "../table-column/table-column.component";
import { MdAddCircle } from "react-icons/md";
import AddCustomOrderForm from "../custom-order/customorders.component";


const Table = () => {
  const orders = useSelector(selectOrders);

  const [setCustomAddOrders, showSetCustomAddOrders] = useState(false)
  
  const handleToggleShow = () => {
    showSetCustomAddOrders(!setCustomAddOrders)
  }


  return (
    <div>
        <table  className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-white uppercase  dark:bg-green-800 dark:text-white">
          <tr>
            <th scope="col" className="p-4">
              <div className="flex items-center">
                <input
                  id="checkbox-all-search"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label htmlFor="checkbox-all-search" className="sr-only">
                  checkbox
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

            <th onClick={handleToggleShow}  scope="col" className="px-6 py-3">
              <MdAddCircle />
            </th>

            
          </tr>
        </thead>
        <tbody>
          {orders.map((eachorders) => {
            const { id } = eachorders;
            return <TableColumn key={id} order={eachorders} />;
          })}

          {setCustomAddOrders && <AddCustomOrderForm toggle={handleToggleShow} /> }
        </tbody>
      </table>
    </div>
  );
};

export default Table;
