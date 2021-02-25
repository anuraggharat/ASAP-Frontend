import React from "react";
import moment from "moment";

export default function ListComp({ index, item }) {
  console.table(item);
  const time = moment(item.date).fromNow();
  return (
    <div key={index} className="list-group-item list-group-item-action ">
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
            <a
              className="link"
              href={`https://www.google.com/maps/search/?api=1&query=${item.latitude},${item.longitude}`}
              target="_blank"
              rel="noreferrer"
            >
              get location
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
