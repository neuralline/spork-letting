import React, { Component } from "react";
import Room from "./room";
import { connect } from "react-redux";

class RoomList extends Component {
  render() {
    const results = this.props.results;
    const roomList = this.props.results.length ? (
      results.map(room => {
        return (
          <div className="col-md-3 col-sm-4 col-xs-12 ">
            <Room key={room.uuid} roomType={room} />
          </div>
        );
      })
    ) : (
      <div className="col-md-4">Searching for available rooms...</div>
    );
    return (
      <div className="container">
        <h1>Available rooms</h1>
        <div>
          <div className="row">{roomList}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    results: state.results
  };
};

export default connect(mapStateToProps)(RoomList);
