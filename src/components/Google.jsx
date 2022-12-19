import React from "react";
import { GoogleLogin } from "react-google-login";
import { authSignup } from "../redux/actions/auth";
import { store } from "redux/index";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { notification } from "antd";

const Google = () => {
  const navigate = useNavigate();
  const [api, contextHolder] = notification.useNotification();

  const openNotification = (message) => {
    api.info({
      message,
    });
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
    if (res.error === false) navigate("/dashboard");
    else if (res.data.response.data.Message === "Already exist.")
      openNotification("Email already exist.Please try Logging in");
    else openNotification("Error");
  };

  const responseGoogle = (data) => {
    signupHandler(data);
  };

  return (
    <div>
      {contextHolder}
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
