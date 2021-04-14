import React, { useState } from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { toast } from "react-toastify";
import Navbar from "../../Components/Navbar";
import { logoutUser } from "../../Redux/Actions/user";

function AddPref({ logoutUser, user, isLoggedIn }) {
  const [nameList, setNameList] = useState([
    {
      name: "Pavan Bhanushali",
      relation: "Brother",
      number: "7575764646",
    },
    {
      name: "Shubham Bhanushali",
      relation: "Brother",
      number: "7575764646",
    },
  ]);

  const [values, setValues] = useState({
    name: "",
    relation: "",
    number: "",
  });

  const handleValues = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const addContact = () => {
    setNameList([...nameList, values]);
    setValues({ name: "", relation: "", number: "" });
  };

  console.log(values);

  return (
    <div>
      <Navbar logoutUser={logoutUser} username={user.email} normalUser={true} />
      <div className="container mt-5 pb-5">
        <div className="container mb-3">
          <Link to="/user/home">Go Back</Link>
        </div>
        <div className="container">
          <h1>Add your Emerengy contact numbers</h1>
          <ul className="list-group mt-5 mb-5">
            <li className="list-group-item">
              <div className="row">
                <div className="col-lg-4">
                  <h4>Name</h4>
                </div>
                <div className="col-lg-4">
                  <h4>Relationship</h4>
                </div>
                <div className="col-lg-4">
                  <h4>Phone</h4>
                </div>
              </div>
            </li>

            {nameList.map((item, index) => (
              <div className="list-group-item">
                <div className="row my-3">
                  <div className="col-lg-4">
                    <p>{item.name}</p>
                  </div>
                  <div className="col-lg-4">
                    <p>{item.relation}</p>
                  </div>
                  <div className="col-lg-4">
                    <p>{item.number}</p>
                  </div>
                </div>
              </div>
            ))}
          </ul>
          <div className="row">
            <div className="col-lg-4">
              <input
                className="form-control"
                type="text"
                placeholder="Name"
                name="name"
                value={values.name}
                onChange={(e) => handleValues(e)}
              />
            </div>
            <div className="col-lg-4">
              <input
                className="form-control"
                placeholder="Relationship"
                type="text"
                value={values.relation}
                name="relation"
                onChange={(e) => handleValues(e)}
              />
            </div>
            <div className="col-lg-4">
              <input
                className="form-control"
                placeholder="Phone Number"
                type="text"
                value={values.number}
                name="number"
                onChange={(e) => handleValues(e)}
              />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-lg-6">
              <button className="btn btn-primary" onClick={addContact}>
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="container mt-5 border-top pt-3">
          <h2>Select your 3 Preferred Hospitals</h2>

          <div className="row mt-4">
            <div className="col-lg-4">
              <div class="form-group">
                <label for="exampleFormControlSelect1">Preference 1 </label>
                <select class="form-control" id="exampleFormControlSelect1">
                  <option>Sharda Hospital</option>
                  <option>Gharat Hospital</option>
                  <option>Dhamankar Hospital</option>
                  <option>Sanjevani Hospital</option>
                  <option>Apollo Hospital</option>
                </select>
              </div>
            </div>
            <div className="col-lg-4">
              <div class="form-group">
                <label for="exampleFormControlSelect1">Preference 2</label>
                <select class="form-control" id="exampleFormControlSelect1">
                  <option>Sharda Hospital</option>
                  <option>Gharat Hospital</option>
                  <option>Dhamankar Hospital</option>
                  <option>Sanjevani Hospital</option>
                  <option>Apollo Hospital</option>
                </select>
              </div>
            </div>
            <div className="col-lg-4">
              <div class="form-group">
                <label for="exampleFormControlSelect1">Preference 3</label>
                <select class="form-control" id="exampleFormControlSelect1">
                  <option>Sharda Hospital</option>
                  <option>Gharat Hospital</option>
                  <option>Dhamankar Hospital</option>
                  <option>Sanjevani Hospital</option>
                  <option>Apollo Hospital</option>
                </select>
              </div>
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
