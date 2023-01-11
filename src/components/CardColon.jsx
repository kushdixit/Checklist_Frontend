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
} from "redux/actions/checklist/index";
import { getAllTemplateByEmail } from "redux/actions/template";
import { getChecklistBySubcategory } from "redux/actions/task/index";
import { notification } from "antd";
import AlertModal from "components/AlertModal";
const CardColon = ({ item, cardType, type }) => {
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

  const statusHandler = async (id, status) => {
    const res = await dispatch(ChecklistCompleted(id, status));
    refetchtemplate(res);
    if (res.error == false) {
      dispatch(getChecklistBySubcategory(id));
      setIsOpenSort(false);
      openNotification(status ? "Completed" : "Reset");
    } else openNotification(res?.data);
  };

  const refetchtemplate = (res) =>
    res?.error === false && dispatch(getAllTemplateByEmail(userEmail));

  return (
    <ColonImage type={type}>
      {contextHolder}
      <ShortContainer onClick={() => setIsOpenSort(true)}>
        <ShortBy>
          <Colon onClick={() => toggleab(!modal)} />
          {type == "dashboard" && (
            <>
              {isOpenSort && (
                <SortWrapper ref={wrapperRef}>
                  <SortTextDiv
                    onClick={() => {
                      dispatch({ type: SET_IS_EDITABLE, payload: false });
                      navigate(`/check-list/${item.id}`, {
                        state: { showEditable: true, cardType },
                      });
                    }}
                  >
                    <Edit />
                    View CheckList
                  </SortTextDiv>
                  {cardType === "user" && !item?.ischecked && (
                    <SortTextDiv onClick={() => statusHandler(item.id, true)}>
                      <Completed />
                      Mark as Completed
                    </SortTextDiv>
                  )}
                  {cardType === "user" && item?.ischecked && (
                    <SortTextDiv onClick={() => statusHandler(item.id, false)}>
                      <Reset />
                      Reset
                    </SortTextDiv>
                  )}
                  <SortTextDiv
                    onClick={async () => {
                      const res = await dispatch(
                        CopyChecklist(item.id, userEmail)
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
                    <SortTextDiv
                      onClick={async () => {
                        await dispatch(deleteChecklist(item.id));
                      }}
                    >
                      <Delete /> Delete CheckList
                    </SortTextDiv>
                  )}
                  <SortTextDiv>
                    <AlertModal isOpen={newmodal} togglefunction={toggleabc} />
                    <Move onClick={() => toggleabc(!newmodal)} />
                    Move
                  </SortTextDiv>
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
                <SortWrapper ref={wrapperRef}>
                  {cardType === "user" && !item?.ischecked && (
                    <SortTextDiv onClick={() => statusHandler(item.id, true)}>
                      <Completed />
                      Mark as Completed
                    </SortTextDiv>
                  )}
                  {cardType === "user" && item?.ischecked && (
                    <SortTextDiv onClick={() => statusHandler(item.id, false)}>
                      <Reset />
                      Reset
                    </SortTextDiv>
                  )}
                  <SortTextDiv
                    onClick={async () => {
                      const res = await dispatch(
                        CopyChecklist(item.id, userEmail)
                      );
                      refetchtemplate(res);
                      !res?.error && navigate("/dashboard");
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
    </ColonImage>
  );
};

export default CardColon;
