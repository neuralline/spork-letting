import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import RoomList from "./components/room-list";
import Listing from "./components/listing";
import Profile from "./components/profile/profile";
import "./App.scss";
import { connect } from "react-redux";
import getRoomList from "./store/get-room-list-action";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={RoomList} />
          <Route path="/profile/:uuid" component={Profile} />
          <Route path="/listings/:uuid" component={Listing} />
        </div>
      </BrowserRouter>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getRoomList: data => dispatch(getRoomList(data))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(App);
