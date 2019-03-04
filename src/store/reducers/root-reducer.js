const initialState = {
  status: 200,
  date: "2019-02-22T10:36:05",
  resultsPerPage: 10,
  page: 1,
  title: "Rooms",
  numberOfResults: 4,
  results: [],
  connectionError: 0,
  errorMessage: "error connecting to server",
  loadingMessage: "Searching for available rooms..."
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ROOM_LIST":
      return { ...state, results: action.payload.results, connectionError: 0 };
    case "ROOM_LIST_ERROR":
      return { ...state, connectionError: 1 };
    default:
      return state;
  }
};

export default rootReducer;
