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
  Title,
  Section,
  IconInputField,
  TitleFormSection,
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
      checklist: "Checklist Title",
      description: "Description",
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
        <Title>
          <form
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <IconInputField>
              <TextInput
                name="checklist"
                type="text"
                defaultValue="Checklist Title"
                placeholder="Checklist Title"
                control={checklistFormControl}
                handlekeyPress={(e) => e.key === "Enter" && e.preventDefault()}
              />
            </IconInputField>
            <IconInputField style={{ paddingRight: "4.5rem" }}>
              <TextInput
                name="description"
                type="text"
                defaultValue={"Description"}
                placeholder={"Description"}
                control={checklistFormControl}
                handlekeyPress={(e) => e.key === "Enter" && e.preventDefault()}
              />
            </IconInputField>
          </form>
        </Title>
      </TitleFormSection>
    </Section>
  );
};
export default CreateList;
