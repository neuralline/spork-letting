import React from "react";
const RoomMate = props => {
  return (
    <li className="transition">
      <img
        src={props.roommate.profilePic.cdnUrl}
        alt=""
        className="room-mate-avatar"
      />
    </li>
  );
};
export default RoomMate;
