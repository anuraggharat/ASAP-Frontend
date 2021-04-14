import React from "react";
import { logoutUser } from "../../Redux/Actions/healthcare";
import Navbar from "../../Components/Navbar";
import { connect } from "react-redux";
import Map from "../../Components/Map";
import { Link } from "react-router-dom";
import moment from "moment";

function Request({ logoutUser, user, isLoggedIn, location }) {
  console.log(location);
  const { item } = location;
  return (
    <div>
      <Navbar username={user.email} logoutUser={logoutUser} normalUser={false} />

      <div className="p-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 mb-3">
              <Link to="/healthcare/home">Go Back</Link>
            </div>
          </div>
          <div className="row lead">
            <div className="col-lg-4 col-sm-12">
              <h4>NAME</h4>
              <div className="border-bottom"></div>
              <p>{item.name}</p>
            </div>
            <div className="col-lg-4 col-sm-12">
              <h4>EMAIL</h4>
              <div className="border-bottom"></div>
              <p>{item.email ? item.email : "not provided"}</p>
            </div>
            <div className=" col-lg-4 col-sm-12">
              <h4>NUMBER</h4>
              <div className="border-bottom"></div>

              <p>{item.phoneNo}</p>
            </div>
            <div className="col-lg-4 col-sm-12 mt-3">
              <h4>GENDER</h4>
              <div className="border-bottom"></div>
              <p>{item.gender}</p>
            </div>
            <div className="col-lg-4 col-sm-12 mt-3">
              <h4>Requested</h4>
              <div className="border-bottom"></div>
              <p>{moment(item.date).fromNow()}</p>
            </div>
            {/* <div className=" col-lg-4 col-sm-12">
              <h4>NUMBER</h4>
              <div className="border-bottom"></div>

              <p>7745050822</p>
            </div> */}
          </div>
        </div>
        <div className="container mt-5">
          <h3>Live location of Requester</h3>
          <Map lat={item.latitude} lon={item.longitude} />
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
