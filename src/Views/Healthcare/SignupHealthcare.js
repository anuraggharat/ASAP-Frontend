import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import image from "../../Assets/signuphealthcare.svg";
import MinorComponent from "../../Components/MinorComponent";
import { registerUser } from "../../Redux/Actions/healthcare";
import { connect } from "react-redux";
import { toast } from "react-toastify";

function SignupHealthcare({ registerUser, isLoggedIn, user }) {
  const [values, setValues] = useState({
    name: "",
    phoneno: "",
    gender: "",
    dob: "",
    city: "",
    email: "",
    password: "",
  });

  const [redirect, setRedirect] = useState(false);
  const { email, password, name, phoneno, gender, dob, city } = values;
  const [loading, setLoading] = useState(false);
  //handleChange function to set input values
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const submitValues = async (e) => {
    setLoading(true);

    e.preventDefault();

    registerUser(values)
      .then(async (res) => {
        if (res.success) {
          await toast.success(res.message);
          await toast("Redirecting to Login!");
          setRedirect(true);
          setLoading(false);
        } else {
          toast.error(res.error);
          setLoading(false);
        }
      })
      .catch((err) => toast.warning("Please try again!"));
  };

  if (redirect) {
    return <Redirect to="/user/login" />;
  }

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
              <Link to="/healthcare/login"> Login</Link>
            </p>
            <form onSubmit={(e) => submitValues(e)}>
              <div className="mb-3 mt-3">
                <label htmlFor="name" className="form-label">
                  Your Name
                </label>
                <input
                  type="name"
                  className="form-control"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="number" className="form-label">
                  Your Phone number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="number  "
                  name="phoneno"
                  value={phoneno}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="mb-3 row">
                <div className="col-6">
                  <label htmlFor="dob" className="form-label">
                    Date of Birth
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="dob"
                    placeholder="In 27 May 1990 format"
                    name="dob"
                    value={dob}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="col-6">
                  <label htmlFor="gender" className="form-label">
                    Gender
                  </label>
                  <select
                    className="form-control"
                    onChange={(e) => handleChange(e)}
                    name="gender"
                  >
                    <option defaultValue={gender}>Select one</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => handleChange(e)}
                />
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
