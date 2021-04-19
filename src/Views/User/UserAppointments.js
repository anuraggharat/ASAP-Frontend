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
import api from "../../utils/api";

function UserAppointments({ logoutUser, user, isLoggedIn }) {


  const [data,setData]=useState([])

  const fetchData=async()=>{
    const res =await api.get(`/appointment/userappointment/${user.name}`);
    console.log(res)
    if (res.data.success) {
      setData(res.data.data)
    } else {
      console.log("Error")      
    }
  }

  useEffect(()=>{
fetchData()
  },[])



  return (
    <div>
      <Navbar logoutUser={logoutUser} username={user.email} normalUser={true} />
      <div className="container mt-5 pb-5">
        <div className="container mb-3">
          <Link to="/user/home">Go Back</Link>
        </div>
        <div className="container">
          <h1>My Appointments</h1>
        </div>
        <div className="container mt-4">
          <div className="row mt-1 border-bottom border-top pt-1 border-right border-left pb-1 mb-3">
            <div className="col-lg-1">
              <h3>No</h3>
            </div>
            <div className="col-lg-5">
              <h3>Hospital</h3>
            </div>
            <div className="col-lg-3">
              <h3>Slot</h3>
            </div>
            <div className="col-lg-3">
              <h3>Status</h3>
            </div>
          </div>
          {data &&
            data.map((item, index) => {
              let d = new Date(item.date_when);
              return (
                <div className="row pb-2 border-bottom mb-3">
                  <div className="col-lg-1">
                    <p>{index + 1}</p>
                  </div>
                  <div className="col-lg-5">
                    <p>{item.for_whom_name}</p>
                  </div>
                  <div className="col-lg-3">
                    <p>
                      {" "}
                      {d.getDate()}
                      {"/"}
                      {d.getMonth()}
                      {"/"}
                      {d.getFullYear()}
                    </p>
                    <p>{item.time_slot}</p>
                  </div>
                  <div className="col-lg-3">
                    {item.stat === "Confirmed" ? (
                      <p className="text-success">{item.stat}</p>
                    ) : (
                      <p>{item.stat}</p>
                    )}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  isLoggedIn: state.user.isLoggedIn,
  user: state.user.user,
});
export default connect(mapStateToProps, { logoutUser })(UserAppointments);
