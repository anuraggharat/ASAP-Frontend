import React, { useState } from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { toast } from "react-toastify";
import Navbar from "../../Components/Navbar";
import { logoutUser } from "../../Redux/Actions/user";
import { GiHypodermicTest } from "react-icons/gi";
import { BiTestTube, BiCalendarCheck } from "react-icons/bi";
import { FaClinicMedical } from "react-icons/fa";

function Services({ logoutUser, user, isLoggedIn }) {
  return (
    <div>
      <Navbar logoutUser={logoutUser} username={user.email} />
      <div className="container mt-5 pb-5">
        <div className="container mb-3">
          <Link to="/user/home">Go Back</Link>
        </div>
        <div className="container">
          <h1>Services</h1>
        </div>
        <div className="container mt-4">
          <div className="row">
            <div className="col-lg-3">
              <div className="card">
                <div className="card-body text-center d-flex flex-column">
                  <GiHypodermicTest className="display-4 text-secondary mx-auto mb-4" />
                  <Link>Vaccination</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="card">
                <div className="card-body text-center d-flex flex-column">
                  <BiTestTube className="display-4 text-secondary mx-auto mb-4" />
                  <Link>Service 2</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="card">
                <div className="card-body text-center d-flex flex-column">
                  <BiCalendarCheck className="display-4 text-secondary mx-auto mb-4" />
                  <Link>Service 3</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="card">
                <div className="card-body text-center d-flex flex-column">
                  <FaClinicMedical className="display-4 text-secondary mx-auto mb-4" />
                  <Link>Service 4</Link>
                </div>
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
export default connect(mapStateToProps, { logoutUser })(Services);
