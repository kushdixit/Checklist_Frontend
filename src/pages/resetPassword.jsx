import TextInput from "components/FormElements/TextInput";
import React from "react";
import { useForm} from "react-hook-form";

import {
  MainWrapper,
  Container,
  ResetWrapper,
  PasswordInput,
  ResetButton,
  ResetText,
  ResetHeading,
} from "styles/pages/ResetPassword";

const ResetPassword = () => {

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({mode: 'onChange'});

  const Resethandler = (data) => {
    console.log("data====", data);
  };
 

  return(
    <form onSubmit={handleSubmit(Resethandler)}>
    <MainWrapper>
      
        <Container>
          <ResetHeading>Reset Account Password</ResetHeading>
          <ResetWrapper>
          <PasswordInput>
            <TextInput
              name="password"
              className="password"
              type="text"
              placeholder="Password"
              control={control}
            />
           
                    {errors?.password && errors?.password?.message}
                 
             </PasswordInput>
             <PasswordInput>
            <TextInput
              name="confirmPassword "
              className="password"
              type="text"
              placeholder="Confirm Password"
              control={control}
            
            />
              </PasswordInput>
          </ResetWrapper>
          <ResetButton>
            <ResetText>Reset Password</ResetText>
          </ResetButton>
        </Container>
    
    </MainWrapper>
    </form>
  );
};

export default ResetPassword;
