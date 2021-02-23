import React, { useState } from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { toast } from "react-toastify";
import Navbar from "../../Components/Navbar";
import { logoutUser } from "../../Redux/Actions/user";
function Dashboard({ logoutUser, user, isLoggedIn }) {
  const [location, setLocation] = useState({
    latitude: "",
    longitude: "",
  });

  var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  // const sendRequest=()=>{

  // }

  const getLocation = () => {
    try {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          await setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        handleLocationError,
        options
      );
      toast.info("Location fetch success");
    } catch (error) {
      toast.error("Unable to fetch location");
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  function handleLocationError(error) {
    switch (error.code) {
      case 3:
        toast.error("Timeout! Please refresh your page!");
        break;
      case 2:
        // ...device can't get data
        toast.error("ASAP cant access your location");
        break;
      case 1:
        // ...user said no ☹️
        toast.error("Please provide access to your location!");
    }
  }

  if (!isLoggedIn) {
    toast.info("Login to Continue");
    return <Redirect to="/user/login" />;
  }
  return (
    <div>
      <Navbar logoutUser={logoutUser} />
      <div className="container mt-5">
        <div className="d-flex justify-content-center">
          <button className="btn btn-lg btn-danger shadow-lg danger-button">
            <i class="bi bi-exclamation-circle "></i>
            EMERGENCY
          </button>
        </div>
        <div className="d-flex mt-5 text-muted">
          <div class="card w-100 shadow-lg border-0">
            <div class="card-body">
              <div className="row">
                <div className="col-6 border-bottom">
                  <h5>Name</h5>
                  <p>{user.name}</p>
                </div>
                <div className="col-6  border-bottom">
                  <h5>Email</h5>
                  <p>{user.email}</p>
                </div>
                <div className="col-6  border-bottom mt-3">
                  <h5>Phone number</h5>
                  <p>{user.phoneNo}</p>
                </div>
                <div className="col-6  border-bottom mt-3">
                  <h5>Date of Birth</h5>
                  <p>{user.dob}</p>
                </div>
                <div className="col-6 mt-3">
                  <h5>Gender</h5>
                  <p>{user.gender}</p>
                </div>
                <div className="col-6 mt-3">
                  <h5>Current Location</h5>
                  <p className="mb-0">
                    {location.latitude},{location.longitude}
                  </p>
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
export default connect(mapStateToProps, { logoutUser })(Dashboard);
