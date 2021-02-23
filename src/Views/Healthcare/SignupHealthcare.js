import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import image from "../../Assets/signuphealthcare.svg";
import MinorComponent from "../../Components/MinorComponent";
import { registerUser } from "../../Redux/Actions/healthcare";
import { connect } from "react-redux";
import { toast } from "react-toastify";

function SignupHealthcare({ registerUser, isLoggedIn, user }) {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    type: "",
    contact: "",
    main_doc_name: "",
    latitude: "",
    xyz: "",
  });

  console.log("====================================");
  console.log(values);

  console.log("====================================");
  const [redirect, setRedirect] = useState(false);
  const { email, password, name, contact, main_doc_name, type } = values;
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
          toast.success(res.message);
          toast.info("Redirecting to Login!");
          setRedirect(true);
          setLoading(false);
        } else {
          toast.error(res.error);
          setLoading(false);
        }
      })
      .catch((err) => toast.warning("Please try again!"));
  };

  const getLocation = async () => {
    try {
      navigator.geolocation.getCurrentPosition(async (position) => {
        await setValues({
          ...values,
          latitude: String(position.coords.latitude),
          xyz: String(position.coords.longitude),
        });
        toast.success("Location Found");
      });
    } catch (error) {
      toast.warning("Couldnt find location");
      toast.info("Please provide Geolocation");
    }
  };

  useEffect(async () => {
    await getLocation();
  }, []);

  if (redirect) {
    return <Redirect to="/healthcare/login" />;
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
                  Hospital Name
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
                  Hospital Contact number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="contact  "
                  name="contact"
                  value={contact}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="mb-3 row">
                <div className="col-6">
                  <label htmlFor="dob" className="form-label">
                    Name of Doctor
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="main_doc_name"
                    placeholder=""
                    name="main_doc_name"
                    value={main_doc_name}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="col-6">
                  <label htmlFor="gender" className="form-label">
                    Healthcare Type
                  </label>
                  <select
                    className="form-control"
                    onChange={(e) => handleChange(e)}
                    name="type"
                  >
                    <option defaultValue={type}>Select one</option>
                    <option value="Multispeciality">Multispeciality</option>
                    <option value="Clinic">Clinic</option>
                    <option value="Family">Family</option>
                    <option value="Emergency">Emergency</option>
                    <option value="General">General</option>
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
  isLoggedIn: state.healthcare.isLoggedIn,
  user: state.healthcare.user,
});
export default connect(mapStateToProps, { registerUser })(SignupHealthcare);
