import React from "react";
import { Link } from "react-router-dom";
import image from "../../Assets/loginuser.png";

export default function Login() {
  return (
    <div>
      <div className="row min-vh-100 w-100">
        <div className="justify-content-center align-center col-lg-5 bg-light col-sm-12  text-white d-flex flex-col">
          <div className="text-center container align-self-center ">
            <img src={image} className="img-fluid w-75 h-75" />
            <h1 className=" text-dark">ASAP</h1>
            <p className="text-dark">Healthcare anytime,anywhere!</p>
          </div>
        </div>
        <div className="col-lg-7 col-sm-12 d-flex flex-col">
          <div className="container align-self-center">
            <h2>Login</h2>
            <p>
              New here? Consider
              <Link to="/user/signup"> SignUp</Link>
            </p>
            <form>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input type="email" className="form-control" id="email" />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input type="password" className="form-control" id="password" />
              </div>

              <button type="submit" className="btn  btn-primary btn-block">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
