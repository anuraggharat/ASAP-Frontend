import React from "react";
import { Link } from "react-router-dom";
import error from "../Assets/error.svg";

export default function Error() {
  return (
    <div className="min-vh-100 w-100 flex-column align-items-center d-flex justify-content-center">
      <img src={error} className="w-50 mx-auto " alt="error" />
      <Link to="/">Home</Link>
    </div>
  );
}
