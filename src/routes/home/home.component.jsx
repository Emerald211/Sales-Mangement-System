import React from "react";
import {  Outlet } from "react-router-dom";
import Sidebar from "../../components/sidebar/sidebar.component";
import { getDocumentsFromCollection } from "../../utils/firebase/firebase";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const Home = () => {

  const dispatch = useDispatch();


  useEffect(() => {
    const getRes = async () => {
      const data = await getDocumentsFromCollection();

      console.log(data);

      dispatch(setOrders(data));

      return data;
    };

    return getRes
  }, []);
  return (
    <div>
      <Sidebar></Sidebar>

      <Outlet />
    </div>
  );
};

export default Home;
