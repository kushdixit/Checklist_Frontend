import React, { useEffect, useState, useRef } from "react";
import { useForm } from "react-hook-form";
import TextInput from "components/FormElements/TextInput";
import { GetImages } from "redux/actions/task";
import {
  MainWrapper,
  Container,
  DataWrapper,
  Heading,
  DataInput,
  EmailWrapper,
  IconInputField,
  BlankText,
  SectionOne,
  TagSection,
  SecondHeading,
  ImageSection,
} from "styles/pages/EditImage";
import { useDispatch, useSelector } from "react-redux";
import FeaturedImageCard from "components/FeaturedImageCard";

const EditImageModal = ({ task }) => {
  const dispatch = useDispatch();
  const { setValue, handleSubmit, control, reset, getValues } = useForm({
    mode: "onSubmit",
    reValidateMode: "onBlur",
    shouldFocusError: true,
    defaultValues: {
      rememberMe: task?.ischecked,
    },
  });

  useEffect(() => {
    ImageHanlder();
  }, [task?.ischecked]);

  const ImageHanlder = async () => {
    const res = await dispatch(GetImages());
    console.log("res", res);
  };

  return (
    <MainWrapper>
      <Container>
        <DataWrapper>
          <Heading>Add a featured image to your checklist</Heading>
          <TagSection>
            <EmailWrapper>
              <SectionOne>Alt Tag</SectionOne>
              <IconInputField>
                <TextInput
                  name="email"
                  className="emailAddInput"
                  type="email"
                  placeholder="Digital Marketing Assistant Daily Checklist"
                  control={control}
                />
              </IconInputField>
            </EmailWrapper>
            <EmailWrapper>
              <SectionOne>Caption</SectionOne>
              <IconInputField>
                <TextInput
                  name="email"
                  className="emailAddInput"
                  type="email"
                  placeholder="Digital Marketing Assistant Daily Checklist"
                  control={control}
                />
              </IconInputField>
            </EmailWrapper>
          </TagSection>
          <SecondHeading>Remove featured Image</SecondHeading>
          <ImageSection>
            <FeaturedImageCard />
          </ImageSection>
        </DataWrapper>
      </Container>
      <DataInput></DataInput>

      <BlankText></BlankText>
    </MainWrapper>
  );
};

export default EditImageModal;
