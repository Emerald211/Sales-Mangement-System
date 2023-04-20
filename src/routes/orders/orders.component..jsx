import React from "react";
import Table from "../../components/table/table.component";

const Orders = () => {
  return (
    <div>
      <div className="p-4 sm:ml-64">
        <div className="flex mb-4">
          <h1 className=" text-red-400 text-xl font-bold "> Orders</h1>
        </div>
       <Table />
      </div>
    </div>
  );
};

export default Orders;
