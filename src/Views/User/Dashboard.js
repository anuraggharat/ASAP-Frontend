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
import { GiHealthNormal } from "react-icons/gi";
import BookAppointment from "../../Components/BookAppointment";

function Dashboard({ logoutUser, user, isLoggedIn }) {
  const [location, setLocation] = useState({
    latitude: "",
    longitude: "",
  });
  const [beds, setBeds] = useState(0);
  const [hospital, setHospital] = useState(null);
  var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  const [hospitals,setHospitals] = useState([])
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const getHospitals=async()=>{
    const res = await api.get("/listhospital/");
    if(res.data.success){
      setHospitals(res.data.data)
    }
    else{
      setHospitals([])
    }
  }

  const sendRequest = async (e) => {
    setHospital(null);
    e.preventDefault();
    try {
      const myData = {
        id: user._id,
        lat: location.latitude,
        long: location.longitude,
      };
      const body = JSON.stringify(myData);

      const { data } = await api.post("/nearest", body);
      console.table(data);
      if (data.success) {
        toast.success("Request Sent!");
        toast.success(data.message);
        toast.info(`Available beds: ${data.beds}`);
        setHospital(data.hospital);
        setBeds(data.beds);
      } else {
        toast.error("Please try again!");
      }
    } catch (error) {
      toast.error("Unable to place your Request");
    }
  };

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
      // toast.info("Location fetch success");
    } catch (error) {
      toast.error("Unable to fetch location");
    }
  };



  useEffect(() => {
    getLocation();
    getHospitals()
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
    return <Redirect to="/user/login" />;
  }

  console.log(user)
  return (
    <div>
      <Navbar logoutUser={logoutUser} username={user.email} normalUser={true} />
      <div className="container mt-5 pb-5">
        <div className="d-flex w-50 mx-auto justify-content-around  flex-md-row flex-column">
          <button
            className="btn btn-lg btn-danger shadow-lg danger-button my-3"
            onClick={(e) => sendRequest(e)}
          >
            <i className="bi bi-exclamation-circle "></i>
            EMERGENCY
          </button>
          <button
            onClick={toggle}
            className="btn btn-lg btn-info shadow-lg danger-button my-3"
          >
            <GiHealthNormal />
            Appointment
          </button>
        </div>
        <BookAppointment toggle={toggle} modal={modal} user={user}  hospitalsList={hospitals} location={location}/>
        <div className="container mt-3">
          {hospital && (
            <div className="alert alert-info" role="alert">
              <div className="row">
                <div className="col-lg-4 my-2 col-sm-6">
                  HOSPITAL NAME:<br></br>
                  {hospital.name}
                </div>
                <div className="col-lg-4 my-2 col-sm-6">
                  HOSPITAL TYPE:<br></br>
                  {hospital.type}
                </div>
                <div className="col-lg-4 my-2 col-sm-6">
                  DOCTOR NAME:<br></br>
                  {hospital.main_doc_name}
                </div>
                <div className="col-lg-4 my-2 col-sm-6">
                  CONTACT NUMBER:<br></br>
                  {hospital.contact}
                </div>
                <div className="col-lg-4 my-2 col-sm-6">
                  HOSPITAL EMAIL:<br></br>
                  {hospital.email}
                </div>
                <div className="col-lg-4 my-2 col-sm-6">
                  AVAILABLE BEDS:<br></br>
                  {beds}
                </div>
              </div>
              <div>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${hospital.latitude},${hospital.xyz}`}
                  target="_blank"
                >
                  Get Location
                </a>
              </div>
            </div>
          )}
        </div>
        <div className="container">
          <h4>Current Location</h4>
          {location.latitude && location.longitude ? (
            <Map lat={location.latitude} lon={location.longitude} />
          ) : (
            <Loading />
          )}
        </div>
        <div className="d-flex mt-5 text-muted">
          <div className="card w-100 shadow-lg border-0">
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6 col-sm-12 border-bottom">
                  <h5>Name</h5>
                  <p>{user.name}</p>
                </div>
                <div className="col-lg-6 col-sm-12  border-bottom">
                  <h5>Email</h5>
                  <p>{user.email}</p>
                </div>
                <div className="col-lg-6 col-sm-12 border-bottom mt-3">
                  <h5>Phone number</h5>
                  <p>{user.phoneNo}</p>
                </div>
                <div className="col-lg-6 col-sm-12  border-bottom mt-3">
                  <h5>Date of Birth</h5>
                  <p>{user.dob}</p>
                </div>
                <div className="col-lg-6 col-sm-12 mt-3 ">
                  <h5>Gender</h5>
                  <p>{user.gender}</p>
                </div>
                <div className="col-lg-6 col-sm-12 mt-3">
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
