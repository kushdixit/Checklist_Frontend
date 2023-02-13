import React, { useEffect, useState, useRef } from "react";
import TextInput from "components/FormElements/TextInput";
import { useForm, Controller } from "react-hook-form";
import {
  MainWrapper,
  Container,
  DataWrapper,
  Heading,
  DataInput,
  EmailWrapper,
  ResetText,
  ResetWrapper,
  IconInputField,
  MainTaskSectionForm,
  BlankText,
SectionOne,
TagSection,
SecondHeading,
ImageSection
} from "styles/pages/EditImage";
import { notification } from "antd";
import { forgotPassword } from "../redux/actions/auth";

import { useDispatch, useSelector } from "react-redux";
import {
  getChecklistBySubcategory,
  editSubTask,
  deleteSubTask,
  editSubTaskStatus,
  SubTaskDescription,
} from "redux/actions/task";
import CheckboxInput from "components/FormElements/CheckboxInput";
import FeaturedImageCard from "components/FeaturedImageCard";
import RadioButton from "components/FormElements/RadioButton";
import { store } from "redux/index";
import colorwheel from "assets/images/color-wheel.png";
import { Label } from "reactstrap";

const EditImageModal = ({
  notify,
  togglefunction,
  subIndex,
  task,
  checkListId,
  showEditable,
}) => {
  const forgotPass = async (data) => {
    const res = await store.dispatch(forgotPassword(data));
    notify(res);
    if (res === 204) togglefunction(false);
  };
  const [subTaskEdit, setSubTaskEdit] = useState(false);
  const [modal, setModal] = useState(false);
  const [addDescription, setAddDescription] = useState(false);
  const [isOpenSort, setIsOpenSort] = useState(false);
  const [api, contextHolder] = notification.useNotification();
  const wrapperRef = useRef();
  const taskEditable = useSelector((state) => state.editable?.isEditable);

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current?.contains(event?.target)) {
        setIsOpenSort(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);
  function toggleab(data) {
    setModal(data);
  }

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
    setValue("rememberMe", task?.ischecked);
  }, [task?.ischecked]);

  const taskdeleteHandler = (id) => {
    dispatch(deleteSubTask(id, checkListId));
  };

  const openNotification = (message) => {
    api.info({
      message,
    });
  };

  const updateSubTaskHandler = async (data) => {
    if (data?.updateSubTask) {
      const response = await dispatch(
        editSubTask(data?.updateSubTask, task.id)
      );
      if (response.status === 204) {
        dispatch(getChecklistBySubcategory(checkListId));
        // setValue("updateSubTask", "");
        setSubTaskEdit(false);
      } else openNotification(response.data.Message);
    }
  };

  const removeDescriptionHandler = async () => {
    const response = await dispatch(SubTaskDescription(task?.id, ""));
    if (response.status === 204) {
      dispatch(getChecklistBySubcategory(checkListId));
      openNotification("Deleted");
    } else openNotification(response?.data?.errors?.TaskDescription[0]);
  };

  return (
    <MainWrapper>
      <Container>
        <DataWrapper>
          <Heading>
          Add a featured image to your checklist
           
          </Heading>
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
          </TagSection>
          <SecondHeading>
          Remove featured Image
          </SecondHeading>
          <ImageSection>
          <FeaturedImageCard/>
          </ImageSection>
        </DataWrapper>
      </Container>
      <DataInput></DataInput>

    
        <BlankText></BlankText>
 
    
     
     
    </MainWrapper>
  );
};

export default EditImageModal;
