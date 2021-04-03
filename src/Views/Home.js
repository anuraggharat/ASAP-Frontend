import React from "react";
import { Link } from "react-router-dom";
import firstImage from "../Assets/mockup1.png";
import secondImage from "../Assets/mockup2.png";
import thirdImage from "../Assets/mockup3.png";

export default function Home() {
  return (
    <>
      <div className="w-100 min-vh-100 bg-home d-flex flex-column justify-content-center text-center text-white">
        <div className="overlay"></div>
        <div className="container z-10">
          <h1 className=" display-3">Healthcare Anywhere, Anytime!</h1>
          <div className="w-75 mx-auto px-5 my-4">
            <p className="lead">
              A online portal for users to request healthcare help. A nearest
              healthcare station is alloted according to users position.
            </p>
          </div>
          <div className="d-flex justify-content-around w-75 mx-auto">
            <Link to="/user/login" className="btn btn-primary">
              User Login
            </Link>
            <Link to="/healthcare/login" className="btn btn-primary">
              Healthcare Login
            </Link>
          </div>
        </div>
      </div>
      <div className="w-100 mt-5 pt-5">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-6 col-sm-12 d-flex justify-content-center">
              <img src={thirdImage} className="w-50 ml-auto home-image"></img>
            </div>
            <div className="col-lg-6 text-sm-center col-sm-12 d-flex flex-column  justify-content-center align-items-start">
              <h1>Create your account</h1>
              <p className="text-muted lead">
                Visit{" "}
                <b>
                  <a
                    className=""
                    href="https://assapapp.netlify.app/"
                    target="_blank"
                  >
                    Assap Help
                  </a>
                </b>{" "}
                and create your account as a user. Once logged in you can either
                request for either emergency,Book a appointment with doctor or
                upload your medical reports.
              </p>
            </div>
          </div>
        </div>
        <div className="container py-5">
          <div className="row change-order ">
            <div className="col-lg-6 text-sm-center col-sm-12 d-flex flex-column  justify-content-center align-items-end-lg">
              <h1>Send a Request</h1>
              <p className="text-right-lg text-muted lead">
                Incase of emergency click on the emergency button. Your details
                along with live location with be sent to the nearest healthcare
                provider.
              </p>
            </div>
            <div className="col-lg-6 d-flex offset-md-12 justify-content-center">
              <img src={firstImage} className="w-50 mr-auto home-image "></img>
            </div>
          </div>
        </div>
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-6  col-sm-12 d-flex justify-content-center">
              <img src={secondImage} className="w-50 ml-auto home-image"></img>
            </div>
            <div className="col-lg-6 text-sm-center col-sm-12 d-flex flex-column  justify-content-center align-items-start-lg">
              <h1>Recieve Assistance</h1>
              <p className="text-muted lead text-left-lg">
                Once your request is recieved you will be sent details of
                nearest Healthcare provider along with relevant details.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
