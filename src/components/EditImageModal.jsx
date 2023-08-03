import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import TextInput from "components/FormElements/TextInput";
import {
  GetImages,
  UpdateChecklistImage,
  getChecklistBySubcategory,
} from "redux/actions/task";
import {
  MainWrapper,
  Container,
  DataWrapper,
  Heading,
  EmailWrapper,
  IconInputField,
  SectionOne,
  TagSection,
  SecondHeading,
  ImageSection,
  StatusBucketCards,
} from "styles/pages/EditImage";
import { useDispatch, useSelector } from "react-redux";

const EditImageModal = ({ togglefunction }) => {
  const dispatch = useDispatch();
  const { id: pathId } = useParams();

  const imageArray = useSelector((state) => state?.getImages?.images);

  const { control } = useForm({
    mode: "onSubmit",
    reValidateMode: "onBlur",
    shouldFocusError: true,
  });

  useEffect(() => {
    if (imageArray && imageArray?.length === 0) ImageHanlder();
  }, []);

  const ImageHanlder = () => dispatch(GetImages());

  const ImageUpdateHandler = async (id) => {
    const res = await dispatch(UpdateChecklistImage(pathId, id));
    if (res?.status === 200) {
      dispatch(getChecklistBySubcategory(pathId));
      togglefunction(false);
    }
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
          <SecondHeading onClick={() => ImageUpdateHandler(0)}>
            Remove featured Image
          </SecondHeading>
          <ImageSection>
            <StatusBucketCards>
              {imageArray?.map((item) => {
                const imagePath = item?.imageName.split(".")[0] + ".jpg";
                return (
                  <img
                    src={`http://112.196.2.202:8080/ChecklistImages/${imagePath}`}
                    alt="img"
                    onClick={() => ImageUpdateHandler(item?.id)}
                  />
                );
              })}
            </StatusBucketCards>
          </ImageSection>
        </DataWrapper>
      </Container>
    </MainWrapper>
  );
};

export default EditImageModal;
