import React from "react";
import { Link } from "react-router-dom";

const RoomMates = props => {
  return (
    <li className="transition">
      <Link to={"/profile/" + props.uuid}>
        <img
          src={props.roommates.profilePic.cdnUrl}
          alt=""
          className="room-mates"
        />
      </Link>
    </li>
  );
};
export default RoomMates;
