import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { addDocumentToCollection } from "../../utils/firebase/firebase";
import { MdOutlineClose } from "react-icons/md";
import { updateOrders } from "../../store/orders/orders.action";
import { useSelector } from "react-redux";
import { selectOrders } from "../../store/orders/orders.selector";

const AddCustomOrderForm = ({ toggle }) => {
  const { register, handleSubmit } = useForm();

  const orders = useSelector(selectOrders);

  const onSubmitAction = async (data) => {
    const { price } = data;
    console.log("_DFORMDATA", data);

    const priceNo = parseFloat(price);

    console.log(priceNo);

    console.log("price", price);

    try {
      await addDocumentToCollection({ ...data, price: priceNo });

      updateOrders(orders, { ...data, price: priceNo });
    } catch (error) {
      console.log(error, "Error Creating Doument");
    }

    toggle();
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center h-screen bg-gray-900 bg-opacity-50">
      <div className="bg-white relative rounded-lg shadow-md p-6 w-80">
        <span
          onClick={toggle}
          className=" absolute right-5 top-3 text-3xl text-orange-500"
        >
          {" "}
          <MdOutlineClose />
        </span>
        <h3 className="mb-4 text-xl font-medium text-gray-900">
          Add Custom Order
        </h3>
        <form onSubmit={handleSubmit(onSubmitAction)}>
          <div className="mb-4">
            <label
              htmlFor="productName"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Product Name
            </label>
            <input
              type="text"
              id="productName"
              className="border border-gray-300 px-3 py-2 rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full"
              {...register("name")}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="price"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Price
            </label>
            <input
              type="number"
              id="price"
              className="border border-gray-300 px-3 py-2 rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full"
              {...register("price")}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="color"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Color
            </label>
            <input
              type="text"
              id="color"
              className="border border-gray-300 px-3 py-2 rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full"
              {...register("color")}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="category"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Category
            </label>
            <input
              type="text"
              id="category"
              className="border border-gray-300 px-3 py-2 rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full"
              {...register("category")}
              required
            />
          </div>
          <button
            type="submit"
            className=" text-white px-4 py-2 rounded-lg text-sm font-medium bg-orange-600 "
          >
            Add Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCustomOrderForm;
