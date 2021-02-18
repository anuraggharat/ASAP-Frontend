import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="w-100 min-vh-100 bg-home d-flex flex-column justify-content-center text-center text-white">
      <div className="overlay"></div>
      <div className="container z-10">
        <h1 className=" display-3">Healthcare Anywhere, Anytime!</h1>
        <div className="w-75 mx-auto px-5 my-4">
          <p>
            A online portal for users to request healthcare help. A nearest
            healthcare station is alloted according to users position.
          </p>
        </div>
        <div className="d-flex justify-content-around w-50 mx-auto">
          <Link to="/user/login" className="btn btn-primary">
            User Login
          </Link>
          <Link to="/healthcare/login" className="btn btn-primary">
            Healthcare Login
          </Link>
        </div>
      </div>
    </div>
  );
}
