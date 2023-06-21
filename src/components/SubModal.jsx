import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { notification } from "antd";
import { isUser } from "helpers/isUser";
import { CopyHandler } from "helpers/copy";
import Button from "components/Button";
import { colors } from "constants/color";
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
} from "styles/pages/EditChecklist";
import SliderModal from "components/SliderModal";
import { Select } from "antd";
import { SET_BOX_TYPE } from "redux/actions/action_types";

const { Option } = Select;

const options = ["Squared", "Round"];

const SubModal = ({
  title,
  linkName,
  link,
  subTitle,
  text,
  buttonName,
  embed,
  viewCount,
  copyCount,
  downloadCount,
  counts,
}) => {
  const { id: pathId } = useParams();
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();
  const userEmail = useSelector((state) => state.auth?.userData?.email);
  const [api, contextHolder] = notification.useNotification();

  const openNotification = (message) => {
    api.info({
      message,
    });
  };

  function toggleab(data) {
    setModal(data);
  }
  function handleChange(value) {
    if (value === "Squared")
      dispatch({ type: SET_BOX_TYPE, payload: "square" });
    else dispatch({ type: SET_BOX_TYPE, payload: "round" });
  }
  const style = {
    backgroundColor: colors.backgroundColor,
    color: colors.primaryColor,
  };
  return (
    <RightContentWrapper>
      {contextHolder}
      <SliderModal
        modalType="fontcolors"
        isOpen={modal}
        togglefunction={toggleab}
      />
      <ShareSection>
        {viewCount && (
          <ViewCount>
            <strong>{viewCount}</strong>
            {/* <br /> */}
            <p>Views</p>
          </ViewCount>
        )}
        {counts && (
          <>
            <CopyButtonWrapper btnColor="#ec4e20" textColor="#fff">
              <p>
                <span>{copyCount}</span>
                <br />
                copies saved
              </p>
              <Button
                handleClick={() => {
                  CopyHandler(
                    pathId,
                    isUser() ? userEmail : "guest@gmail.com",
                    navigate
                  );
                }}
              >
                Copy
              </Button>
            </CopyButtonWrapper>
            <CopyButtonWrapper btnColor="#f0f0f0" textColor="#000">
              <p>
                <span>{downloadCount}</span>
                <br />
                downloads
              </p>
              <button onClick={() => navigate("/sign-in")}>pdf</button>
            </CopyButtonWrapper>
          </>
        )}
        <ShareTextWrapper>
          <ShareText>{title}</ShareText>
          {buttonName && (
            <Preview onClick={() => toggleab(true)}>{buttonName}</Preview>
          )}
          {linkName && (
            <Preview
              href="#"
              onClick={() => {
                linkName === "copy" &&
                  navigator.clipboard.writeText(
                    `http://112.196.2.202:3000/guest/${pathId}`
                  );
                openNotification("url copied");
              }}
            >
              {linkName}
            </Preview>
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
