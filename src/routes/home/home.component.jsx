import React from "react";
import {  Outlet } from "react-router-dom";
import Sidebar from "../../components/sidebar/sidebar.component";

const Home = () => {
  return (
    <div>
      <Sidebar></Sidebar>

      <Outlet />
    </div>
  );
};

export default Home;
