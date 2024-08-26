import React from "react";
import { useSelector } from "react-redux";

const About = () => {
  let data = useSelector((state) => state.userInfo.value);
  console.log(data);
  return (
    <div>
      <h1>Batchname: {data.batch}</h1>
      <h1>classtime:{data.classtime} </h1>
    </div>
  );
};

export default About;
