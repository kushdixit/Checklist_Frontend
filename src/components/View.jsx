import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { notification } from "antd";
import { PinChecklist } from "redux/actions/checklist/index";
import ImageModal from "components/ImageModal";
import DescriptionSliderModal from "components/DescriptionSliderModal";
import DropdownBox from "./Dropdown";
import { ImageWrapper } from "helpers/copy";
import {
  LandingContainer,
  RightContainer,
  WrapperSection,
  LeftContentWrapper,
  DetailWrapper,
  Date,
  Helpers,
  ShareButton,
} from "styles/components/View";
import { getChecklistBySubcategory } from "redux/actions/task";
import DescriptionTitle from "components/DescriptionTitle";
import ChecklistTitle from "components/ChecklistTitle";
import TaskTitle from "components/TaskTitle";
import Star from "assets/SVG/Star";
import StarGrey from "assets/SVG/StarGrey";

const reff = React.createRef();

const View = () => {
  const { id: pathId } = useParams();
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();
  const ChecklistDetail = useSelector((state) =>
    pathId ? state.checklist : null
  );
  const boxType = useSelector((state) => state?.checkBox?.boxType);
  const [api, contextHolder] = notification.useNotification();
  const [newmodal, setNewModal] = useState(false);
  const [checkListDiscriptionId, setCheckListDiscriptionId] = useState();

  function toggleabc(data, descriptionId) {
    setCheckListDiscriptionId(descriptionId);
    setNewModal(data);
  }

  const openNotification = (message) => {
    api.info({
      message,
    });
  };

  useEffect(() => {
    pathId && dispatch(getChecklistBySubcategory(pathId));
  }, []);

  const PinnedHandler = async () => {
    if (pathId) {
      const pinn = !ChecklistDetail?.pinned ? 1 : 0;
      const res = await dispatch(PinChecklist(pathId, pinn));
      if (res?.status === 200) dispatch(getChecklistBySubcategory(pathId));
    }
  };

  function toggleab(data) {
    setModal(data);
  }

  return (
    <LandingContainer boxType={boxType}>
      {contextHolder}
      <DescriptionSliderModal
        modalType="description"
        isOpen={newmodal}
        togglefunction={toggleabc}
        checklistDiscriptionId={checkListDiscriptionId}
      />
      <RightContainer>
        <Helpers>
          <div style={{ display: "flex", gap: "10px" }}>
            <ShareButton
              onClick={() => {
                navigator.clipboard.writeText(
                  `http://112.196.2.202:3000/guest/${pathId}`
                );
                openNotification("url copied");
              }}
            >
              Share
            </ShareButton>
            <ShareButton>
              <DropdownBox reff={reff} toggleab={toggleab} />
            </ShareButton>
          </div>
        </Helpers>
        <WrapperSection>
          <LeftContentWrapper id="divToPrint" ref={reff}>
            <DetailWrapper>
              <div>
                <Date>
                  {pathId
                    ? `Created: ${ChecklistDetail?.dateCreated?.split("T")[0]}`
                    : `Date: ${
                        new window.Date().toLocaleString()?.split(",")[0]
                      }`}
                </Date>
              </div>
              <div style={{ width: "25px" }}>
                {ChecklistDetail?.pinned ? (
                  <Star onClick={PinnedHandler} />
                ) : (
                  <StarGrey onClick={PinnedHandler} />
                )}
              </div>
            </DetailWrapper>
            <ChecklistTitle />
            {pathId && (
              <>
                <DescriptionTitle />
                {ChecklistDetail?.checklistImageId !== 0 && (
                  <ImageWrapper
                    title={pathId ? ChecklistDetail?.checklistName : "untitled"}
                    imageId={ChecklistDetail?.checklistImageId}
                  />
                )}
              </>
            )}
            <TaskTitle toggleabc={toggleabc} />
          </LeftContentWrapper>
        </WrapperSection>
      </RightContainer>
      <ImageModal
        modalType="editimage"
        isOpen={modal}
        togglefunction={toggleab}
      />
    </LandingContainer>
  );
};

export default View;
