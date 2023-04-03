import React from "react";
import { useDispatch } from "react-redux";
import { getChecklistBySubcategory, addNewTask } from "redux/actions/task";
import { useForm, Controller, useWatch } from "react-hook-form";
import {
  ChecklistTaskWrapper,
  TaskFormSubWrapper,
  TaskContainer,
  AddTaskSubContainer,
} from "styles/pages/EditChecklist";
import CheckboxInput from "components/FormElements/CheckboxInput";
import TextInput from "components/FormElements/TextInput";

const AddTask = ({ pathId }) => {
  const dispatch = useDispatch();

  const { handleSubmit, control, reset } = useForm({
    mode: "onSubmit",
    reValidateMode: "onBlur",
    defaultValues: {
      rememberMe: false,
    },
  });

  const watchData = useWatch({ control });

  const AddTaskHandler = async (id) => {
    let data = {
      taskName: watchData?.checklist,
      checklistMasterId: pathId,
    };
    const response = await dispatch(addNewTask(data, pathId));
    if (response) {
      reset({ checklist: "" });
      dispatch(getChecklistBySubcategory(pathId));
    }
  };
  return (
    <ChecklistTaskWrapper>
      <form className="task-form" onSubmit={handleSubmit(AddTaskHandler)}>
        <TaskContainer>
          <AddTaskSubContainer>
            <div style={{ paddingTop: "10px", paddingLeft: "5px" }}>
              <Controller
                name="rememberMe"
                style={{ paddingTop: "10px" }}
                control={control}
                render={({ field }) => (
                  <CheckboxInput
                    className="checkBox"
                    style={{
                      paddingTop: "10px",
                      width: "23px",
                      height: "23px",
                      margin: "0px",
                      border: "1px solid #999 !important",
                      borderRadius: "50% !important",
                    }}
                    {...field}
                    onChange={(e) => {
                      // uncomment to enable checkbox
                      // reset({
                      //   rememberMe: e,
                      // });
                    }}
                  />
                )}
              />
            </div>
            <TaskFormSubWrapper>
              <TextInput
                type="task"
                style={{
                  fontWeight: "400",
                  fontSize: "16px",
                  lineHeight: "27px",
                  margin: "6px 0px 0px 0px",
                  width: "100%",
                  border: "none",
                  fontFamily: "inherit",
                  resize: "none",
                  background: "inherit",
                  borderBottom: "1px solid rgb(0, 124, 203)",
                  outline: "none",
                }}
                name="checklist"
                placeholder={``}
                defaultValue={""}
                control={control}
                handleKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.target.blur();
                    AddTaskHandler();
                  }
                }}
              />
            </TaskFormSubWrapper>
          </AddTaskSubContainer>
        </TaskContainer>
      </form>
    </ChecklistTaskWrapper>
  );
};

export default AddTask;
