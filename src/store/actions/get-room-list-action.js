import axios from "axios";

const getRoomListAction = rooms => {
  return (dispatch, getState) => {
    axios
      .get("https://api.spork.digital/test/")
      .then(res => {
        dispatch({
          type: "ROOM_LIST",
          payload: res.data
        });
      })
      .catch(err =>
        dispatch({
          type: "ROOM_LIST_ERROR",
          payload: err
        })
      );
  };
};

export default getRoomListAction;
