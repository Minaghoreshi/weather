const actionTypes = {
  GET: "GET",
  ERROR: "ERROR",
};
export const weatherReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.GET:
      return { ...state, weatherData: action.payload, error: null };
    case actionTypes.ERROR:
      return { ...state, weatherData: null, error: action.payload };

    default:
      return state;
  }
};
