import React, { useEffect,useState } from "react";
import {
  RightContentWrapper,
  ShareSection,
  ShareTextWrapper,
  ShareText,
  Preview,
  LinkSection,
  LinkContent,
  StyleButtonWrapper,
} from "styles/pages/EditChecklist";
import SliderModal from "components/SliderModal";
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

const SubModal = ({  title,
  linkName,
  link,
  subTitle,
  text,
  buttonName,
  embed, }) => {
  const [modal, setModal] = useState(false);
  
  
  function toggleab(data) {
setModal(data);
}


  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  return (
    <RightContentWrapper>
        <SliderModal
              modalType="fontcolors"
              isOpen={modal}
              togglefunction={toggleab}
         
            />
      <ShareSection>
    
        <ShareTextWrapper>
          <ShareText>{title}</ShareText>
          {text ? (
            <Preview onClick={() => toggleab(true)}>{linkName}</Preview>
          ) : (
            <Preview href="#">{linkName}</Preview>
          )}
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
    </RightContentWrapper>
  );
};

export default SubModal;
