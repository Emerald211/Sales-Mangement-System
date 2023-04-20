import React from "react";
import { TbChartPieFilled } from "react-icons/tb";
import { GiShoppingCart } from "react-icons/gi";
import { MdInventory2 } from "react-icons/md";
import Table from "../../components/table/table.component";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Title,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";
import { Doughnut, Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import { useSelector } from "react-redux";
import {
  selectOrders,
  selectTotalOrders,
  selectTotalRevenue,
} from "../../store/orders/orders.selector";


ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

const Dashboard = () => {
  const totalRevenue = useSelector(selectTotalRevenue);

  const totalOrders = useSelector(selectTotalOrders);

  const orders = useSelector(selectOrders);

  return (
    <div>
      <div className="p-4 sm:ml-64">
        <div className="flex mb-4">
          <h1 className=" text-red-400 text-xl font-bold ">Welcome</h1>
        </div>
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          <div style={{color: "#FF5427"}} className="grid grid-cols-3 gap-4 mb-4">
            <div style={{backgroundColor: "#FAE1DA"}} className="flex gap-4 items-center justify-center h-24 rounded">
              <TbChartPieFilled style={{color: "#F7C2B4"}} className=" text-5xl " />
              <div>
                <h1 className=" font-bold text-2xl">${totalRevenue}</h1>
                <p className=" text-sm text-gray-400 dark:text-gray-500">
                  Total Revenue
                </p>
              </div>
            </div>
            <div  style={{backgroundColor: "#FAE1DA"}} className="flex gap-4 items-center justify-center h-24 rounded bg-gray-50 dark:bg-slate-300">
              <GiShoppingCart style={{color: "#F7C2B4"}} className=" text-5xl text-gray-700" />
              <div>
                <h1 className=" font-bold text-2xl">{totalOrders}</h1>
                <p className=" text-sm text-gray-400 dark:text-gray-500">
                  Total Orders
                </p>
              </div>
            </div>
            <div style={{backgroundColor: "#FAE1DA"}} className="flex gap-4 items-center justify-center h-24 rounded bg-gray-50 dark:bg-slate-300">
              <MdInventory2 style={{color: "#F7C2B4"}} className=" text-5xl text-gray-700" />
              <div>
                <h1 className=" font-bold text-2xl">{totalOrders}</h1>
                <p className=" text-sm text-gray-400 dark:text-gray-500">
                  Total Sales
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div style={{backgroundColor: "#FAE1DA"}} className="flex items-center justify-center rounded bg-gray-50 h-56 dark:bg-slate-300">
              <Doughnut
                data={{
                  labels: orders.map((data) => data.name),
                  datasets: [
                    {
                      labels: "Total Sales",
                      data: orders.map((data) => data.price),
                      backgroundColor: ["#F89F86", "#F93F0E", "#50AF95", "#f3ba2f", "#2a71d0"],
                    
                      
                    },
                  ],
                }}
              />
            </div>
            <div style={{backgroundColor: "#FAE1DA"}} className="flex items-center justify-center rounded bg-gray-50 h-56 dark:bg-slate-300">
              <Bar
                data={{
                  labels: orders.map((data) => data.name),
                  datasets: [
                    {
                      labels: "Total Sales",
                      data: orders.map((data) => data.price),
                      backgroundColor: ["#F89F86", "#F93F0E", "#50AF95", "#f3ba2f", "#2a71d0"]
                    },
                  ],
                }}
              />
            </div>
          
          </div>
          <div  className="flex items-center justify-center  mb-4 rounded ">
            <div className="relative w-full overflow-x-auto shadow-md sm:rounded-lg">
              <h1 className=" font-bold mb-4">Recent Orders</h1>
              <Table />
            </div>
          </div>
          <div style={{backgroundColor: "#FAE1DA"}} className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-slate-300">
            <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
          </div>
          <div  className="grid grid-cols-2 gap-4">
            <div style={{backgroundColor: "#FAE1DA"}} className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-slate-300">
              <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
            </div>
            <div style={{backgroundColor: "#FAE1DA"}} className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-slate-300">
              <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
            </div>
            <div style={{backgroundColor: "#FAE1DA"}} className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-slate-300">
              <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
            </div>
            <div style={{backgroundColor: "#FAE1DA"}} className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-slate-300">
              <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
