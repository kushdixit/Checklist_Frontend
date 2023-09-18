import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { notification } from "antd";
import { isUser } from "helpers/isUser";
import { CopyHandler } from "helpers/copy";
import Button from "components/Button";
import { colors } from "constants/color";
import { PublicprivateChecklist } from "redux/actions/checklist";
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
  PreviewLink,
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
  createrEmail,
}) => {
  const { id: pathId } = useParams();
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();
  const { id: taskId, isPrivate } = useSelector((state) => state?.checklist);
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

  const MoveChecklistData = async () => {
    try {
      const res = await dispatch(PublicprivateChecklist(taskId, !isPrivate));
      if (!res.error) {
        openNotification("moved successfully");
        navigate("/process");
      } else {
        openNotification("error");
      }
    } catch (error) {
      openNotification(error);
    }
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
                handleClick={async () => {
                  if (isUser() === true) {
                    const res = await CopyHandler(
                      pathId,
                      isUser() ? userEmail : "guest@gmail.com",
                      false
                    );
                    res?.error === false &&
                      navigate(`/dashboard/${res?.data?.data}`);
                  } else {
                    navigate("/sign-in", {
                      state: { copyChecklistPath: pathId },
                    });
                  }
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
            {userEmail === createrEmail ? (
              <CopyButtonWrapper
                btnColor="#ec4e20"
                textColor="#fff"
                onClick={MoveChecklistData}
              >
                <Button>Move</Button>
              </CopyButtonWrapper>
            ) : null}
          </>
        )}
        <ShareTextWrapper>
          <ShareText>{title}</ShareText>
          {buttonName && (
            <Preview onClick={() => toggleab(true)}>{buttonName}</Preview>
          )}
          {linkName && (
            <PreviewLink
              to={`/guest/${pathId}`}
              target="_blank"
              // onClick={() => {
              //   linkName === "preview" &&
              //     navigator.clipboard.writeText(
              //       `http://112.196.2.202:3000/guest/${pathId}`
              //     );
              //   openNotification("url copied");
              // }}
            >
              {linkName}
            </PreviewLink>
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
