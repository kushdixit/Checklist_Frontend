
import React from "react";
import TextInput from "components/FormElements/TextInput";
import { useForm, Controller } from "react-hook-form";
import '../app/App.css'

import {
  ProfileWrapper,
  Container,
  TextHeading,
  DataWrapper,
  SubmitButton,
  ConditionWrapper,RembemberSection,TermsWrapper
} from "styles/pages/Profile";

const Profile = () => {

    const {
        control,
      } = useForm({
        mode: "onSubmit",
        reValidateMode: "onBlur",
        shouldFocusError: true,
      });

  return (
    <ProfileWrapper>
      <Container>
        <TextHeading>Profile</TextHeading>
        <DataWrapper>
        <TextInput
                  name="first name"
                  type="text"
                  placeholder="First Name"
                  control={control}
                />
                 <TextInput
                  name="last name"
                  type="text"
                  placeholder="Last Name"
                  control={control}
                />
                <div>
                 <TextInput
                  name="role caption"
                  type="text"
                  placeholder="Role Caption"
                  control={control}
                />
                <ConditionWrapper>
                    <RembemberSection></RembemberSection>
                    <TermsWrapper>T&C</TermsWrapper>
                </ConditionWrapper>
                </div>
                <SubmitButton type="submit">Submit</SubmitButton>
        </DataWrapper>
       
      </Container>
    </ProfileWrapper>
  );
};

export default Profile;

