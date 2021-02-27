import React from "react";
import { Link } from "react-router-dom";

export default function MinorComponent({ image }) {
  return (
    <div className="pb-5 justify-content-center align-center col-lg-5 bg-white col-sm-12  text-white d-flex flex-col">
      <div className="text-center container align-self-center ">
        <img src={image} className="img-fluid w-75 h-75" alt="Some " />
        <h1 className=" text-dark title">ASSAP!</h1>
        <p className="text-dark">Healthcare anytime,anywhere!</p>
        <Link to="/">Home</Link>
      </div>
    </div>
  );
}
