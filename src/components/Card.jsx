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
  ColonImage,
  WrapSubSection,
} from "styles/components/Card";
import Colon from "assets/SVG/Colon";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteChecklist } from "redux/actions/checklist";
import Edit from "assets/SVG/Edit";
import Delete from "assets/SVG/Delete";

const Card = ({ item, index, Checklist }) => {
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
    <SubSection key={index}>
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
        <ColonImage>
          <ShortContainer onClick={() => setIsOpenSort(true)}>
            <ShortBy>
              <Colon onClick={() => toggleab(!modal)} />
              {isOpenSort && (
                <SortWrapper ref={wrapperRef}>
                  <SortTextDiv
                    onClick={() =>
                      navigate("/check-list", { state: { id: item.id } })
                    }
                  >
                     <Edit />Edit CheckList
                  </SortTextDiv>
                  <SortTextDiv
                    onClick={() => dispatch(deleteChecklist(item.id))}
                  >
                    <Delete />  Delete CheckList
                  </SortTextDiv>
                </SortWrapper>
              )}
            </ShortBy>
          </ShortContainer>
        </ColonImage>
      </Wrap>
    </SubSection>
  );
};

export default Card;
