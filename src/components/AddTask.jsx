import React, { useEffect, useState, useRef } from "react";
import { useForm } from "react-hook-form";
import {
  ChecklistTaskWrapper,
  TaskFormSubWrapper,
} from "styles/pages/EditChecklist";
import TextArea from "components/FormElements/TextArea";
import {
  ShortBy,
  SortWrapper,
  ModalContainer,
  SortTextDiv,
} from "styles/components/ModalContainer";
import Plus from "assets/SVG/Plus";
import Delete from "assets/SVG/Delete";

const AddTask = () => {
  const [isOpenSort, setIsOpenSort] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const [modal, setModal] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
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
  function toggleab(data) {
    setModal(data);
  }
  const { handleSubmit, control } = useForm({
    mode: "onSubmit",
    reValidateMode: "onBlur",
  });
  const DescriptionHandler = async (data) => {
    console.log("data", data);
  };
  return (
    <ChecklistTaskWrapper
      onMouseOver={() => setIsHovering(true)}
      onMouseOut={() => setIsHovering(false)}
    >
      <form
        style={{
          display: "flex",
          padding: "0px 60px !important",
        }}
        onSubmit={handleSubmit(DescriptionHandler)}
      >
        <div style={{ width: "100%" }}>
          <div style={{ display: "flex", gap: "10px" }}>
            <ModalContainer
              ref={wrapperRef}
              onClick={() => {
                setIsOpenSort(!isOpenSort);
              }}
            >
              <ShortBy>
                <Plus onClick={() => toggleab(!modal)} />
                {isOpenSort && (
                  <SortWrapper>
                    <SortTextDiv>
                      <Delete /> Delete
                    </SortTextDiv>
                  </SortWrapper>
                )}
              </ShortBy>
            </ModalContainer>
            <TaskFormSubWrapper>
              <TextArea
                type="task"
                style={{
                  fontWeight: "400",
                  fontSize: "16px",
                  lineHeight: "27px",
                  margin: "5px 0px 0px 0px",
                  width: "90%",
                  border: "none",
                  fontFamily: "inherit",
                  resize: "none",
                  background: "inherit",
                }}
                name="checklist"
                placeholder={""}
                defaultValue={""}
                control={control}
                onFocus={() => setShowButtons(!showButtons)}
                onBlur={() => setShowButtons(!showButtons)}
              />
              {showButtons && (
                <div
                  style={{ display: "flex", gap: "10px", marginBottom: "10px" }}
                >
                  <button
                    style={{
                      backgroundColor: "#007ccb",
                      color: "white",
                      padding: "4px 12px",
                      marginTop: "3px",
                      borderRadius: "3px",
                      border: "none",
                      fontSize: "14px",
                    }}
                  >
                    <div>Save</div>
                  </button>
                  <button
                    style={{
                      backgroundColor: "#f5f5f5",
                      color: "#000",
                      padding: "4px 12px",
                      marginTop: "3px",
                      borderRadius: "3px",
                      border: " 1px solid #ddd",
                      fontSize: "14px",
                    }}
                  >
                    <div>Cancel</div>
                  </button>
                </div>
              )}
            </TaskFormSubWrapper>
          </div>
        </div>
      </form>
    </ChecklistTaskWrapper>
  );
};

export default AddTask;
