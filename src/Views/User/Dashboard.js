import React, { useState } from "react";
import { useEffect } from "react";
import Navbar from "../../Components/Navbar";

export default function Dashboard() {
  const [location, setLocation] = useState({
    latitude: "",
    longitude: "",
  });
  const [error, setError] = useState("");

  var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        console.log(position);
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);
        await setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      handleLocationError,
      options
    );
  }, []);
  function handleLocationError(error) {
    switch (error.code) {
      case 3:
        setError("Timeout! Please refresh your page!");
        alert(error);
        break;
      case 2:
        // ...device can't get data
        setError("ASAP cant access your location");
        alert(error);
        break;
      case 1:
        // ...user said no ☹️
        setError("Please provide access to your location!");
        alert(error);
    }
  }
  console.log(process.env);

  const getLocation = async () => {
    await fetch(
      "https://maps.googleapis.com/maps/api/geocode/json?address=" +
        location.latitude +
        "," +
        location.longitude +
        "&key=" +
        process.env.REACT_APP_KEY
    )
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(
          "ADDRESS GEOCODE is BACK!! => " + JSON.stringify(responseJson)
        );
      });
  };

  return (
    <div>
      <Navbar />
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
                  <p>Anurag Gharat</p>
                </div>
                <div className="col-6  border-bottom">
                  <h5>Email</h5>
                  <p>anuraggharat55@gmail.com</p>
                </div>
                <div className="col-6  border-bottom mt-3">
                  <h5>Phone number</h5>
                  <p>7745050822</p>
                </div>
                <div className="col-6  border-bottom mt-3">
                  <h5>Date of Birth</h5>
                  <p>22 May 2017</p>
                </div>
                <div className="col-6 mt-3">
                  <h5>Gender</h5>
                  <p>Male</p>
                </div>
                <div className="col-6 mt-3">
                  <h5>Current Location</h5>
                  <p className="mb-0">{location.latitude}</p>
                  <p className="mt-0">{location.longitude}</p>
                  {process.env.REACT_APP_KEY}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button onClick={getLocation}>Get Location of user</button>
    </div>
  );
}
