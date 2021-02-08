import React from "react";

export default function MinorComponent({ image }) {
  return (
    <div className="justify-content-center align-center col-lg-5 bg-white col-sm-12  text-white d-flex flex-col">
      <div className="text-center container align-self-center ">
        <img src={image} className="img-fluid w-75 h-75" />
        <h1 className=" text-dark">ASAP</h1>
        <p className="text-dark">Healthcare anytime,anywhere!</p>
      </div>
    </div>
  );
}
