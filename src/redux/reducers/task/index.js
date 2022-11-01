import { SET_CHECKLIST } from "redux/actions/action_types";

const INITIAL_STATE = {
  allChecklist: null,
};

const task = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_CHECKLIST:
      return { ...state, allChecklist: action.payload };
    default:
      return state;
  }
};
export default task;
