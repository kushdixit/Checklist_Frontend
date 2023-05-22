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
} from "styles/pages/FontColors";
import { notification } from "antd";
import { useDispatch } from "react-redux";
import {
  getChecklistBySubcategory,
  editSubTask,
  editSubTaskStatus,
} from "redux/actions/task";
import CheckboxInput from "components/FormElements/CheckboxInput";
import RadioButton from "components/FormElements/RadioButton";
import colorwheel from "assets/images/color-wheel.png";

const FontColorsModal = ({ task, checkListId, showEditable }) => {
  const [subTaskEdit, setSubTaskEdit] = useState(false);
  const [isOpenSort, setIsOpenSort] = useState(false);
  const [api] = notification.useNotification();
  const wrapperRef = useRef();

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

  const dispatch = useDispatch();
  const { setValue, handleSubmit, control, reset } = useForm({
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
        setSubTaskEdit(false);
      } else openNotification(response.data.Message);
    }
  };

  return (
    <MainWrapper>
      <Container>
        <DataWrapper>
          <Heading>
            <img src={colorwheel} alt="colorwheel" />
            <h3>Personalize</h3>
          </Heading>
          <EmailWrapper></EmailWrapper>
        </DataWrapper>
      </Container>
      <DataInput>Sign up for personalize options</DataInput>
      <RadioButton />
      <ResetWrapper>
        <BlankText>Blank squares</BlankText>
      </ResetWrapper>
      <h5>Font Family</h5>
      <ResetWrapper>
        <ResetText>Lora Default</ResetText>
      </ResetWrapper>
      <h5> Checkbox border Color</h5>
      <MainTaskSectionForm>
        <form
          onSubmit={handleSubmit(updateSubTaskHandler)}
          style={{ display: "flex" }}
        >
          <div style={{ display: "flex", width: "100%" }}>
            {!subTaskEdit && (
              <Controller
                name="rememberMe"
                control={control}
                style={{ padding: "5px 5px 0 0" }}
                render={({ field }) => (
                  <CheckboxInput
                    className="checkBox"
                    {...field}
                    onChange={(e) => {
                      showEditable &&
                        reset({
                          rememberMe: e,
                        });
                      showEditable &&
                        dispatch(
                          editSubTaskStatus(
                            task?.id,
                            checkListId,
                            e === true ? true : false
                          )
                        );
                    }}
                  />
                )}
              />
            )}
            <IconInputField>
              <TextInput
                defaultValue={task?.subTaskName.replace(
                  /^./,
                  task?.subTaskName[0].toUpperCase()
                )}
                name="updateSubTask"
                type="text"
                placeholder={task?.subTaskName}
                control={control}
                handlekeyPress={(e) =>
                  e.key === "Enter" && updateSubTaskHandler()
                }
              />
            </IconInputField>
          </div>
        </form>
      </MainTaskSectionForm>
      <h5> Checkbox background Color</h5>
      <MainTaskSectionForm>
        <form
          onSubmit={handleSubmit(updateSubTaskHandler)}
          style={{ display: "flex" }}
        >
          <div style={{ display: "flex", width: "100%" }}>
            {!subTaskEdit && (
              <Controller
                name="rememberMe"
                control={control}
                style={{ padding: "5px 5px 0 0" }}
                render={({ field }) => (
                  <CheckboxInput
                    className="checkBox"
                    {...field}
                    onChange={(e) => {
                      showEditable &&
                        reset({
                          rememberMe: e,
                        });
                      showEditable &&
                        dispatch(
                          editSubTaskStatus(
                            task?.id,
                            checkListId,
                            e === true ? true : false
                          )
                        );
                    }}
                  />
                )}
              />
            )}
            <IconInputField>
              <TextInput
                defaultValue={task?.subTaskName.replace(
                  /^./,
                  task?.subTaskName[0].toUpperCase()
                )}
                name="updateSubTask"
                type="text"
                placeholder={task?.subTaskName}
                control={control}
                handlekeyPress={(e) =>
                  e.key === "Enter" && updateSubTaskHandler()
                }
              />
            </IconInputField>
          </div>
        </form>
      </MainTaskSectionForm>
      <h5> Checkbox/Number Color</h5>
      <MainTaskSectionForm>
        <form
          onSubmit={handleSubmit(updateSubTaskHandler)}
          style={{ display: "flex" }}
        >
          <div style={{ display: "flex", width: "100%" }}>
            {!subTaskEdit && (
              <Controller
                name="rememberMe"
                control={control}
                style={{ padding: "5px 5px 0 0" }}
                render={({ field }) => (
                  <CheckboxInput
                    className="checkBox"
                    {...field}
                    onChange={(e) => {
                      showEditable &&
                        reset({
                          rememberMe: e,
                        });
                      showEditable &&
                        dispatch(
                          editSubTaskStatus(
                            task?.id,
                            checkListId,
                            e === true ? true : false
                          )
                        );
                    }}
                  />
                )}
              />
            )}
            <IconInputField>
              <TextInput
                defaultValue={task?.subTaskName.replace(
                  /^./,
                  task?.subTaskName[0].toUpperCase()
                )}
                name="updateSubTask"
                type="text"
                placeholder={task?.subTaskName}
                control={control}
                handlekeyPress={(e) =>
                  e.key === "Enter" && updateSubTaskHandler()
                }
              />
            </IconInputField>
          </div>
        </form>
      </MainTaskSectionForm>
      <h5> Task Borders Wait</h5>
      <ResetWrapper>
        <ResetText>No Line Separator</ResetText>
      </ResetWrapper>
    </MainWrapper>
  );
};

export default FontColorsModal;
