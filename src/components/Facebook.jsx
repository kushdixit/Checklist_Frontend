import React from "react";
import FacebookLogin from "react-facebook-login";
import { authSignup } from "../redux/actions/auth";
import { store } from "redux/index";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { notification } from "antd";

const Facebook = () => {
  const navigate = useNavigate();
  const [api, contextHolder] = notification.useNotification();

  const openNotification = (message) => {
    api.info({
      message,
    });
  };

  const signupHandler = async (data) => {
    const userName = data.name.split(" ");
    const payload = {
      firstName: userName[0],
      lastName: userName[1],
      email: data.email,
      password: "",
      issocial: 2,
    };
    const res = await store.dispatch(authSignup(payload));
    if (res.error === false) navigate("/dashboard");
    else if (res.data.response.data.Message === "Already exist.")
      openNotification("Email already exist.Please try Logging in");
    else openNotification("Error");
  };

  const responseFacebook = async (data) => {
    signupHandler(data);
  };

  return (
    <div>
      {contextHolder}
      <FacebookSection>
        <FacebookLogin
          appId="561436628788154"
          autoLoad={false}
          fields="name,email,picture"
          callback={responseFacebook}
          cssClass="my-facebook-button-class"
          icon="fa-facebook"
        />
      </FacebookSection>
      <FacebookSectionMobile>
        <FacebookLogin
          appId="561436628788154"
          autoLoad={false}
          fields="name,email,picture"
          callback={responseFacebook}
          cssClass="my-facebook-button-class"
          icon="fa-facebook"
        />
      </FacebookSectionMobile>
    </div>
  );
};

export default Facebook;

export const FacebookSection = styled.div`
  background: unset;
  border: unset;
  font-size: 16px;
  .my-facebook-button-class {
    background: unset;
    border: unset;
    font-size: 14px;
    /* @media (max-width: 465px) {
      font-size: 13px;
  } */
  }
  .fa-facebook {
    color: #1d2e88;
    padding: 4px 7px;
    font-size: 24px;
    /* @media (max-width: 465px) {
      font-size: 13px;
  } */
  }
  @media (max-width: 1920px) {
    display: block;
  }
  @media (max-width: 465px) {
    display: none;
  }
`;

export const FacebookSectionMobile = styled.div`
  background: unset;
  border: unset;
  font-size: 16px;
  .my-facebook-button-class {
    background: unset;
    border: unset;
    font-size: 14px;
    /* @media (max-width: 465px) {
      font-size: 13px;
  } */
  }
  .fa-facebook {
    color: #1d2e88;
    padding: 4px 7px;
    font-size: 24px;
    @media (max-width: 465px) {
      padding: 10px !important;
    }
  }
  @media (min-width: 466px) {
    display: none;
  }
  @media (max-width: 465px) {
    display: block;
  }
`;
