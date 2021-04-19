import React, { useState } from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { toast } from "react-toastify";
import Navbar from "../../Components/Navbar";
import { logoutUser } from "../../Redux/Actions/user";
import api from "../../utils/api";


function AddPref({ logoutUser, user, isLoggedIn }) {
  

  const [values, setValues] = useState({
    relative1: "",
    relative1_no: "",
    relative2: "",
    relative2_no: "",
    preferred_hosp: "",
  });
  const [hospitals, setHospitals] = useState([]);

  const handleValues = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const addContact = async() => {
    try {
      const jsonBody = JSON.stringify(values)
      const {data} = await api.post(`/user/update/${user._id}`,jsonBody)
      if (data.success) {toast.success("Done")
    return <Redirect to="/user/home" />;}
      else toast.warning("Cannot update")
      
    } catch (error) {
      console.log(error)
    }
  };

  
  const getHospitals = async () => {
    const res = await api.get("/listhospital/");
    if (res.data.success) {
      setHospitals(res.data.data);
    } else {
      setHospitals([]);
    }
    if (user.relative1_no) {
      setValues({
        relative1: user.relative1,
        relative1_no: user.relative1_no,
        relative2: user.relative2,
        relative2_no: user.relative2_no,
        preferred_hosp: user.preferred_hosp,
      });
    }
  };

  console.log(values);


  useEffect(() => {
        getHospitals();
  }, []);

  

  if (!isLoggedIn) {
    return <Redirect to="/user/login" />;
  }


  


  return (
    <div>
      <Navbar logoutUser={logoutUser} username={user.email} normalUser={true} />
      <div className="container mt-5 pb-5">
        <div className="container mb-3">
          <Link to="/user/home">Go Back</Link>
        </div>
        <div className="container">
          <h1>Add your Emerengy contact numbers</h1>
          <div className="row mt-4">
            <div className="col-lg-6">
              <input
                className="form-control"
                type="text"
                placeholder="Name of Contact 1"
                name="relative1"
                value={values.relative1}
                onChange={(e) => handleValues(e)}
              />
            </div>
            <div className="col-lg-6">
              <input
                className="form-control"
                type="text"
                placeholder="Name of Contact 2"
                name="relative2"
                value={values.relative2}
                onChange={(e) => handleValues(e)}
              />
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-lg-6">
              <input
                className="form-control"
                type="text"
                placeholder="Contact no "
                name="relative1_no"
                value={values.relative1_no}
                onChange={(e) => handleValues(e)}
              />
            </div>
            <div className="col-lg-6">
              <input
                className="form-control"
                type="text"
                placeholder="Contact No"
                name="relative2_no"
                value={values.relative2_no}
                onChange={(e) => handleValues(e)}
              />
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-lg-4">
              <div className="form-group">
                <label >Prefered Hospital</label>
                <select
                  className="form-control w-100"
                  aria-label="Default select example"
                  value={values.preferred_hosp}
                  onChange={(e) => handleValues(e)}
                  name="preferred_hosp"
                >
                  <option>Choose hospital</option>
                  {hospitals &&
                    hospitals.map((item) => (
                      <option key={item.name} value={item.name}>
                        {item.name} ({item.type})
                      </option>
                    ))}
                </select>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-lg-6">
              <button className="btn btn-primary" onClick={()=>addContact()}>
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  isLoggedIn: state.user.isLoggedIn,
  user: state.user.user,
});
export default connect(mapStateToProps, { logoutUser })(AddPref);
