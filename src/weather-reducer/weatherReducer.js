const actionTypes = {
  GET: "GET",
  ERROR: "ERROR",
  SET_LOCATION: "SET_LOCATION",
};
export const weatherReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.GET:
      return { ...state, weatherData: action.payload, error: null };
    case actionTypes.ERROR:
      return { ...state, weatherData: null, error: action.payload };
    case actionTypes.SET_LOCATION:
      return { ...state, location: action.payload };
    default:
      return state;
  }
};
