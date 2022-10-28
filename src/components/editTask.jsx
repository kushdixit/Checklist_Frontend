import React from "react";
import TextInput from "components/FormElements/TextInput";
import { useForm } from "react-hook-form";
import {
    MainWrapperNew,

  
  DataInputNew
} from "styles/pages/ForgetPassword";
import { forgotPassword } from "../redux/actions/auth";
import { store } from "redux/index";


import RightArrow from "assets/images/rightarrow.png";
import Edit from "assets/SVG/Edit";
import Delete from "assets/SVG/Delete";
import Arrow from "assets/SVG/Arrow";
const EditTask = ({ notifynew, togglefunctionnew }) => {
    const customStyles = {
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          padding: "15px 20px",
          width: "20vw",
          height: "75vh",
          overflowY: "hidden",
        },
      };
  const { handleSubmit, control } = useForm({ mode: "onChange" });
  const forgotPass = async (data) => {
    const res = await store.dispatch(forgotPassword(data));
    if (res === 204) {
      notifynew();
      togglefunctionnew(false);
    }
  };

  return (
    <MainWrapperNew>
      
            <DataInputNew>
          <Edit />Edit Task
            </DataInputNew>
            <DataInputNew>
            <Delete />Remove Task
            </DataInputNew>
            <DataInputNew>
            <Arrow />Add Sub Task
            </DataInputNew>
           
      
    </MainWrapperNew>
  );
};

export default EditTask;
