import React from "react";
import {
  DataWrapper,
  Heading,
  ButtonWrapper,
  ModalButton,
} from "styles/pages/ForgetPassword";
import { useDispatch, useSelector } from "react-redux";
import { MoveChecklist } from "redux/actions/checklist/index";
import { getAllTemplateByEmail, getAllTemplate } from "redux/actions/template";
import { notification } from "antd";

const MoveModal = ({ notify, togglefunction, checklistId, templateName }) => {
  const dispatch = useDispatch();
  const userEmail = useSelector((state) => state.auth?.userData?.email);
  const templateData = useSelector((state) => state.Template?.yourTemplate);
  const allTemplate = useSelector((state) => state.Template?.allTemplate);
  const [api, contextHolder] = notification.useNotification();

  const openNotification = (message) => {
    api.info({
      message,
    });
  };

  const handleChecklistMove = async (id) => {
    const res = await dispatch(MoveChecklist(checklistId, id));
    if (res?.error == false) {
      dispatch(getAllTemplateByEmail(userEmail));
      dispatch(getAllTemplate());
      openNotification("Moved");
      togglefunction(false);
    } else openNotification(res?.message || "Error");
  };

  return (
    <DataWrapper>
      {contextHolder}
      <Heading>Move Checklist</Heading>
      <ButtonWrapper>
        {templateData
          ?.filter((item) => item?.templateName !== templateName)
          ?.map((item) => (
            <ModalButton onClick={() => handleChecklistMove(item?.id)}>
              {item?.templateName}
            </ModalButton>
          ))}
        {allTemplate
          ?.filter((item) => item?.templateName !== templateName)
          ?.map((item) => (
            <ModalButton onClick={() => handleChecklistMove(item?.id)}>
              {item?.templateName}
            </ModalButton>
          ))}
      </ButtonWrapper>
    </DataWrapper>
  );
};

export default MoveModal;
