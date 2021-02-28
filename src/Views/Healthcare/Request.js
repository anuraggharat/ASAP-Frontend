import React from "react";
import { logoutUser } from "../../Redux/Actions/healthcare";
import Navbar from "../../Components/Navbar";
import { connect } from "react-redux";
import Map from "../../Components/Map";
import { Link } from "react-router-dom";

function Request({ logoutUser, user, isLoggedIn }) {
  return (
    <div>
      <Navbar username={"some"} logoutUser={logoutUser} />

      <div className="p-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 border-bottom mb-3">
              <Link>Go Back</Link>
            </div>
          </div>
          <div className="row lead">
            <div className="col-lg-4 col-sm-12">
              <h4>NAME</h4>
              <div className="border-bottom"></div>
              <p>Anurag Gharat</p>
            </div>
            <div className="col-lg-4 col-sm-12">
              <h4>EMAIL</h4>
              <div className="border-bottom"></div>
              <p>anuraggharat55@gmail.com</p>
            </div>
            <div className=" col-lg-4 col-sm-12">
              <h4>NUMBER</h4>
              <div className="border-bottom"></div>

              <p>7745050822</p>
            </div>
            <div className="col-lg-4 col-sm-12">
              <h4>GENDER</h4>
              <div className="border-bottom"></div>
              <p>MALE</p>
            </div>
            <div className="col-lg-4 col-sm-12">
              <h4>EMAIL</h4>
              <div className="border-bottom"></div>
              <p>anuraggharat55@gmail.com</p>
            </div>
            <div className=" col-lg-4 col-sm-12">
              <h4>NUMBER</h4>
              <div className="border-bottom"></div>

              <p>7745050822</p>
            </div>
          </div>
        </div>
        <div className="container mt-5">
          <h3>Live location of Requester</h3>
          <Map lat={"18.654647"} lon={"72.89108879999999"} />
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  isLoggedIn: state.healthcare.isLoggedIn,
  user: state.healthcare.user,
});
export default connect(mapStateToProps, { logoutUser })(Request);
