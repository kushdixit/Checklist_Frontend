import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { notification } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getChecklistBySubcategory } from "redux/actions/task";
import { addTempChecklist } from "redux/actions/checklist";
import { SET_IS_EDITABLE } from "redux/actions/action_types";
import {
  BodyWrapper,
  ChecklistInputWrapper,
  ChecklistTitleWrapper,
  Section,
  IconInputField,
  TitleFormSection,
  DescriptionContainer,
  ChecklistDescriptionWrapper,
} from "styles/pages/Task";
import Navbar from "components/Navbar";
import TextInput from "components/FormElements/TextInput";

const CreateList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userEmail = useSelector((state) => state.auth?.userData?.email);
  const [api, contextHolder] = notification.useNotification();

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (!token) navigate("/sign-in");
  }, []);

  const { control: checklistFormControl, getValues } = useForm({
    mode: "onSubmit",
    reValidateMode: "onBlur",
    defaultValues: {
      checklist: "",
      description: "",
    },
  });

  const openNotification = (message) => {
    api.info({
      message,
    });
  };

  const getPayload = async () => {
    const multipleValues = getValues(["checklist", "description"]);
    const res = await dispatch(
      addTempChecklist(multipleValues[0], multipleValues[1], userEmail)
    );
    if (res.error) openNotification(res.message);
    else {
      dispatch({ type: SET_IS_EDITABLE, payload: true });
      const re = await dispatch(getChecklistBySubcategory(res?.id));
      re.error === false &&
        navigate(`/check-list/${res?.id}`, {
          state: { showEditable: false, cardType: "user" },
        });
    }
  };

  return (
    <Section>
      {contextHolder}
      <BodyWrapper>
        <Navbar
          search={false}
          addButton={false}
          getPayload={getPayload}
          createList={true}
        />
      </BodyWrapper>
      <TitleFormSection>
        <ChecklistInputWrapper>
          <form
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <IconInputField style={{ borderBottom: "revert" }}>
              <ChecklistTitleWrapper>
                <TextInput
                  name="checklist"
                  type="text"
                  defaultValue="Checklist Title"
                  placeholder="Title"
                  control={checklistFormControl}
                  handlekeyPress={(e) =>
                    e.key === "Enter" && e.preventDefault()
                  }
                />
              </ChecklistTitleWrapper>
            </IconInputField>
            <DescriptionContainer>
              <ChecklistDescriptionWrapper>
                <IconInputField style={{ fontSize: "24px !important" }}>
                  <TextInput
                    name="description"
                    type="text"
                    defaultValue={"Description"}
                    placeholder={"Description"}
                    control={checklistFormControl}
                    handlekeyPress={(e) =>
                      e.key === "Enter" && e.preventDefault()
                    }
                  />
                </IconInputField>
              </ChecklistDescriptionWrapper>
            </DescriptionContainer>
          </form>
        </ChecklistInputWrapper>
      </TitleFormSection>
    </Section>
  );
};
export default CreateList;
