import React from "react";
import SubModal from "components/SubModal";
import { RightCardWrapper } from "styles/pages/EditChecklist";

const ShareSectionCard = () => {
  return (
    <RightCardWrapper>
      <SubModal
        title="Share process"
        link="https://www.checkli.com/checklists/guest_view/63cfd4f426830"
        linkName="Preview"
        subTitle="Reminders"
      />
      <div
        style={{
          marginTop: "20px",
          marginBottom: " 20px",
          border: "0",
          borderTop: "1px solid #eee",
        }}
      ></div>
      <SubModal
        title="Share Checklist"
        link="https://www.checkli.com/checklists/guest_view/63cfd4f426830"
        linkName="Preview"
      />
    </RightCardWrapper>
  );
};

export default ShareSectionCard;
