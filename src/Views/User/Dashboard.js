import React from "react";
import Navbar from "../../Components/Navbar";

export default function Dashboard() {
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
