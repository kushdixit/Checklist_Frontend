import { SET_TASK } from "redux/actions/action_types";

const INITIAL_STATE = {
  addTask: 0,
};
const addTask = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case SET_TASK:
      return { ...state, addTask: payload };
    default:
      return state;
  }
};
export default addTask;
