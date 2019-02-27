import React from "react";
import { Link } from "react-router-dom";

const Profile = props => {
  return (
    <div className="container">
      <h1>
        <Link to="/">Home </Link> > Profile
      </h1>
      <div>
        <div className="row">
          <div className="col-12 ">
            <div className="container">Profile</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
