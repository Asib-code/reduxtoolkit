import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { PiEyesFill } from "react-icons/pi";
import Singupimage from "../assets/Singup.png";
import { FaRegFaceRollingEyes } from "react-icons/fa6";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Triangle } from "react-loader-spinner";

const Singup = () => {
  const auth = getAuth();
  let nevigate = useNavigate();
  let [email, setEmail] = useState("");
  let [name, setName] = useState("");
  let [password, setPassword] = useState("");
  let [emailerr, setEmailerr] = useState("");
  let [nameerr, setNameerr] = useState("");
  let [passworderr, setPassworderr] = useState("");
  let [passwordshow, setPasswordshow] = useState(false);
  let [loder, setloder] = useState(false);

  let handelEmail = (e) => {
    setEmail(e.target.value);
    setEmailerr("");
  };
  let handelName = (e) => {
    setName(e.target.value);
    setNameerr("");
  };
  let handelPassword = (e) => {
    setPassword(e.target.value);
    setPassworderr("");
  };

  let handelSubmit = () => {
    if (!email) {
      setEmailerr("Email is requred");
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setEmailerr("Invalid eamail");
    }
    if (!name) {
      setNameerr("Name is requred");
    }
    if (!password) {
      setPassworderr("Password is requred");
    }
    if (email && name && password) {
      setloder(true);

      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          setTimeout(() => {
            setloder(false);
            nevigate("/");
            const user = userCredential.user;
          }, 2000);
        })
        .catch((error) => {
          setTimeout(() => {
            setloder(false);
            const errorCode = error.code;
            const errorMessage = error.message;
          }, 1000);
        });
    }
  };

  return (
    <div className="w-full h-screen flex">
      <div className="w-2/4 h-full flex justify-end items-center">
        <div className="mr-[69px]">
          <h1 className="font-bold text-[34px] text-secondery ma">
            Get started with easily register
          </h1>
          <p className="mt-[13px] text-[20px] font-normal text-base opacity-50">
            Free register and you can enjoy it
          </p>
          <div className="w-[368px] h-[80px] mt-[61px] relative">
            {" "}
            <label
              className={`font-semibold text-[13px] ${
                emailerr ? " text-red-500" : " text-secondery"
              } text-opacity-70 absolute top-[-11px] left-[50px] bg-white px-4`}
            >
              Email Address
            </label>
            <input
              onChange={handelEmail}
              className={`w-full h-full border border-solid ${
                emailerr ? "border-red-500" : "border-secondery"
              } border-opacity-50 rounded-[9px] pl-[50px]`}
              type="email"
              value={email}
              placeholder="enter your email"
            />
            {emailerr && (
              <p className="text-red-500 font-normal text-[13px]">{emailerr}</p>
            )}
          </div>
          <div className="w-[368px] h-[80px] mt-[61px] relative">
            {" "}
            <label
              className={`font-semibold text-[13px] ${
                nameerr ? " text-red-500" : " text-secondery"
              } text-opacity-70 absolute top-[-11px] left-[50px] bg-white px-4`}
            >
              Ful name
            </label>
            <input
              onChange={handelName}
              className={`w-full h-full border border-solid ${
                nameerr ? "border-red-500" : "border-secondery"
              } border-opacity-50 rounded-[9px] pl-[50px]`}
              type="text"
              value={name}
              placeholder="enter your name"
            />
            {nameerr && (
              <p className="text-red-500 font-normal text-[13px]">{nameerr}</p>
            )}
          </div>
          <div className="w-[368px] h-[80px] mt-[61px] relative">
            {" "}
            <label
              className={`font-semibold text-[13px] ${
                passworderr ? " text-red-500" : " text-secondery"
              } text-opacity-70 absolute top-[-11px] left-[50px] bg-white px-4`}
            >
              Password
            </label>
            <input
              onChange={handelPassword}
              className={`w-full h-full border border-solid ${
                passworderr ? "border-red-500" : "border-secondery"
              } border-opacity-50 rounded-[9px] pl-[50px]`}
              type={passwordshow ? "text" : "password"}
              value={password}
              placeholder="enter your password"
            />
            {passwordshow ? (
              <PiEyesFill
                onClick={() => setPasswordshow(false)}
                className=" text-xl absolute top-2/4 translate-y-[-50%] right-5 cursor-pointer "
              />
            ) : (
              <FaRegFaceRollingEyes
                onClick={() => setPasswordshow(true)}
                className=" text-2xl absolute top-2/4 translate-y-[-50%] right-5 cursor-pointer"
              />
            )}
            {passworderr && (
              <p className="text-red-500 font-normal text-[13px]">
                {passworderr}
              </p>
            )}
          </div>
          {loder ? (
            <div className="w-[368px] ">
              <Triangle
                visible={true}
                height="150"
                width="368"
                color="#5F35F5"
                ariaLabel="triangle-loading"
                wrapperStyle={{}}
                wrapperClass=""
              />
            </div>
          ) : (
            <button
              onClick={handelSubmit}
              className=" w-[368px] bg-primary py-5 rounded-[86px] text-[20px] font-semibold text-white mt-[50px] mb-[35px]"
            >
              Sing up
            </button>
          )}

          <p className=" text-[13px] font-normal text-secondery w-[368px] text-center">
            Already have an account ?{" "}
            <Link to="/" className="text-[#EA6C00] font-bold">
              Sing In
            </Link>{" "}
          </p>
        </div>
      </div>
      <div className="w-2/4 h-full">
        <img
          className="ml-auto w-full h-full object-cover"
          src={Singupimage}
          alt="singup"
        />
      </div>
    </div>
  );
};

export default Singup;
