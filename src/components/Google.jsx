import React from "react";
import { GoogleLogin } from "react-google-login";
import { authSignup, authLogin } from "../redux/actions/auth";
import { store } from "redux/index";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";

const Google = ({ type }) => {
  const navigate = useNavigate();

  const loginHandler = async (data) => {
    const payload = {
      email: data.wt.cu,
      password: "",
      issocial: 1,
    };
    const res = await store.dispatch(authLogin(payload));
    if (res.error === false) navigate("/dashboard");
    else toast(res.data.response.data.Message);
  };

  const signupHandler = async (data) => {
    const payload = {
      firstName: data.wt.rV,
      lastName: data.wt.uT,
      email: data.wt.cu,
      password: "",
      issocial: 1,
    };
    const res = await store.dispatch(authSignup(payload));
    console.log("res", res, res.data.response.data.Message);
    if (res.error === false) navigate("/dashboard");
    else if (res.data.response.data.Message === "Already exist.")
      toast("Email already exist.Please try Logging in");
    else toast("Error");
  };

  const responseGoogle = (data) => {
    type === "login" ? loginHandler(data) : signupHandler(data);
  };

  return (
    <div>
      <ToastContainer />
      <GoogleSection>
        <GoogleLogin
          clientId="889277139020-75dbj8v51vs4af256tggoooibgpkqnao.apps.googleusercontent.com"
          buttonText="Login with Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
          className="my-google-button-class"
          icon="fa-google"
        />
      </GoogleSection>
    </div>
  );
};

export default Google;

export const GoogleSection = styled.div`
  background: unset;
  border: unset;
  font-size: 14px;
  box-shadow: unset;

  .my-google-button-class {
    background: unset;
    border: unset;
    font-size: 14px !important;
    box-shadow: unset !important;
    color: #000 !important;
  }
  div {
    margin-right: 0 !important;
  }
  .fa-google {
    color: #1d2e88;
    padding: 4px 7px;
    font-size: 24px;
  }
`;
