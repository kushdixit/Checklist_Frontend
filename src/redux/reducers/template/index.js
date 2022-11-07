import { SET_TEMPLATE } from "redux/actions/action_types";

const INITIAL_STATE = {
  allTemplate: null,
};

const Template = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_TEMPLATE:
      return { ...state, allTemplate: action.payload };
    default:
      return state;
  }
};
export default Template;
