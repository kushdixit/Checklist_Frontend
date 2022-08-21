import React from "react";
import { useForm, Controller } from "react-hook-form";
import TextInput from "components/FormElements/TextInput";
import CheckboxInput from "components/FormElements/CheckboxInput";
import { useNavigate } from "react-router-dom";
import EmailIcon from "assets/SVG/EmailIcon";
import LockIcon from "assets/SVG/LockIcon";
import Button from "components/Button";
import {  
  BodyContainer,
  RegistrationContainer,
  FormContainer,
  IconInputField,
  FormBody,
  Footer,
  RememberSection,
  Heading,} from "styles/pages/AccountForm";

const SignIn = () => {
  const navigate = useNavigate();

  const {
    setValue,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    mode: "onSubmit",
    reValidateMode: "onBlur",
    // resolver: yupResolver(VALIDATION_SCHEMA),
    shouldFocusError: true,
  });
  const formData = async (data) => {
    navigate('/check-list')
    // localStorage.clear();
    // let dataObj = {
    //   email: data.email,
    //   password: data.password,
    // };
    // console.log("dataObj==",dataObj)
    // const response = await dispatch(auth(dataObj));
    // if (!response.error) {
    //   if (data.rememberMe === true) {
    //     localStorage.email = data.email;
    //     localStorage.password = data.password;
    //     localStorage.checkbox = data.rememberMe;
    //   }
    //   localStorage.setItem("userInfo", response?.data?.token);
    //   router.push(ROUTER.DASHBOARD.LINK);
    // } else {
    //   setModalContent(response?.data?.response?.data?.message);
    //   setModalLink("");
    //   toggleModal();
    // }
  };


    const formFields = () => {
        return (
          <FormBody>
            <form onSubmit={handleSubmit(formData)}>
              {/* <Link to="/sign-out">SignIn</Link> */}
              <RegistrationContainer>
                <FormContainer>
                  <Heading>Log In</Heading>
                  <IconInputField>
                    <TextInput
                      name="email"
                      type="text"
                      placeholder="Email"
                      control={control}
                    /> 
                    {
                      <h3 className="error-message">
                        {errors.email && errors.email.message}
                      </h3>
                    }
                    <EmailIcon className="emailIcon" />
                  </IconInputField>

                  <IconInputField>
                    <TextInput
                      name="password"
                      type="password"
                      placeholder="Password"
                      control={control}
                    />
                    {
                      <h3 className="error-message">
                        {errors?.password && errors?.password?.message}
                      </h3>
                    }
                    <LockIcon className="startIcon" />
                  </IconInputField>

                  <RememberSection>
                    <Controller
                      name="rememberMe"
                      control={control}
                      render={({ field }) => (
                        <CheckboxInput
                          className="checkBox"
                          label="Remember Me"
                          {...field}
                        />
                      )}
                    />
                    <h5
                      className="forgotPassword"
                      // onClick={() => router.push(ROUTER.FORGOT_PASSWORD.LINK)}
                    >
                      Forgot Password?
                    </h5>
                  </RememberSection>
                  <Footer>
                    <Button>Log In</Button>
                  </Footer>
                </FormContainer>
              </RegistrationContainer>
            </form>
              
          </FormBody>
        );
      };

    return (
        <>
          <BodyContainer>{formFields()}</BodyContainer>         
        </>
      );
}
export default SignIn;