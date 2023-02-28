import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import {
  ChecklistTaskWrapper,
  TaskFormSubWrapper,
  TaskContainer,
  TaskSubContainer,
  Paragraph,
} from "styles/pages/EditChecklist";
import CheckboxInput from "components/FormElements/CheckboxInput";

export const ViewCard = ({ data }) => {
  const [isHovering, setIsHovering] = useState(false);

  const { handleSubmit, control } = useForm({
    mode: "onSubmit",
    reValidateMode: "onBlur",
    defaultValues: {
      rememberMe: data?.ischecked,
    },
  });

  return (
    <div>
      <ChecklistTaskWrapper isHeading={data?.isHeading}>
        <form
          className="task-form"
          onMouseOver={() => setIsHovering(true)}
          onMouseOut={() => setIsHovering(false)}
          onSubmit={handleSubmit()}
        >
          <TaskContainer>
            <TaskSubContainer
              isPriority={data?.isPriority}
              isHovering={isHovering}
              isSubtask={data?.isSubtask}
            >
              {!data?.isHeading && (
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
                          // outline: " #006db3 ",
                        }}
                        {...field}
                        onChange={(e) => {}}
                      />
                    )}
                  />
                </div>
              )}
              <TaskFormSubWrapper>
                <Paragraph
                  isHeading={data?.isHeading}
                  style={{ margin: "0px" }}
                  href="#"
                  placeholder="Enter task..."
                >
                  {data?.taskName || "         "}
                </Paragraph>
              </TaskFormSubWrapper>
            </TaskSubContainer>
          </TaskContainer>
        </form>
      </ChecklistTaskWrapper>
    </div>
  );
};
