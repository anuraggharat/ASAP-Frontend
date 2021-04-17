import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { toast } from "react-toastify";
import Navbar from "../../Components/Navbar";
import { logoutUser } from "../../Redux/Actions/healthcare";
import {BsPlus} from 'react-icons/bs'
import {BiMinus} from 'react-icons/bi'
import api from "../../utils/api";
import ListComp from "../../Components/ListComp";

function DashboardHealthcare({ logoutUser, user, isLoggedIn }) {
  const [req, setReq] = useState([]);
  const [loading, setLoading] = useState(true);
  const [beds,setBeds]=useState(null)

  const getRequests = async () => {
    setLoading(true);
    try {
      const myData = {
        id: user._id,
      };
      const body = JSON.stringify(myData);
      const { data } = await api.post("/request/getrequests", body);
      console.log(data);
      if (data.success) {
        if (data.count === 0) {
          console.log("hitted");
          toast.info("No requests scheduled");
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

  const addBeds=async()=>{
    const data =await  api.get(`/hospital/addbed/${user._id}`);
    if (data.data.success){
      toast.info("Beds Added")
      bedInfo()
    }
    else{
      toast.warning("cannot update")
    }
  }
  
  const removeBeds = async () => {
    const data = await api.get(`/hospital/removebed/${user._id}`);
    console.log(data.data)
    if (data.data.success) {
      toast.info("Beds removed");
      bedInfo()
    }
    else {
    toast.info("cannot add beds");

    }
  };


  const bedInfo=async()=>{
    const data = await api.get(`/hospital/getbeds/${user._id}`);
    console.log(data.data.data)
    setBeds(data.data.data)
  }

  useEffect(() => {
    getRequests();
    bedInfo()
  }, []);

  if (!user) {
    return <Redirect to="/healthcare/login" />;
  }

  console.log(req);
  return (
    <>
      <Navbar
        username={user.email}
        logoutUser={logoutUser}
        normalUser={false}
      />
      <div className="container-fluid pb-5">
        <div className="text-center w-100">
          <h1 className="mt-4">{user.name}</h1>
        </div>
        <div className="w-100 min-vh-100 mt-4">
          <div className="w-100 mt-2 d-flex flex-row justify-content-end">
            <div class="btn-group" role="group" aria-label="Basic example">
              <button type="button" class="btn btn-primary" onClick={()=>addBeds()}>
                <BsPlus />
              </button>
              <button type="button" class="btn btn-secondary">
                {beds}
              </button>
              <button type="button" class="btn btn-warning" onClick={()=>removeBeds()}>
                <BiMinus />
              </button>
            </div>
          </div>
          <div className="w-100 mt-2">
            <div className="list-group shadow-sm">
              <div className="list-group-item list-group-item-action bg-light border-bottom-0">
                <div className="row">
                  <div className="col-lg-3">
                    <h5>Patient Name</h5>
                  </div>
                  <div className="col-lg-3">
                    <h5>Contact Number</h5>
                  </div>
                  <div className="col-lg-2">
                    <h5>Gender</h5>
                  </div>
                  <div className="col-lg-2">
                    <h5>Date</h5>
                  </div>
                  <div className="col-lg-2">
                    <h5>Location</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="list-group list-group-rev shadow-sm">
              {!loading &&
                req &&
                req.map((item, index) => <ListComp key={index} item={item} />)}
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
export default connect(mapStateToProps, { logoutUser })(DashboardHealthcare);
