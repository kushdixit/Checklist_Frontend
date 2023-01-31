import React from "react";
import {
  RightContentWrapper,
  ShareSection,
  ShareTextWrapper,
  ShareText,
  Preview,
  LinkSection,
  LinkContent,
} from "styles/pages/EditChecklist";

const SubModal = ({ title, linkName, link, subTitle, text }) => {
  return (
    <RightContentWrapper>
      <ShareSection>
        <ShareTextWrapper>
          <ShareText>{title}</ShareText>
          <Preview href="#">{linkName}</Preview>
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
      {text && <button>{text}</button>}
    </RightContentWrapper>
  );
};

export default SubModal;
