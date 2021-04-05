import React, { useState } from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { toast } from "react-toastify";
import Loading from "../../Components/Loading";
import Map from "../../Components/Map";
import Navbar from "../../Components/Navbar";
import { logoutUser } from "../../Redux/Actions/user";
import api from "../../utils/api";
import { GiTrashCan } from "react-icons/gi";
import UploadDoc from "../../Components/UploadDoc";

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
      <Navbar logoutUser={logoutUser} username={user.email} />
      <div className="container mt-5 pb-5">
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
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  isLoggedIn: state.user.isLoggedIn,
  user: state.user.user,
});
export default connect(mapStateToProps, { logoutUser })(AddPref);
