import React, { useEffect, useState, useRef } from "react";
import {
  ShortBy,
  SortWrapper,
  ShortContainer,
  SortTextDiv,
} from "styles/pages/Task";
import {
  SubSection,
  Image,
  Wrap,
  WrapSubSection,
  WrapSubSectionNew,
  WrapSection,
  ColonImage,
} from "styles/components/Card";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SET_IS_EDITABLE } from "redux/actions/action_types";
import newchecklist from "assets/images/newchecklist.jpg";
import checklisticon from "assets/images/checklisticon.jpg";
import Colon from "assets/SVG/Colon";
import Edit from "assets/SVG/Edit";
import Delete from "assets/SVG/Delete";

const Card = ({ item, index, Checklist, showEditable }) => {
  const [modal, setModal] = useState(false);
  const [isOpenSort, setIsOpenSort] = useState(false);
  const dispatch = useDispatch();
  const wrapperRef = useRef();
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
    <SubSection key={index}>
      <Wrap
        onClick={() => {
          dispatch({ type: SET_IS_EDITABLE, payload: false });
          navigate("/check-list", {
            state: { id: item.id, showEditable: showEditable },
          });
        }}
      >
        <Image>
          <img
            src={checklisticon}
            alt="Rectangle"
            width={"100%"}
            height={"auto"}
          />{" "}
        </Image>
        <WrapSection>
          <WrapSubSection>
            <h2>{item.checklistName}</h2>
          </WrapSubSection>
          <WrapSubSectionNew>
            <h3>
              {" "}
              {item.dateUpdated
                ? item.dateUpdated?.split("T")[0]
                : item.dateCreated?.split("T")[0]}
            </h3>
          </WrapSubSectionNew>
        </WrapSection>
      </Wrap>
      {/* {isEditable && ( */}
      <ColonImage>
        <ShortContainer onClick={() => setIsOpenSort(true)}>
          <ShortBy>
            <Colon onClick={() => toggleab(!modal)} />
            {isOpenSort && (
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
                <SortTextDiv
                  onClick={
                    () => console.log("sad")
                    // dispatch(deleteChecklist(item.id))
                  }
                >
                  <Delete /> Delete CheckList
                </SortTextDiv>
              </SortWrapper>
            )}
          </ShortBy>
        </ShortContainer>
      </ColonImage>
      {/* )} */}
    </SubSection>
  );
};

export default Card;
