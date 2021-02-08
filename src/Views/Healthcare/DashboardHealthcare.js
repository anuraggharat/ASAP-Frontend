import React, { useState } from "react";
import Navbar from "../../Components/Navbar";

export default function DashboardHealthcare() {
  const [req, setReq] = useState([
    {
      name: "Anurag Gharat",
      email: "anuraggharat55@gmail.com",
      phone: "7745050822",
      gender: "Male",
      location: "Alibag,Raigad,Maharashtra",
    },
    {
      name: "Shubham Gharat",
      email: "shubhamgharat55@gmail.com",
      phone: "7745050822",
      gender: "Male",
      location: "Alibag,Raigad,Maharashtra",
    },
    {
      name: "Pawan Bhanushali",
      email: "pawanbhanu@gmail.com",
      phone: "7745050822",
      gender: "Male",
      location: "Surat, Gujrat",
    },
    {
      name: "Sanjeel Bhosale",
      email: "sanjubhosale@gmail.com",
      phone: "7745050822",
      gender: "Male",
      location: "Dadar,Mumbai",
    },
  ]);

  return (
    <>
      <Navbar username={"anuraggharat55@gmail.com"} />
      <div className="container-fluid">
        <div className="text-center w-100">
          <h1 className="mt-4">Sharda Hospital</h1>
          <p>Near Panvel Bus station, Navi-Mumbai, Maharashtra</p>
        </div>
        <div className="w-100 min-vh-100 mt-4">
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
                  <div className="col-lg-3">
                    <h5>Gender</h5>
                  </div>
                  <div className="col-lg-3">
                    <h5>Current Location</h5>
                  </div>
                </div>
              </div>
              {req.map((item, index) => (
                <div
                  key={index}
                  className="list-group-item list-group-item-action "
                >
                  <div className="row">
                    <div className="col-lg-3">
                      <p className="mb-0">{item.name}</p>
                      <span className="mt-0 text-muted small-text">
                        {item.email}
                      </span>
                    </div>
                    <div className="col-lg-3">
                      <p>{item.phone}</p>
                    </div>
                    <div className="col-lg-3">
                      <p>{item.gender}</p>
                    </div>
                    <div className="col-lg-3">
                      <div className="d-flex justify-content-between">
                        <p className="text-success">{item.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
