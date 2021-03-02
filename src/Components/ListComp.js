import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import { BsBoxArrowInRight } from "react-icons/bs";
export default function ListComp({ key, item }) {
  console.table(item);
  const time = moment(item.date).fromNow();
  return (
    <div key={key} className="list-group-item list-group-item-action ">
      <div className="row">
        <div className="col-lg-3">
          <p className="mb-0">{item.name}</p>
        </div>
        <div className="col-lg-3">
          <p>{item.phoneNo}</p>
        </div>
        <div className="col-lg-2">
          <p>{item.gender}</p>
        </div>
        <div className="col-lg-2">
          <div className="d-flex justify-content-between">
            <p className="text-success">{time}</p>
          </div>
        </div>
        <div className="col-lg-2">
          <div className="d-flex justify-content-between">
            <Link
              className="d-flex align-items-center p-0 justify-space-between"
              to={{ pathname: `/healthcare/request`, item: item }}
            >
              Get Details
              <BsBoxArrowInRight className="ml-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
