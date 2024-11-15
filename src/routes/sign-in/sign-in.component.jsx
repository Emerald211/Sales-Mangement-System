import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {
  customSignInWIthEmailAndPassword,
  getDocumentsFromCollection,
} from "../../utils/firebase/firebase";
import { useDispatch } from "react-redux";
import { setOrders } from "../../store/orders/orders.action";
import { Button } from "@mui/material";

const Signin = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getRes = async () => {
      const data = await getDocumentsFromCollection();

      console.log(data);

      dispatch(setOrders(data));

      return data;
    };

    return getRes;
  }, []);

  const [isLoading, setisLoading] = useState(false);
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmitAction = async (data) => {
    setisLoading(true);
    const { email, password } = data;

    try {
      await customSignInWIthEmailAndPassword(email, password);

      navigate("/home");
    } catch (err) {
      alert(err.message);
      setisLoading(false);
    }
  };
  console.log("Rendered");
  return (
    <>
      <section className=" w-[100vw] flex flex-col lg:flex-row">
        <div className=" flex flex-col justify-center items-center px-12 bg-green-800 rounded-b-3xl lg:rounded-b-none w-[100%] lg:w-[50%]">
  			<div className=' grid grid-cols-1 gap-5 md:grid-cols-1 mt-12 mb-12 lg:mt-24 '>
					<div className=' order-2 md:order-1 flex flex-col justify-center text-4xl md:text-5xl font-bold font-serrat  text-white'>
						<h1>
							Optimize Your Sales Process, With our Business Management tool
						</h1>

					
					</div>

					<div className=' order-1 md:order-2 h-[100px] w-[100px] md:w-[300px] md:h-[300px] rounded-2xl bg-main bg-cover bg-no-repeat md:bg-cover'></div>
				</div>
        </div>

        <div className="lg:w-[50%] w-[100%] font-serrat flex flex-col justify-center items-center h-screen">
      <div className=" rounded-[50%] flex justify-center items-center  bg-white">
        <h1 className=" text-2xl md:text-3xl lg:text-3xl text-green-800 font-bold">
          GadgetTrac 1.0
        </h1>
      </div>

      <div className=" w-[300px] md:w-[500px] text-center italic text-xs mt-5 md:mt-5">
        <h3 className=" text-slate-500">
          GadgetTrac is a cutting-edge Device and Gadget Sales Management System
          that empowers businesses to efficiently track, manage, and optimize
          the entire sales lifecycle of gadgets. From inventory management to
          order processing and sales analytics, GadgetTrac provides real-time
          insights and seamless automation, streamlining operations and boosting
          sales performance. With its user-friendly interface and powerful
          features, GadgetTrac ensures businesses stay ahead in the fast-paced
          world of gadget sales.
        </h3>

        <h4>
          (This is test mode, Kindly login email as{" "}
          <span className=" font-bold text-green-800">admin@gmail.com</span> and
          password as{" "}
          <span className=" font-bold text-green-800">admin2023</span>)
        </h4>
      </div>
      <form
        onSubmit={handleSubmit(onSubmitAction)}
        className=" w-[300px] md:w-[500px] bg-white mt-5 md:mt-12 px-8 py-8"
      >
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="email"
            name="email"
            id="floating_email"
            className="block py-2.5 px-0 w-full text-sm text-grey bg-transparent border-0 border-b-2 border-gray-300 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
            {...register("email")}
          />
          <label
            htmlFor="floating_email"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
          >
            Email Address
          </label>
        </div>

        <div className="relative z-0 w-full mb-6 group">
          <input
            type="password"
            name="password"
            id="floating_password"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
            {...register("password")}
          />
          <label
            htmlFor="floating_email"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
          >
            Password
          </label>
        </div>

        <button className=" w-full bg-green-800 text-white rounded-md py-3">
          {isLoading ? "SIGNING IN..." : "SIGNIN"}
        </button>
      </form>
    </div>
      </section>
   </>
  );
};

export default Signin;
