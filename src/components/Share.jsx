import React from "react";
import SubModal from "components/SubModal";
import { RightCardWrapper } from "styles/pages/EditChecklist";

const ShareSectionCard = ({ pathId }) => {
  return (
    <RightCardWrapper>
      {/* <SubModal
        title="Share process"
        link="https://www.checkli.com/checklists/guest_view/63cfd4f426830"
        linkName="Preview"
        subTitle="Reminders"
      /> */}
      {/* <div
        style={{
          marginTop: "20px",
          marginBottom: " 20px",
          border: "0",
          borderTop: "1px solid #eee",
        }}
      ></div> */}
      <SubModal
        title="Share Checklist"
        link={`http://112.196.2.202:3000/guest/${pathId}`}
        linkName="copy"
      />
    </RightCardWrapper>
  );
};

export default ShareSectionCard;
