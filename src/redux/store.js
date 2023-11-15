import { createStore } from "redux";

const initialState = {
  details: {
    name: "",
    age: "",
    time: "",
    date: "",
  },
};

const detailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, details: { ...state.details, name: action.payload } };
    case "SET_AGE":
      return { ...state, details: { ...state.details, age: action.payload } };
    case "SET_TIME":
      return { ...state, details: { ...state.details, time: action.payload } };
    case "SET_DATE":
      return { ...state, details: { ...state.details, date: action.payload } };
    default:
      return state;
  }
};

export const store = createStore(detailsReducer);
