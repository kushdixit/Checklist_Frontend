import { SET_SEARCH } from "redux/actions/action_types";

const INITIAL_STATE = {
  search: "",
};
const editable = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case SET_SEARCH:
      return { ...state, search: payload };
    default:
      return state;
  }
};
export default editable;
