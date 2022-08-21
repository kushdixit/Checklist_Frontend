import React from "react";
import { useForm, Controller } from "react-hook-form";

import CheckboxInput from "components/FormElements/CheckboxInput";

import {BodyContainer, FormBody} from "styles/pages/CheckList";

const CheckList = () => {

  const {
    setValue,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    mode: "onSubmit",
    reValidateMode: "onBlur",
    // resolver: yupResolver(VALIDATION_SCHEMA),
    shouldFocusError: true,
  });

    const taskList = ['Task 1','Task 2','Task 3','Task 4','Task 5'];
    const subTaskList = ['SubTask 1','SubTask 2','SubTask 3','SubTask 4','SubTask 5'];
    const subList =(index)=> subTaskList.map((task,subIndex)=>{
        return <div key={subIndex}>
            <Controller
                name={"subTask"+index+''+subIndex}
                control={control}
                render={({ field }) => (
                    <CheckboxInput
                        className="checkBox"
                        label={task}
                        {...field}
                    />
                )}
            />
        </div>;
    });

    const lists = taskList.map((task,index)=>{
        return <div key={index}>
                    <Controller
                        name={"task"+index}
                        control={control}
                        render={({ field }) => (
                            <CheckboxInput
                                className="checkBox"
                                label={task}
                                {...field}
                            />
                        )}
                    />
                <div style={{'padding-left': '90px'}}>
                 {subList(index)}
                </div>
            </div>;
    });
    const formFields = () => {
        return (
            <FormBody>
                <div>
                    {lists}
                </div>
            </FormBody>
        );
    };

    return (
        <>
          <BodyContainer>{formFields()}</BodyContainer>         
        </>
    );
}
export default CheckList;