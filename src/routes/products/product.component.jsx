import React, { useEffect, useState } from "react";
import { MdAddCircle } from "react-icons/md";
import { getProductsCollectionandDocuments } from "../../utils/firebase/firebase";
import { useSelector } from "react-redux";
import { selectProducts } from "../../store/product/product.selector";
import AddCustomProducts from "../../components/custom-addproduct/addProduct.component";

const Products = () => {

  const productList = useSelector(selectProducts);
  
  const [addproductModal, setAddProductModal] = useState(false)

  const setModal = () => {
    setAddProductModal(false)
  }

  return (
    <div className=" text-3xl text-main">
      <div className="p-4 sm:ml-64">
        <div className="flex mb-4">
          <h1 className=" text-green-800 text-xl font-bold "> Products </h1>
        </div>

        <div>
          <div>
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead
               
                className="text-xs text-white uppercase  dark:bg-green-800 dark:text-white"
              >
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
                    ProductName
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
                  <th onClick={() => setAddProductModal(true)} scope="col" className="px-6 py-3">
                    <MdAddCircle />
                  </th>
                </tr>
              </thead>
              <tbody>
                {productList.map((eachproduct) => {
                  const { name, color, category, price, id } = eachproduct;
                  return (
                    <tr key={id} className="bg-white border-b ">
                      <td className="w-4 p-4">
                        <div className="flex items-center">
                          <input
                            id="checkbox-table-search-1"
                            type="checkbox"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            htmlFor="checkbox-table-search-1"
                            className="sr-only"
                          >
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
                    </tr>
                  );
                })}

                { addproductModal && <AddCustomProducts setModal={setModal} /> }
              </tbody>
            </table>
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default Products;
