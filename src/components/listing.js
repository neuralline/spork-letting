import React, { Component } from "react";
import Room from "./room";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Listing extends Component {
  render() {
    return (
      <div className="container">
        <h1>
          <Link to="/">Home </Link> > Selected room
        </h1>
        <div>
          <div className="row">
            <div className="col-12 ">
              <Room key={this.props.room.uuid} roomType={this.props.room} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  let uuid = ownProps.match.params.uuid;
  return {
    room: state.results.find(room => room.uuid === uuid)
  };
};

export default connect(mapStateToProps)(Listing);
