import React, { useEffect,useState } from "react";
import {
  RightContentWrapper,
  ShareSection,
  ShareTextWrapper,
  ShareText,
  Preview,
  LinkSection,
  LinkContent,
} from "styles/pages/EditChecklist";
import SliderModal from "components/SliderModal";
const SubModal = ({ title, linkName, link, subTitle, text }) => {
  const [modal, setModal] = useState(false);
  
  
  function toggleab(data) {
setModal(data);
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
      {!text && (
        <LinkSection>
          <LinkContent href="#">{link}</LinkContent>
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
        <button>
          <div>{text}</div>
        </button>
      )}
    </RightContentWrapper>
  );
};

export default SubModal;
