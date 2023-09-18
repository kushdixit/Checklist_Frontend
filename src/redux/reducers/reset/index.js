import { RESET_STORE } from "redux/actions/action_types";

const initialState = {};

const resetReducer = (state = initialState, action) => {
  console.log("first>>>>");
  if (action.type === RESET_STORE) {
    console.log("Working>>>>>>>");
    return initialState;
  }
  console.log("end>>>>>");
  return state;
};

export default resetReducer;
