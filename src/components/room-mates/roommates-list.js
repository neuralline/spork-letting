import React, { useState } from "react";
import RoomMatesCover from "./roommates-cover";

const RoomMatesList = props => {
  const [cover, setCover] = useState(0);
  const coverState = cover ? "onn" : "off";
  //hide or display roommates cover slide
  const displayCover = () => {
    setCover(!cover);
  };

  return (
    <div>
      <ul className="room-mates-ul">
        {props.roommates.map(roommate => (
          <li className="transition" key={roommate.uuid}>
            <img
              src={roommate.profilePic.cdnUrl}
              alt="avatar"
              onClick={displayCover}
            />
          </li>
        ))}
      </ul>

      <RoomMatesCover
        roommates={props.roommates}
        coverState={coverState}
        coverStyle={props.coverStyle}
        displayCover={displayCover}
      />
    </div>
  );
};

export default RoomMatesList;
