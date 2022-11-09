import axioPath from "api/axioPath";
import { SET_TEMPLATE, YOUR_TEMPLATE } from "redux/actions/action_types";

export const getAllTemplate = () => async (dispatch) => {
  try {
    const response = await axioPath.get(`v1/Template/AllTemplateAndCheckList`, {
      hideLoader: false,
    });
    dispatch({ type: SET_TEMPLATE, payload: response.data });
  } catch (ex) {
    console.log(ex);
  }
};

export const getAllTemplateByEmail = (userEmail) => async (dispatch) => {
  console.log("here---");
  try {
    const response = await axioPath.get(
      `v1/Template/AllTemplateAndCheckListByEmail/${userEmail}`,
      {
        hideLoader: false,
      }
    );
    dispatch({ type: YOUR_TEMPLATE, payload: response.data });
  } catch (ex) {
    console.log(ex);
  }
};
