import React from "react";
import { Link } from "react-router-dom";
import image from "../../Assets/loginhealthcare.svg";
import MinorComponent from "../../Components/MinorComponent";

export default function LoginHealthcare() {
  return (
    <>
      <div className="row min-vh-100 w-100">
        <MinorComponent image={image} />
        <div className="col-lg-7 col-sm-12 d-flex justify-content-center flex-column">
          <div className="container">
            <h1>
              Login{" "}
              <span className="h6 text-muted"> as Healthcare Provider </span>
            </h1>
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
    </>
  );
}
