import React from "react";
import { GoogleLogin } from "react-google-login";
import { authSignup } from "../redux/actions/auth";
import { store } from "redux/index";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Google = () => {
  const navigate = useNavigate();

  const responseGoogle = async (data) => {
    console.log(data);
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

  return (
    <div>
      <ToastContainer />
      <GoogleLogin
        clientId="889277139020-75dbj8v51vs4af256tggoooibgpkqnao.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
};

export default Google;
