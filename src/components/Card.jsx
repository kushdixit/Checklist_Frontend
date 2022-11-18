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
} from "styles/components/Card";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SET_IS_EDITABLE } from "redux/actions/action_types";

const Card = ({ item, index, Checklist, showEditable }) => {
  const [modal, setModal] = useState(false);
  const [isOpenSort, setIsOpenSort] = useState(false);
  const dispatch = useDispatch();
  const wrapperRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    function handleClickOutside(event: { target: any }) {
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
    <SubSection
      key={index}
      onClick={() => {
        dispatch({ type: SET_IS_EDITABLE, payload: false });
        navigate("/check-list", {
          state: { id: item.id, showEditable: showEditable },
        });
      }}
    >
      <Image>
        <img
          src={Checklist[0]?.image}
          alt="Rectangle"
          width={"100%"}
          height={"auto"}
        />{" "}
      </Image>
      <Wrap>
        <WrapSubSection>
          <h2>{item.checklistName}</h2>
          <h3>
            {" "}
            {item.dateUpdated
              ? item.dateUpdated?.split("T")[0]
              : item.dateCreated?.split("T")[0]}
          </h3>
        </WrapSubSection>
        {/* {isEditable && (
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
                      onClick={() => dispatch(deleteChecklist(item.id))}
                    >
                      <Delete /> Delete CheckList
                    </SortTextDiv>
                  </SortWrapper>
                )}
              </ShortBy>
            </ShortContainer>
          </ColonImage>
        )} */}
      </Wrap>
    </SubSection>
  );
};

export default Card;
