import React, { useEffect, useState, useRef } from "react";
import {
  ShortBy,
  SortWrapper,
  ShortContainer,
  SortTextDiv,
  Complete
} from "styles/pages/Task";
import { ColonImage } from "styles/components/Card";
import Colon from "assets/SVG/Colon";
import Completed from "assets/SVG/Completed";
import Edit from "assets/SVG/Edit";
import Delete from "assets/SVG/Delete";
import Reset from "assets/SVG/Reset";
import Copy from "assets/SVG/Copy";
import ShareNew from "assets/SVG/ShareNew";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SET_IS_EDITABLE } from "redux/actions/action_types";

const CardColon = ({ item, cardType }) => {
  const [modal, setModal] = useState(false);
  const [isOpenSort, setIsOpenSort] = useState(false);
  const wrapperRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  return (
    <ColonImage>
      <ShortContainer onClick={() => setIsOpenSort(true)}>
        <ShortBy>
          <Colon onClick={() => toggleab(!modal)} />
          {isOpenSort && cardType === "user" && (
            <SortWrapper ref={wrapperRef}>
              <SortTextDiv
                onClick={() => {
                  dispatch({ type: SET_IS_EDITABLE, payload: false });
                  navigate("/check-list", {
                    state: { id: item.id, showEditable: true },
                  });
                }}
              >
                <Edit />
                View CheckList
              </SortTextDiv>
              <SortTextDiv>
               
                  <Completed />
                
                  Mark as Completed</SortTextDiv>
              <SortTextDiv><Reset/>Reset</SortTextDiv>
              <SortTextDiv><Copy/>Copy</SortTextDiv>
              <SortTextDiv><ShareNew/>Share</SortTextDiv>
              <SortTextDiv onClick={() => console.log("sad")}>
                <Delete /> Delete CheckList
              </SortTextDiv>
            </SortWrapper>
          )}
          {isOpenSort && cardType === "default" && (
            <SortWrapper ref={wrapperRef}>
                <SortTextDiv
                onClick={() => {
                  dispatch({ type: SET_IS_EDITABLE, payload: false });
                  navigate("/check-list", {
                    state: { id: item.id, showEditable: true },
                  });
                }}
              >
                <Edit />
                View CheckList
              </SortTextDiv>
              <SortTextDiv><Copy/>Copy</SortTextDiv>
              <SortTextDiv><ShareNew/>Share</SortTextDiv>
            </SortWrapper>
          )}
        </ShortBy>
      </ShortContainer>
    </ColonImage>
  );
};

export default CardColon;
