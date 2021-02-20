import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import image from "../../Assets/loginhealthcare.svg";
import MinorComponent from "../../Components/MinorComponent";
import { loginUser } from "../../Redux/Actions/healthcare";
import { connect } from "react-redux";
import { toast } from "react-toastify";

function LoginHealthcare({ loginUser, isLoggedIn, user }) {
  const [account, setAccount] = useState();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { email, password } = values;

  //handleChange function to set input values
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  //value submission function
  const submitValues = async (e) => {
    await setLoading(true);
    e.preventDefault();
    if (!email && !password) {
      toast.error("Values can't be empty");
      return;
    }
    await loginUser(values)
      .then(async (res) => {
        if (res.success) {
          await toast.success(res.message);
        } else {
          toast.error(res.error);
        }
      })
      .catch((err) => toast.warning(err));
    setLoading(false);
  };
  return (
    <>
      <div className="row min-vh-100 w-100">
        <MinorComponent image={image} />
        <div className="col-lg-7 col-sm-12 d-flex justify-content-center flex-column bg-light">
          <div className="container">
            <h1>
              Login{" "}
              <span className="h6 text-muted"> as Healthcare Provider </span>
            </h1>
            <p>
              New here? Consider
              <Link to="/user/signup"> SignUp</Link>
            </p>
            <form onSubmit={(e) => submitValues(e)}>
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
export default connect(mapStateToProps, { loginUser })(LoginHealthcare);
