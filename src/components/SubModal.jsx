import React, { useEffect, useState } from "react";
import {
  RightContentWrapper,
  ShareSection,
  ShareTextWrapper,
  ShareText,
  Preview,
  LinkSection,
  LinkContent,
  StyleButtonWrapper,
  ViewCount,
  CopyButtonWrapper,
  // ButtonsMainWrapper,
} from "styles/pages/EditChecklist";
import SliderModal from "components/SliderModal";

import DescriptionSliderModal from "components/DescriptionSliderModal";
import ImageModal from "components/ImageModal";
import { Select } from "antd";

const { Option } = Select;

const options = [
  "Squared",
  "Checkboxes",
  "Yes_No",
  "-------------",
  "Checkmark_Square",
  "Number_Square",
  "Checkmark_Circle",
  "Number_Circle",
];

const SubModal = ({
  title,
  linkName,
  link,
  subTitle,
  text,
  buttonName,
  buttonNew,
  embed,
  viewCount,
  copyCount,
  downloadCount,
}) => {
  const [modal, setModal] = useState(false);
  const [newmodal, setNewModal] = useState(false);
  function toggleab(data) {
    setModal(data);
  }
  function toggleabc(data) {
    setNewModal(data);
  }
  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  const CopyHandler = async () => {
    console.log("hey");
    // const res = await dispatch(CopyChecklist(pathId, userEmail));
    // !res?.error && navigate(`/createChecklist/${res?.data?.data}`);
  };

  return (
    <RightContentWrapper>
      <SliderModal
        modalType="fontcolors"
        isOpen={modal}
        togglefunction={toggleab}
      />

      <ShareSection>
        {viewCount && (
          <ViewCount>
            <strong>{viewCount}</strong>
            <br />
            <p>Views</p>
          </ViewCount>
        )}
        {copyCount && (
          <CopyButtonWrapper btnColor="#ec4e20" textColor="#fff">
            <p>
              <span>{copyCount}</span>
              <br />
              copies saved
            </p>
            <button onClick={CopyHandler}>Copy</button>
          </CopyButtonWrapper>
        )}
        {downloadCount && (
          <CopyButtonWrapper btnColor="#f0f0f0" textColor="#000">
            <p>
              <span>{downloadCount}</span>
              <br />
              downloads
            </p>
            <button>pdf</button>
          </CopyButtonWrapper>
        )}
        <ShareTextWrapper>
          <ShareText>{title}</ShareText>
          {buttonName && (
            <Preview onClick={() => toggleab(true)}>{buttonName}</Preview>
          )}{" "}
          {linkName && <Preview href="#">{linkName}</Preview>}
        </ShareTextWrapper>
      </ShareSection>
      {link && (
        <LinkSection>
          <LinkContent href="#">{link}</LinkContent>
        </LinkSection>
      )}
      {embed && (
        <LinkSection>
          <LinkContent>{embed}</LinkContent>
        </LinkSection>
      )}
      <h4
        style={{
          fontSize: "14px",
          color: "#007ccb",
          fontWeight: 400,
          marginTop: 5,
          textAlign: "left",
        }}
      >
        {subTitle}
      </h4>

      {text && (
        <StyleButtonWrapper>
          <div>
            <Select
              defaultValue="Checkboxes"
              style={{
                width: "100%",
                color: "#000",
                backgroundColor: "#e6e6e6",
                borderColor: "#adadad",
              }}
              onChange={handleChange}
            >
              {options.map((item) => (
                <Option value={item}>{item}</Option>
              ))}
            </Select>
          </div>
        </StyleButtonWrapper>
      )}
      {/* <button onClick={() => toggleabc(true)}>description</button> */}
    </RightContentWrapper>
  );
};

export default SubModal;
