import React, { Component } from "react";
import RoomMatesCover from "./room-mates/roommates-cover";
import RoomMatesList from "./room-mates/roommates-list";
import TransportType from "./transport-type/transport-type";
import { Link } from "react-router-dom";
import walk from "./transport-type/walk-icon--black.svg";

const Room = props => {
  return (
    <div className="room">
      <div className="featured">
        <Link to={"/listings/" + props.roomType.uuid}>
          <img
            src={props.roomType.photos[0].cdnUrl}
            alt="featured"
            className="featured-image"
          />
        </Link>

        <RoomMatesList roommates={props.roomType.roommates} />
        <RoomMatesCover roommates={props.roomType.roommates} />
      </div>
      <div className="room-detail">
        <div className="">
          <h4>
            £{props.roomType.rentPerMonth}
            <span className="bar" />
            {props.roomType.roomTitle}
          </h4>
        </div>
        <div>
          <span className="area">{props.roomType.area}</span>
          <span className="bar" />
          <span className="area">
            <img src={walk} alt="walk" className="transport-type" />
          </span>
          <span className="area">{props.roomType.transport.distance.time}</span>

          <span className="area">
            <TransportType type={props.roomType.transport.distance.type} />
          </span>
          <span className="area">{props.roomType.transport.name}</span>
        </div>
      </div>
    </div>
  );
};
export default Room;
