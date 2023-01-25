import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm, useWatch } from "react-hook-form";
import { ChecklistDescriptionWrapper } from "styles/pages/EditChecklist";
import TextArea from "components/FormElements/TextArea";
import { getChecklistBySubcategory } from "redux/actions/task";
import { DescriptionChecklist } from "redux/actions/checklist/index";
import { useParams } from "react-router-dom";

const DescriptionTitle = () => {
  const { id: pathId } = useParams();
  const dispatch = useDispatch();
  const ChecklistDetail = useSelector((state) =>
    pathId ? state.checklist : null
  );
  const { handleSubmit, control } = useForm({
    mode: "onSubmit",
    reValidateMode: "onBlur",
  });
  const watchData = useWatch({ control });

  const DescriptionHandler = async () => {
    console.log(" watchData?.checklist", watchData?.checklist);
    const res =
      watchData?.checklist &&
      (await dispatch(
        DescriptionChecklist(watchData?.checklist, ChecklistDetail?.id)
      ));
    console.log(res);
    if (res.error === false) {
      dispatch(getChecklistBySubcategory(pathId));
      // setEditChecklist(!editChecklist);
    }
  };

  return (
    <ChecklistDescriptionWrapper>
      <form
        style={{
          display: "flex",
          padding: "0px 60px !important",
        }}
        onSubmit={handleSubmit(DescriptionHandler)}
      >
        <div style={{ width: "100%" }}>
          <div>
            <TextArea
              style={{
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "24px",
                marginBottom: "40px",
                marginTop: "15px",
                width: "100%",
                border: "none",
                fontFamily: "inherit",
                resize: "none",
              }}
              name="checklist"
              placeholder={"Description..."}
              defaultValue={pathId ? ChecklistDetail?.checklistDescription : ""}
              control={control}
              handleKeyDown={(e) => {
                if (e.key === "Enter" && pathId) {
                  e.target.blur();
                  DescriptionHandler();
                }
              }}
            />
          </div>
        </div>
      </form>
    </ChecklistDescriptionWrapper>
  );
};

export default DescriptionTitle;
