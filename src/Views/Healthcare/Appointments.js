import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { toast } from "react-toastify";
import Navbar from "../../Components/Navbar";
import { logoutUser } from "../../Redux/Actions/healthcare";
import api from "../../utils/api";
import ListComp from "../../Components/ListComp";
import { FaCheck, FaCheckCircle } from "react-icons/fa";

function Appointments({ logoutUser, user, isLoggedIn }) {
  const [req, setReq] = useState([]);
  const [loading, setLoading] = useState(true);
  
  
  const getRequests = async () => {
    setLoading(true);
    try {
     
      const { data } = await api.get(
        `/appointment/getappointments/${user._id}`
        
      );
      console.log(data);
      if (data.success) {
        if (data.count === 0) {
          console.log("hitted");
          toast.info("No appointments scheduled");
          await setReq([]);
          setLoading(false);
        } else {
          toast.success("Showing all Requests!");
          await setReq(data.data);
          setLoading(false);
        }
      } else {
        toast.info("No available!");
        setLoading(false);
      }
    } catch (error) {
      toast.error("Unable to fetch requests");
      setLoading(false);
    }
  };

  const changeStatus=async(id)=>{
    const stat = "Confirmed"
    const { data } = await api.get(
        `/appointment/update/${id}/${stat}`
      );
      if(data.success){
        toast.success("Appointment Updated")
        getRequests()
      }
  }

  useEffect(() => {
    getRequests();
  }, []);

  if (!user) {
    return <Redirect to="/healthcare/login" />;
  }
  return (
    <>
      <Navbar
        username={user.email}
        logoutUser={logoutUser}
        normalUser={false}
      />
      <div className="container-fluid pb-5">
        <div className="text-center w-100">
          <h1 className="mt-4">{user.name} Appointments</h1>
        </div>
        <div className="w-100 min-vh-100 mt-4">
          <div className="w-100 mt-2">
            <div className="list-group shadow-sm">
              <div className="list-group-item list-group-item-action bg-white border-bottom">
                <div className="row">
                  <div className="col-lg-2">
                    <h5>Patient Name</h5>
                  </div>
                  <div className="col-lg-2">
                    <h5>Contact Number</h5>
                  </div>
                  <div className="col-lg-2">
                    <h5>Gender</h5>
                  </div>
                  <div className="col-lg-2">
                    <h5>Date</h5>
                  </div>
                  <div className="col-lg-2">
                    <h5>Note</h5>
                  </div>
                  <div className="col-lg-2">
                    <h5>Status</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="list-group list-group-rev shadow-sm">
              {!loading &&
                req &&
                req.map((item, index) => {
                  let d = new Date(item.date);

                  return (
                    <div
                      key={index}
                      className="list-group-item list-group-item-action bg-light border-bottom-0 border-top-0"
                    >
                      <div className="row">
                        <div className="col-lg-2">
                          <p>{item.name}</p>
                        </div>
                        <div className="col-lg-2">
                          <p>{item.phoneNo}</p>
                        </div>
                        <div className="col-lg-2">
                          <p>{item.gender}</p>
                        </div>
                        <div className="col-lg-2">
                          <p>
                            {d.getDay()}
                            {"/"}
                            {d.getMonth()}
                            {"/"}
                            {d.getFullYear()}
                          </p>
                          <p>{item.time_slot}</p>
                        </div>
                        <div className="col-lg-2">
                          <p>{item.reason}</p>
                        </div>
                        <div className="col-lg-1 ">
                          <p>{item.stat}</p>
                        </div>
                        <div className="col-lg-1">
                          <button className="btn btn-success" onClick={()=>changeStatus(item._id)}>
                            <FaCheck />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
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
export default connect(mapStateToProps, { logoutUser })(Appointments);
