import React,{useEffect} from "react";
import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";
import { useNavigate } from "react-router-dom";



const Googlelogin = () => {
    const clienId = "633992670102-2rvadalcqrm692tst7blia9oc4ri7u9f.apps.googleusercontent.com"; 
    const navigate = useNavigate();

  const onLoginSuccess = (res) => {

    if(res.profileObj){
        navigate("/dashboard", { state: {loginData: res}});
    }

  }

  const onFailureSuccess = (res) => {
    console.log('Login Failure=====', res)
  }
  
  useEffect(() => {
    const initClient = () => {
        gapi.auth2.init({
            clientId: clienId,
            scope: ''
        });
    };
    gapi.load('client:auth2', initClient);
});
  
  return (
<div>
        
      <GoogleLogin
        clientId={clienId}
        buttonText="Login with google"
        onSuccess={onLoginSuccess}
        onFailure={onFailureSuccess}
        cookiePolicy={"single_host_origin"}
      />
      </div>
  );
};

export default Googlelogin;
