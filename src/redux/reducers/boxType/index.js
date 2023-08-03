import { SET_BOX_TYPE } from "redux/actions/action_types";

const INITIAL_STATE = {
  boxType: "square",
};
const checkBox = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case SET_BOX_TYPE:
      return { ...state, boxType: payload };
    default:
      return state;
  }
};
export default checkBox;
