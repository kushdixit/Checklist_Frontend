import React, { useState } from "react";
import TextInput from "components/FormElements/TextInput";
import { useForm } from "react-hook-form";
import {
  BodyWrapper,
  Title,
  Section,
  TitleSection,
  TaskSection,
  MainTaskSection,
  IconInputField,
  TaskIconImage,
  SubTaskSection,
} from "styles/pages/Task";
import Navbar from "../components/Navbar";
import AlertModal from "components/AlertModal";
import Colon from "assets/SVG/Colon";
import TaskIcon from "assets/SVG/TaskIcon";
import SubTaskIcon from "assets/SVG/SubTaskIcon";

const Task = () => {
  const [modal, setModal] = useState(false);

  function toggleab(data) {
    setModal(data);
  }
  const { control } = useForm({
    mode: "onSubmit",
    reValidateMode: "onBlur",
  });

  return (
    <Section>
      <BodyWrapper>
        <Navbar search={true} buttonType="Add" />
      </BodyWrapper>
      <Title>
        <TitleSection>
          <h3>Title</h3>
          <h4>Description</h4>
        </TitleSection>
      </Title>
      <TaskSection>
        <MainTaskSection>
          <TaskIconImage>
            <TaskIcon />
          </TaskIconImage>
          <IconInputField>
            <TextInput name="" type="text" placeholder="" control={control} />
          </IconInputField>
          <Colon onClick={() => toggleab(true)} />
        </MainTaskSection>
        <AlertModal isOpen={modal} togglefunction={toggleab} modalType="task" />
        <SubTaskSection>
          <SubTaskIcon />
        </SubTaskSection>
      </TaskSection>
    </Section>
  );
};
export default Task;
