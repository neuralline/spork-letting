import React from "react";
import RoomMates from "./roommates";

const RoomMatesList = props => {
  return (
    <ul className="room-mates-ul">
      {props.roommates.map(roommates => (
        <RoomMates key={roommates.uuid} roommates={roommates} />
      ))}
    </ul>
  );
};
export default RoomMatesList;
