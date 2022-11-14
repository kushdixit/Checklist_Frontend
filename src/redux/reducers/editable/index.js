import { SET_IS_EDITABLE } from "redux/actions/action_types";

const INITIAL_STATE = {
  isEditable: false,
};
const editable = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case SET_IS_EDITABLE:
      return { ...state, isEditable: payload };
    default:
      return state;
  }
};
export default editable;
