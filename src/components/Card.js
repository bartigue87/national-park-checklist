import React from "react";
import locationPing from "../images/location-ping.png";

export default function Card(props) {
  return (
    <div className="card-container">
      <img className="card-image" src={props.imageUrl} alt="" />
      <div className="description-container">
        <div className="location-container">
          <img className="location-ping" src={locationPing} />
          <h5 className="location-state">{props.location}</h5>
          <a className="google-map" href={props.googleMapsUrl}>
            View on Google Maps
          </a>
        </div>
        <h3 className="location-title">{props.title}</h3>
        <h6 className="date">
          {props.startDate} - {props.endDate}
        </h6>
        <span className="description">{props.description}</span>
      </div>
    </div>
  );
}
