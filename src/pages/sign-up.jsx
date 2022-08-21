import React from "react";
import { Link } from "react-router-dom";
import { BodyContainer,FormBody} from "styles/pages/SignOut";

const SignUp = () => {
    const formFields = () => {
        return (
          <FormBody>             
            <Link to="/sign-In">SignUp</Link>  
          </FormBody>
        );
      };

    return (
        <>
          <BodyContainer>{formFields()}</BodyContainer>         
        </>
      );
}
export default SignUp;