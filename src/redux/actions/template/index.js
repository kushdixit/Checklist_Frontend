import axioPath from "api/axioPath";
import { useSelector } from "react-redux";
import { SET_TEMPLATE } from "redux/actions/action_types";

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

export const getAllTemplateByEmail = () => async (dispatch) => {
  const userEmail = useSelector((state) => state.auth.email);
  try {
    const response = await axioPath.get(
      `v1/Template/AllTemplateAndCheckListByEmail/${userEmail}`,
      {
        hideLoader: false,
      }
    );
    dispatch({ type: SET_TEMPLATE, payload: response.data });
  } catch (ex) {
    console.log(ex);
  }
};
