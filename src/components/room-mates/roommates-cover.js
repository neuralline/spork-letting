import React from "react";
import RoomMates from "./roommates";

const RoomMatesCover = props => {
  return (
    <ul className="room-mates-cover">
      {props.roommates.map(roommates => (
        <RoomMates key={roommates.uuid} roommates={roommates} />
      ))}
    </ul>
  );
};
export default RoomMatesCover;
