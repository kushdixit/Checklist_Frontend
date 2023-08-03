import React from "react";
import SubModal from "components/SubModal";
import { RightCardWrapper } from "styles/pages/EditChecklist";

const ShareSectionCard = ({ pathId }) => {
  return (
    <RightCardWrapper>
      <SubModal
        title="Share Checklist"
        link={`http://112.196.2.202:3000/guest/${pathId}`}
        linkName="preview"
      />
    </RightCardWrapper>
  );
};

export default ShareSectionCard;
