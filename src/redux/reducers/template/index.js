import { SET_TEMPLATE, YOUR_TEMPLATE } from "redux/actions/action_types";

const INITIAL_STATE = {
  allTemplate: null,
  yourTemplate: null,
};

const Template = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_TEMPLATE:
      return { ...state, allTemplate: action.payload };
    case YOUR_TEMPLATE:
      return { ...state, yourTemplate: action.payload };
    default:
      return state;
  }
};
export default Template;
