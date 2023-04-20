import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { customSignInWIthEmailAndPassword } from "../../utils/firebase/firebase";
// import { auth } from "../../utils/firebase/firebase";
// import { useSelector } from "react-redux";
// import { selectCurrentUser } from "../../store/user/user.selector";

const Signin = () => {
  
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate()

  // const currentuser = useSelector(selectCurrentUser)

  // useEffect(() => {

  //   if (currentuser) {
  //     navigate("/home")
  //   }
  // }, [])


  const onSubmitAction = async (data) => {
      const {email, password} = data
        console.log("___FORM_DATA___,", data);
      navigate("/dashboard")
      
     await customSignInWIthEmailAndPassword(email, password)
    }
  console.log("Rendered");
  return (
    <div className=" flex flex-col justify-center items-center h-screen">
      <h1 className=" mb-10 text-3xl font-bold">Admin Control Login</h1>
      <form onSubmit={handleSubmit(onSubmitAction)} className=" w-[500px]">
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
    
        <button className=" w-full bg-blue-700 text-white rounded-md py-3">
          SIGN IN
        </button>
      </form>
    </div>
  );
};

export default Signin;
