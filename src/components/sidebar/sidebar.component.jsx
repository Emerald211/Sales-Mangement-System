import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectTotalOrders } from "../../store/orders/orders.selector";
import { customSignOut } from "../../utils/firebase/firebase";

const Sidebar = () => {
  const navigate = useNavigate();

  const [nav, setnav] = useState(false);

  const totalOrders = useSelector(selectTotalOrders);
  return (
    <div>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        onClick={() => setnav(true)}
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      {nav && (
        <div className=" top-0 fixed flex flex-col items-center gap-3 text-white justify-center z-30 h-[100vh] w-[100vw] bg-green-800">
          <h1
            onClick={() => setnav(false)}
            className=" absolute right-10 top-5"
          >
            X
          </h1>

          <h1
            onClick={() => {
              navigate("/home");
              setnav(false);
            }}
            className="ml-3"
          >
            Dashboard
          </h1>
          <h1
            onClick={() => {
              navigate("/home/orders");
              setnav(false);
            }}
            className="ml-3"
          >
            Orders
          </h1>
          <h1
            onClick={() => {
              navigate("/home/inbox");
              setnav(false);
            }}
            className="ml-3"
          >
            Inbox
          </h1>
          <h1
            onClick={() => {
              navigate("/home/users");
              setnav(false);
            }}
            className="ml-3"
          >
            Users
          </h1>
          <h1
            onClick={() => {
              navigate("/home/products");
              setnav(false);
            }}
            className="ml-3"
          >
            Products
          </h1>
        </div>
      )}

      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div
         
          className="h-full px-3 py-4 overflow-y- bg-green-800 "
        >
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-base font-normal text-gray-900 hover:text-green-800 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-white"
              >
                <svg
                  aria-hidden="true"
                  className="w-6 h-6  group-hover:stroke-orange-500 transition duration-75 text-orange hover:text-orange-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                  <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                </svg>
                <span onClick={() => navigate("/home")} className="ml-3">
                  Dashboard
                </span>
              </a>
            </li>
            <li onClick={() => navigate("/home/orders")}>
              <a
                href="#"
                className="flex items-center p-2 text-base font-normal hover:text-green-800 group-hover:stoke-orange-500 rounded-lg dark:text-white dark:hover:bg-white"
              >
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 transition duration-75 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Orders</span>
                <span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-green-800 bg-white rounded-full dark:bg-white dark:text-green-800">
                  {totalOrders}
                </span>
              </a>
            </li>
            <li onClick={() => navigate("/home/inbox")}>
              <a
                href="#"
                className="flex items-center p-2 text-base font-normal group-hover:stoke-orange-500 rounded-lg dark:text-white hover:text-green-800 dark:hover:bg-white"
              >
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 transition"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path>
                  <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path>
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap ">Inbox</span>
              </a>
            </li>

            <li onClick={() => navigate("/home/users")}>
              <a
                href="#"
                className="flex items-center p-2 text-base font-normal group-hover:stoke-orange-500 rounded-lg dark:text-white hover:text-green-800 dark:hover:bg-white"
              >
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6  transition duration-75"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Users</span>
              </a>
            </li>
            <li onClick={() => navigate("/home/products")}>
              <a
                href="#"
                className="flex items-center p-2 text-base font-normal group-hover:stoke-orange-500 rounded-lg dark:text-white hover:text-green-800 dark:hover:bg-white"
              >
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 transition duration-75"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Products</span>
              </a>
            </li>
            <li
              onClick={() => {
                customSignOut();

                navigate("/");
              }}
            >
              <a
                href="#"
                className="flex items-center p-2 text-base font-normal group-hover:stoke-orange-500 rounded-lg dark:text-white hover:text-green-800 dark:hover:bg-white"
              >
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 transition duration-75"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Sign Out </span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
