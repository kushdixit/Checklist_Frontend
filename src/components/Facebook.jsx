import React from "react";
import FacebookLogin from "react-facebook-login";
import { authSignup } from "../redux/actions/auth";
import { store } from "redux/index";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";
const Facebook = () => {
  const navigate = useNavigate();
  const responseFacebook = async (data) => {
    const userName = data.name.split(" ");
    const payload = {
      firstName: userName[0],
      lastName: userName[1],
      email: data.email,
      password: "",
      issocial: 2,
    };
    const res = await store.dispatch(authSignup(payload));
    console.log("res", res);
    if (res.error === false) navigate("/dashboard");
    else if (res.data.response.data.Message === "Already exist.")
      toast("Email already exist.Please try Logging in");
    else toast("Error");
  };

  return (
    <div>
      <ToastContainer />
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
    </div>
  );
};

export default Facebook;
export const FacebookSection = styled.div`
background: unset;
    border: unset;
    font-size: 16px;
 .my-facebook-button-class{
  background: unset;
    border: unset;
    font-size: 16px;

 }
 .fa-facebook{
  color: #1d2e88;
    padding: 4px 7px;
    font-size: 18px;
 }
`;