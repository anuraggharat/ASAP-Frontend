import React from "react";
import { Link } from "react-router-dom";
import image from "../../Assets/signuphealthcare.svg";
import MinorComponent from "../../Components/MinorComponent";
import { registerUser } from "../../Redux/Actions/healthcare";
import { connect } from "react-redux";
import { toast } from "react-toastify";

function SignupHealthcare({ registerUser, isLoggedIn, user }) {
  return (
    <>
      <div className="row min-vh-100 w-100">
        <MinorComponent image={image} />
        <div className="col-lg-7 col-sm-12 d-flex bg-light justify-content-center flex-column">
          <div className="container">
            <h1>
              SignUp{" "}
              <span className="h6 text-muted"> as Healthcare Provider </span>
            </h1>
            <p>
              Already registered? Consider
              <Link to="/user/login"> Login</Link>
            </p>
            <form>
              <div className="mb-3 mt-3">
                <label htmlFor="name" className="form-label">
                  Your Name
                </label>
                <input type="name" className="form-control" id="name" />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input type="email" className="form-control" id="email" />
              </div>
              <div className="mb-3">
                <label htmlFor="number" className="form-label">
                  Your Phone number
                </label>
                <input type="text" className="form-control" id="number  " />
              </div>
              <div className="mb-3 row">
                <div className="col-6">
                  <label htmlFor="dob" className="form-label">
                    Date of Birth
                  </label>
                  <input
                    type="dob"
                    className="form-control"
                    id="dob"
                    placeholder="In 27 May 1990 format"
                  />
                </div>
                <div className="col-6">
                  <label htmlFor="gender" className="form-label">
                    Gender
                  </label>
                  <select className="form-control">
                    <option defaultValue="Male">Select one</option>
                    <option value="1">Male</option>
                    <option value="2">Female</option>
                    <option value="3">Other</option>
                  </select>
                </div>
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
const mapStateToProps = (state) => ({
  isLoggedIn: state.user.isLoggedIn,
  user: state.user.user,
});
export default connect(mapStateToProps, { registerUser })(SignupHealthcare);
