import React, { useEffect, useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
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
  StatusBucketCards,
} from "styles/pages/EditImage";
import { useDispatch, useSelector } from "react-redux";

const EditImageModal = () => {
  const dispatch = useDispatch();
  const { id: pathId } = useParams();

  console.log("pathId", pathId);

  const imageArray = useSelector((state) => state?.getImages?.images);

  const { setValue, handleSubmit, control, reset, getValues } = useForm({
    mode: "onSubmit",
    reValidateMode: "onBlur",
    shouldFocusError: true,
  });

  useEffect(() => {
    console.log();
    if (imageArray && imageArray?.length === 0) ImageHanlder();
  }, []);

  const ImageHanlder = () => dispatch(GetImages());

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
            <StatusBucketCards>
              {imageArray?.map((item) => (
                <img
                  src={`http://192.168.11.66:9001/ChecklistImages/${item?.imageName}`}
                  alt="img"
                  onClick={() => console.log(item?.id)}
                />
              ))}
            </StatusBucketCards>
          </ImageSection>
        </DataWrapper>
      </Container>
      <DataInput></DataInput>

      <BlankText></BlankText>
    </MainWrapper>
  );
};

export default EditImageModal;
