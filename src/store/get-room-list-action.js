import axios from "axios";

const getRoomList = project => {
  return (dispatch, getState) => {
    axios.get("https://api.spork.digital/test/").then(res => {
      console.log(res);
      this.setState({ ...res.data });
    });

    dispatch({ type: "ROOM_LIST", project });
  };
};

export default getRoomList;
