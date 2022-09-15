import React from "react";
import { Link } from "react-router-dom";
import { BodyContainer,FormWrapper} from "styles/pages/SignOut";

const SignUp = () => {
    const formFields = () => (
          <FormWrapper>             
            <Link to="/sign-In">SignUp</Link>  
          </FormWrapper>
        );
     

    return (
  
          <BodyContainer>{formFields()}</BodyContainer>         
       
      );
}
export default SignUp;