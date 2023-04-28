import axioPath from "api/axioPath";
import { SIGN_IN } from "redux/actions/action_types";

export const authLogin = (payload) => async (dispatch) => {
  try {
    const response = await axioPath.post("v1/Account/userslogin", payload);
    response.data.accessToken &&
      localStorage.setItem("access_token", response.data.accessToken);
    dispatch({ type: SIGN_IN, payload: response.data });
    return { error: false, data: response.data };
  } catch (ex) {
    if (typeof ex == "string") {
      return { ex: { message: ex } };
    }
    return { error: true, data: ex };
  }
};

export const authSignup = (payload) => async (dispatch) => {
  try {
    const response = await axioPath.post("v1/Account/usersignup", payload);
    localStorage.setItem("access_token", response.data.accessToken);
    dispatch({ type: SIGN_IN, payload: response.data });
    return { error: false, data: response.data };
  } catch (ex) {
    if (typeof ex == "string") {
      return { ex: { message: ex } };
    }
    return { error: true, data: ex };
  }
};

export const forgotPassword = (data) => async (dispatch) => {
  const payload = {
    email: data.email,
  };
  try {
    const response = await axioPath.put("v1/Account/forgotpassword", payload);
    return response.status;
  } catch (ex) {
    if (typeof ex == "string") {
      return { ex: { message: ex } };
    }
    return 400;
  }
};

export const resetPassword = (pass, id) => async (dispatch) => {
  const payload = {
    id,
    password: pass,
  };
  try {
    const response = await axioPath.put("v1/Account/resetpassword", payload);
    return response.status;
  } catch (ex) {
    if (typeof ex == "string") {
      return { ex: { message: ex } };
    }
    return { error: true, data: ex };
  }
};
