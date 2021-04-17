import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import api from "../utils/api";
import user from "../Redux/Reducers/user";


export default function BookAppointment({ toggle, modal,hospitalsList ,user,location}) {

  const [values,setValues]=useState({
    name:"",
    hospital:"",
    timeslot:"",
    reason:""
  })
  const [startDate, setStartDate] = useState(new Date());
console.log(hospitalsList)

  const bookAppointment=async()=>{
    try {
      const body = {
        lat: location.latitude,
        long:location.longitude,
        uid:user._id,
        hname:values.hospital,
        dt:startDate,
        ts:values.timeslot,
        reason:values.reason
      };
      const jsonbody = JSON.stringify(body)
      const res = await api.post("/appointment/booking",jsonbody);
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }

  console.log(values,"values")

  const handleChange=(e)=>{
    setValues({...values,[e.target.name]:e.target.value})
  }


  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Book your Appointment</ModalHeader>
        <ModalBody>
          <div className="w-100">
            <form className="container">
              <div className="row mb-4">
                <div className="col-lg-3 col-form-label">Appointee</div>
                <div className="col-lg-9">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                    name="name"
                    value={values.name}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </div>
              <div className="row ">
                <div className="col-lg-3  col-form-label">Hospital</div>
                <div className="col-lg-9">
                  <select
                    className="form-control w-100"
                    aria-label="Default select example"
                    value={values.hospital}
                    onChange={(e) => handleChange(e)}
                    name="hospital"
                  >
                    <option>Choose hospital</option>
                    {hospitalsList &&
                      hospitalsList.map((item) => (
                        <option key={item.name} value={item.name}>
                          {item.name} ({item.type})
                        </option>
                      ))}
                  </select>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-lg-3 col-form-label">Select Date</div>
                <div className="col-lg-9">
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-lg-3  col-form-label">TimeSlot</div>
                <div className="col-lg-9 d-flex  align-items-end justify-content-start">
                  <select
                    className="form-control w-100 ml-auto"
                    aria-label="Default select example"
                    value={values.timeslot}
                    onChange={(e) => handleChange(e)}
                    name="timeslot"
                  >
                    <option defaultValue={values.timeslot}>Select the time slot</option>
                    <option value="10am - 11am">10am - 11am</option>
                    <option value="11am - 12am">11am - 12am</option>
                    <option value="12pm - 1pm">12pm - 1pm</option>
                    <option value="1pm - 2pm">1pm - 2pm</option>
                    <option value="2pm - 3pm">2pm - 3pm</option>
                    <option value="3pm - 4pm">3pm - 4pm</option>
                    <option value="4pm - 5pm">4pm - 5pm</option>
                    <option value="5pm - 6pm">5pm - 6pm</option>
                  </select>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-lg-3  col-form-label">Note</div>
                <div className="col-lg-9">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Note"
                    name="reason"
                    value={values.reason}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </div>
              
              <div className="container">
                <Button
                  color="primary"
                  className="mt-4"
                  block
                  onClick={() => bookAppointment()}
                >
                  Book
                </Button>
              </div>
            </form>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
}
