import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { PiEyesFill } from "react-icons/pi";
import Loginimage from "../assets/Login.jpg";
import { FaRegFaceRollingEyes } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider ,signInWithEmailAndPassword , signInWithPopup} from "firebase/auth";

const Login = () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const provider2 = new FacebookAuthProvider();

  

  let [email, setEmail] = useState("");

  let [password, setPassword] = useState("");
  let [emailerr, setEmailerr] = useState("");

  let [passworderr, setPassworderr] = useState("");
  let [passwordshow, setPasswordshow] = useState(false);

  let handelEmail = (e) => {
    setEmail(e.target.value);
    setEmailerr("");
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

    if (!password) {
      setPassworderr("Password is requred");
    }

    if (email && password) {
      setloder(true)};


    
      signInWithEmailAndPassword(auth, email, password)
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
  };
  let handelGooglelogin= ()=>{
    signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
  }
  let handelfacebooklogin= ()=>{
    signInWithPopup(auth, provider2)
  .then((result) => {
    // The signed-in user info.
    const user = result.user;

    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    const credential = FacebookAuthProvider.credentialFromResult(result);
    const accessToken = credential.accessToken;

    // IdP data available using getAdditionalUserInfo(result)
    // ...
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = FacebookAuthProvider.credentialFromError(error);

    // ...
  });
  }


  return (
    <div className="w-full h-screen flex">
      <div className="w-2/4 h-full flex justify-end items-center">
        <div className="mr-[69px]">
          <h1 className="font-bold text-[34px] text-secondery ma">
            Login to your account!
          </h1>
        
         <button onClick={handelGooglelogin} className=" w-[220px] border borde-solid border-secondery rounded-[10px]  flex  justify-center  py-[22px] mt-[30px]">
          
          <p className="font-semibold text-[13-px] text-secondery flex  cursor-pointer">
          <FcGoogle  className="w-[19px] h-[19px] mt-[3px] mr-[9px]"/> Login with Google
          </p>
        </button>
        
         
         <button onClick={handelfacebooklogin} className=" w-[220px] border borde-solid bg-blue-900 border-secondery rounded-[10px]  flex  justify-center  py-[22px] mt-[30px]">
          
          <p className="font-semibold text-[13-px] text-white flex cursor-pointer ">
          <FaFacebook  className="w-[19px] h-[19px]  mt-[3px] mr-[9px]"/> Login with Facebook
          </p>
        </button>

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
              className={`w-full h-full border-b border-solid ${
                emailerr ? "border-red-500" : "border-secondery"
              } border-opacity-50  pl-[50px]`}
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
                passworderr ? " text-red-500" : " text-secondery"
              } text-opacity-70 absolute top-[-11px] left-[50px] bg-white px-4`}
            >
              Password
            </label>
            <input
              onChange={handelPassword}
              className={`w-full h-full border-b border-solid ${
                passworderr ? "border-red-500" : "border-secondery"
              } border-opacity-50  pl-[50px]`}
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
          <button
            onClick={handelSubmit}
            className=" w-[368px] bg-primary py-5 rounded-[10px] text-[20px] font-semibold text-white mt-[50px] mb-[35px]"
          >
            Login to Continue
          </button>
          <p className=" text-[13px] font-normal  text-secondery w-[368px] ml-[18px]">
            Don’t have an accoun ?{" "}
            <Link to="/Singup" className="text-[#EA6C00] font-bold">
              Sing up
            </Link>{" "}
          </p>
        </div>
      </div>
      <div className="w-2/4 h-full">
        <img
          className="ml-auto w-full h-full object-cover"
          src={Loginimage}
          alt="Login"
        />
      </div>
    </div>
  );
};

export default Login;
