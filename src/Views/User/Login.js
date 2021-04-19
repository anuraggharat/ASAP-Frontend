import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import image from "../../Assets/loginuser.svg";
import MinorComponent from "../../Components/MinorComponent";
import { loginUser } from "../../Redux/Actions/user";
import { connect } from "react-redux";
import { toast } from "react-toastify";

function Login({ isLoggedIn, user, loginUser }) {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const { email, password } = values;

  //handleChange function to set input values
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  //value submission function
  const submitValues = async (e) => {
    setLoading(true);
    e.preventDefault();
    if (!email && !password) {
      toast.error("Values can't be empty");
      return;
    }
    await loginUser(values)
      .then(async (res) => {
        if (res.success) {
          toast.success("Successfully Logged In!");
        } else {
          toast.error(res.error);
        }
      })
      .catch((err) => toast.warning(err));
    setLoading(false);
  };

  if (isLoggedIn && !loading) {
    return <Redirect to="/user/home" />;
  }

  return (
    <>
      <div className="row min-vh-100 w-100 m-0">
        <MinorComponent image={image} />
        <div className="col-lg-7 py-5 col-sm-12 col-xs-12 w-100 d-flex justify-content-center flex-column bg-light">
          <div className="container">
            <h1>Login</h1>
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

              <button disabled={loading} type="submit" className="btn  btn-primary btn-block">
                {loading ? (
                  <div className="spinner-border text-white" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                ) : (
                  "Submit"
                )}
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
export default connect(mapStateToProps, { loginUser })(Login);
