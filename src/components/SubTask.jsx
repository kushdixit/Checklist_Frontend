import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import CheckboxInput from "components/FormElements/CheckboxInput";
import TextInput from "components/FormElements/TextInput";
import Button from "components/Button";
import { AddBtn } from "styles/pages/CheckList";
import { useDispatch } from "react-redux";
import {
  addSubTaskApi,
  getChecklistBySubcategory,
} from "redux/actions/checklist";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
  SubSection,
} from "styles/pages/Task";

const SubTask = ({ id, setAddSubTask, addSubTask }) => {
  const dispatch = useDispatch();
  const { setValue, handleSubmit, control } = useForm({
    mode: "onSubmit",
    reValidateMode: "onBlur",
    shouldFocusError: true,
  });
  const onChange = (e) => {
    setValue("subTask", e.target.value);
  };

  const subTaskformData = async (data) => {
    console.log("dsgffds", data);
    const response = await dispatch(addSubTaskApi(data?.subTask, id));
    if (response.status == 201) {
      dispatch(getChecklistBySubcategory(1));
      setValue("subTask", "");
      setAddSubTask(!addSubTask);
    } else {
      toast(response.data.Message);
    }
  };

  return (
    <div>
      <ToastContainer />
      <form
        style={{ width: "100%", display: "flex" }}
        onSubmit={handleSubmit(subTaskformData)}
      >
        <IconInputField>
          <TextInput
            name="subTask"
            type="text"
            placeholder="Add Sub Task"
            control={control}
          />
        </IconInputField>
        <div className="submitBtn">
          <Button>Save</Button>
        </div>
      </form>
      {/* <form onSubmit={handleSubmit(subTaskformData)}>
        <div>
          <Controller
            name="subTaskCheckBox"
            control={control}
            render={({ field }) => (
              <CheckboxInput className="checkBox" {...field} />
            )}
          />
        </div>
        <TextInput
          name="subTask"
          control={control}
          type="text"
          placeholder="Enter Sub Task name"
          onChange={onChange}
        />
        <div className="submitBtn">
          <Button>Submit</Button>
        </div>
      </form> */}
    </div>
  );
};

export default SubTask;
