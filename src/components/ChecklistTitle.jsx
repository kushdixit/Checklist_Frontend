import React, { useState, useEffect } from "react";
import { useForm, useWatch } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { getChecklistBySubcategory } from "redux/actions/task";
import { addTempChecklist, editChecklistApi } from "redux/actions/checklist";
import { notification } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { ChecklistTitleWrapper } from "styles/pages/EditChecklist";
import TextArea from "components/FormElements/TextArea";

const ChecklistTitle = () => {
  const { id: pathId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userEmail = useSelector((state) => state.auth?.userData?.email);
  const ChecklistDetail = useSelector((state) =>
    pathId ? state.checklist : null
  );
  const [list, setList] = useState({});

  useEffect(() => {
    if (ChecklistDetail) setList(ChecklistDetail);
  }, [ChecklistDetail]);

  const [api, contextHolder] = notification.useNotification();

  const { handleSubmit, control } = useForm({
    mode: "onSubmit",
    reValidateMode: "onBlur",
  });

  const watchData = useWatch({ control });

  const openNotification = (message) => {
    api.info({
      message,
    });
  };

  const addChecklistHandler = async () => {
    const res =
      watchData?.checklist &&
      (await dispatch(addTempChecklist(watchData?.checklist, "", userEmail)));
    if (res?.error) openNotification(res?.message);
    else {
      res?.id && dispatch(getChecklistBySubcategory(res?.id));
      res?.error === false &&
        navigate(`/temp/${res?.id}`, {
          state: { showEditable: false, cardType: "user" },
        });
    }
  };

  const editChecklistHandler = async () => {
    console.log("edit", watchData?.checklist);
    const res =
      watchData?.checklist &&
      (await dispatch(
        editChecklistApi(watchData?.checklist, ChecklistDetail?.id)
      ));
    if (res?.error === false) {
      dispatch(getChecklistBySubcategory(pathId));
    }
  };

  const ChecklistHandler = () =>
    pathId ? editChecklistHandler() : addChecklistHandler();

  return (
    <ChecklistTitleWrapper>
      {contextHolder}
      <form
        style={{
          display: "flex",
          padding: "0px 60px !important",
        }}
        onSubmit={handleSubmit(ChecklistHandler)}
      >
        <div style={{ width: "100%" }}>
          <div>
            <TextArea
              style={{
                width: "100%",
                fontWeight: "600",
                fontSize: "40px",
                lineHeight: "44px",
                border: "none",
                fontFamily: "inherit",
                resize: "none",
              }}
              name="checklist"
              placeholder={"Untitled"}
              defaultValue={pathId ? list?.checklistName : ""}
              control={control}
              handlekeyPress={(e) => {
                if (e.key === "Enter") {
                  ChecklistHandler();
                }
              }}
              handleKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.target.blur();
                  ChecklistHandler();
                }
              }}
            />
          </div>
        </div>
      </form>
    </ChecklistTitleWrapper>
  );
};

export default ChecklistTitle;
