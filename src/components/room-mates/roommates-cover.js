import React from "react";
import { Link } from "react-router-dom";

const RoomMatesCover = props => {
  return (
    <div className={`room-mates-cover transition ${props.coverState} `}>
      <ul className={`room-mates-cover-ul  ${props.coverStyle} `}>
        {props.roommates.map(roommate => (
          <li key={"cover" + roommate.uuid}>
            <Link to={"/profile/" + roommate.uuid}>
              <img
                src={roommate.profilePic.cdnUrl}
                alt="avatar"
                className="room-mate-avatar"
              />
              <div className="room-mate-name">{roommate.firstName}</div>
            </Link>
          </li>
        ))}
      </ul>
      <div className="back-button" onClick={props.displayCover}>{`<`}</div>
    </div>
  );
};
export default RoomMatesCover;
