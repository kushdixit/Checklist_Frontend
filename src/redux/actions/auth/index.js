import axioPath from "api/axioPath";
import { SIGN_IN } from "redux/actions/action_types";
import { setCookie } from "../../../helpers/cookie";

export const authLogin = (data) => async (dispatch) => {
  console.log(data);
  const payload = {
    email: data.email,
    password: data.password,
  };
  try {
    const response = await axioPath.post("v1/Account/userslogin", payload);
    console.log("response", response);
    setCookie("access_token", response.data.accessToken, 36000000);
    dispatch({ type: SIGN_IN, payload: response.data });
    return { error: false, data: response.data };
  } catch (ex) {
    if (typeof ex == "string") {
      return { ex: { message: ex } };
    }
    return { error: true, data: ex };
  }
};

export const authSignup = (data) => async (dispatch) => {
  console.log(data);
  // const payload = {
  //   firstName: "Test4",
  //   lastName: "Test",
  //   email: "test@gmail.com",
  //   password: "12345",
  // };
  const payload = {
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    password: data.password,
  };

  try {
    const response = await axioPath.post("v1/Account/usersignup", payload);
    console.log("response", response);
    // navigate to login Page
    // return { error: false, data: jsonResponse.data };
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
    console.log("response", response);
  } catch (ex) {
    if (typeof ex == "string") {
      return { ex: { message: ex } };
    }
    return { error: true, data: ex };
  }
};

export const resetPassword = (data) => async (dispatch) => {
  const payload = {
    id: 1,
    password: "12345",
  };
  try {
    const response = await axioPath.put("v1/Account/resetpassword", payload);
    console.log("response", response);
  } catch (ex) {
    if (typeof ex == "string") {
      return { ex: { message: ex } };
    }
    return { error: true, data: ex };
  }
};
