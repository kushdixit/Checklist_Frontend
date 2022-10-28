import React from "react";
import TextInput from "components/FormElements/TextInput";
import { useForm } from "react-hook-form";
import {
  MainWrapper,
  Container,
  DataWrapper,
  Heading,
  DataInput,
  EmailWrapper,
  ResetText,
  ResetWrapper,
} from "styles/pages/ForgetPassword";
import { forgotPassword } from "../redux/actions/auth";
import { store } from "redux/index";
import Edit from "assets/images/edit.png";
import Remove from "assets/images/remove.png";
import RightArrow from "assets/images/rightarrow.png";
const EditTask = ({ notifynew, togglefunctionnew }) => {
  const { handleSubmit, control } = useForm({ mode: "onChange" });
  const forgotPass = async (data) => {
    const res = await store.dispatch(forgotPassword(data));
    if (res === 204) {
      notifynew();
      togglefunctionnew(false);
    }
  };

  return (
    <MainWrapper>
      <Container>
        <DataWrapper onSubmit={handleSubmit(forgotPass)}>
          <EmailWrapper>
            <DataInput>
            <img src={Edit} alt="edit" />Edit Task
            </DataInput>
            <DataInput>
            <img src={Remove} alt="remove" />Removet Task
            </DataInput>
            <DataInput>
            <img src={RightArrow} alt="rightarrow" />Add Sub Task
            </DataInput>
            <ResetWrapper>
              <ResetText>RESET PASSWORD</ResetText>
            </ResetWrapper>
          </EmailWrapper>
        </DataWrapper>
      </Container>
    </MainWrapper>
  );
};

export default EditTask;
