import React, { Component } from "react";
import Room from "./room";
import { connect } from "react-redux";

class RoomList extends Component {
  render() {
    //handle connection error
    const connectionError = this.props.connectionError
      ? this.props.errorMessage
      : this.props.loadingMessage;

    const results = this.props.results;
    const roomList = results.length ? (
      results.map(room => {
        return (
          <div key={room.uuid} className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
            <Room roomType={room} coverStyle="small" />
          </div>
        );
      })
    ) : (
      <div className="col-md-4">{connectionError}</div>
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
    results: state.results,
    connectionError: state.connectionError,
    errorMessage: state.errorMessage,
    loadingMessage: state.loadingMessage
  };
};

export default connect(mapStateToProps)(RoomList);
