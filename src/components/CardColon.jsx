import React, { useEffect, useState, useRef } from "react";
import {
  ShortBy,
  SortWrapper,
  ShortContainer,
  SortTextDiv,
} from "styles/pages/Task";
import { ColonImage } from "styles/components/Card";
import Colon from "assets/SVG/Colon";
import Completed from "assets/SVG/Completed";
import Edit from "assets/SVG/Edit";
import Delete from "assets/SVG/Delete";
import Move from "assets/SVG/move";
import Reset from "assets/SVG/Reset";
import Copy from "assets/SVG/Copy";
import ShareNew from "assets/SVG/ShareNew";
import Favourite from "assets/SVG/Favourite";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SET_IS_EDITABLE } from "redux/actions/action_types";
import {
  ChecklistCompleted,
  CopyChecklist,
  deleteChecklist,
  MoveChecklist,
} from "redux/actions/checklist/index";
import { getAllTemplateByEmail } from "redux/actions/template";
import { getChecklistBySubcategory } from "redux/actions/task/index";
import { notification } from "antd";
import AlertModal from "components/AlertModal";

const CardColon = ({ item, cardType, type, templateName, itemId }) => {
  const [modal, setModal] = useState(false);
  const [newmodal, setNewModal] = useState(false);
  const [isOpenSort, setIsOpenSort] = useState(false);
  const wrapperRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userEmail = useSelector((state) => state.auth?.userData?.email);
  const [api, contextHolder] = notification.useNotification();

  function toggleabc(data) {
    setNewModal(data);
  }
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

  const openNotification = (message) => {
    api.info({
      message,
    });
  };
  function toggleab(data) {
    setModal(data);
  }

  const dataRefetch = (id) => {
    dispatch(getChecklistBySubcategory(id));
    setIsOpenSort(false);
  };

  const statusHandler = async (id, status) => {
    const res = await dispatch(ChecklistCompleted(id, status));
    refetchtemplate(res);
    if (res?.error == false) {
      dataRefetch(id);
      openNotification(status ? "Completed" : "Reset");
    } else openNotification(res?.message || "Error");
  };

  const deleteHanlder = async (id) => {
    const res = await dispatch(deleteChecklist(id));
    console.log(res);
    if (res.status === 204) {
      dispatch(getAllTemplateByEmail(userEmail));
      dataRefetch(id);
      openNotification("Deleted");
    } else openNotification(res?.message || "Error");
  };

  const refetchtemplate = (res) =>
    res?.error === false && dispatch(getAllTemplateByEmail(userEmail));

  return (
    <ColonImage type={type}>
      {contextHolder}
      <ShortContainer
        onClick={() => setIsOpenSort(!isOpenSort)}
        ref={wrapperRef}
      >
        <ShortBy>
          <Colon onClick={() => toggleab(!modal)} />
          {type == "dashboard" && (
            <>
              {isOpenSort && (
                <SortWrapper>
                  <SortTextDiv
                    onClick={() => {
                      dispatch({ type: SET_IS_EDITABLE, payload: false });
                      navigate(`/check-list/${itemId}`, {
                        state: { showEditable: true, cardType },
                      });
                    }}
                  >
                    <Edit />
                    View CheckList
                  </SortTextDiv>
                  {cardType === "user" && !item?.ischecked && (
                    <SortTextDiv onClick={() => statusHandler(itemId, true)}>
                      <Completed />
                      Mark as Completed
                    </SortTextDiv>
                  )}
                  {cardType === "user" && item?.ischecked && (
                    <SortTextDiv onClick={() => statusHandler(itemId, false)}>
                      <Reset />
                      Reset
                    </SortTextDiv>
                  )}
                  <SortTextDiv
                    onClick={async () => {
                      const res = await dispatch(
                        CopyChecklist(itemId, userEmail)
                      );
                      refetchtemplate(res);
                    }}
                  >
                    <Copy />
                    {cardType === "user" ? "Copy" : "Use / Import"}
                  </SortTextDiv>
                  <SortTextDiv>
                    <ShareNew />
                    Share
                  </SortTextDiv>
                  {cardType === "user" && (
                    <SortTextDiv onClick={() => deleteHanlder(itemId)}>
                      <Delete /> Delete CheckList
                    </SortTextDiv>
                  )}
                  {item?.createdBy === userEmail && (
                    <SortTextDiv onClick={() => toggleabc(true)}>
                      <Move />
                      Move
                    </SortTextDiv>
                  )}
                  <SortTextDiv>
                    <Favourite />
                    favourite
                  </SortTextDiv>
                </SortWrapper>
              )}
            </>
          )}
          {type == "checklist" && (
            <>
              {isOpenSort && (
                <SortWrapper>
                  {cardType === "user" && !item?.ischecked && (
                    <SortTextDiv onClick={() => statusHandler(itemId, true)}>
                      <Completed />
                      Mark as Completed
                    </SortTextDiv>
                  )}
                  {cardType === "user" && item?.ischecked && (
                    <SortTextDiv onClick={() => statusHandler(itemId, false)}>
                      <Reset />
                      Reset
                    </SortTextDiv>
                  )}
                  <SortTextDiv
                    onClick={async () => {
                      const res = await dispatch(
                        CopyChecklist(itemId, userEmail)
                      );
                      refetchtemplate(res);
                      !res?.error &&
                        navigate(`/check-list/${res?.data?.data}`, {
                          state: { showEditable: true, cardType },
                        });
                    }}
                  >
                    <Copy />
                    {cardType === "user" ? "Copy" : "Use / Import"}
                  </SortTextDiv>
                  <SortTextDiv>
                    <ShareNew />
                    Share
                  </SortTextDiv>
                </SortWrapper>
              )}
            </>
          )}
        </ShortBy>
      </ShortContainer>
      <AlertModal
        modalType="move"
        isOpen={newmodal}
        togglefunction={toggleabc}
        notify={() => console.log("heyy")}
        checklistId={itemId}
        templateName={templateName}
      />
    </ColonImage>
  );
};

export default CardColon;
