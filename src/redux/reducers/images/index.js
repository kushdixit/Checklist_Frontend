import { GET_IMAGES } from "redux/actions/action_types";

const INITIAL_STATE = {
  images: [],
};
const getImages = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case GET_IMAGES:
      return { ...state, images: payload };
    default:
      return state;
  }
};
export default getImages;
