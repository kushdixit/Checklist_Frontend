import React, { useEffect, useState } from "react";
import FirstImage from "assets/images/checklist.svg";
import SecondImage from "assets/images/secondimage.jpg";
import ThirdImage from "assets/images/thirdimage.jpg";
import { useDispatch, useSelector } from "react-redux";
import FourthImage from "assets/images/firstimage.jpg";
import {
  FirstSection,
  NewSection,
  SubSectionNew,
  CardMainSection,
} from "styles/components/Card";
import { getChecklist, addNewChecklist } from "redux/actions/checklist";
import Card from "./Card";
import { useForm, Controller } from "react-hook-form";
import { notification } from "antd";

const ChecklistCards = ({ item }) => {
  const dispatch = useDispatch();
  // const allChecklist = useSelector((state) => state.task?.allChecklist);
  const userEmail = useSelector((state) => state.auth?.userData?.email);
  const [api, contextHolder] = notification.useNotification();
  const [isCheck, setIsCheck] = useState(false);

  const openNotification = (message) => {
    api.info({
      message,
    });
  };

  const Checklist = [
    { id: 1, time: "3:25 p.m", image: FirstImage },
    { id: 2, time: "3:25 p.m", image: SecondImage },
    { id: 3, time: "3:25 p.m", image: ThirdImage },
    { id: 4, time: "3:25 p.m", image: FourthImage },
  ];
  const { handleSubmit, control } = useForm({
    mode: "onSubmit",
    reValidateMode: "onBlur",
    shouldFocusError: true,
  });
  useEffect(() => {
    dispatch(getChecklist());
  }, []);

  const addChecklistHandler = async (data) => {
    const res = await dispatch(
      addNewChecklist(data.addChecklist, item.id, userEmail)
    );
    if (res.error) openNotification(res.message);
  };

  return (
    <>
      {contextHolder}
      <NewSection>
        <SubSectionNew>
          <h2> {item.templateName}</h2>
        </SubSectionNew>
        {/* <Footer>
          <Button handleClick={() => setIsCheck(!isCheck)}>
            Create Checklist
          </Button>
        </Footer> */}
        {/* {isCheck && (
          <Morecontent>
            <form onSubmit={handleSubmit(addChecklistHandler)}>
              <IconInputField>
                <TextInput
                  name="addChecklist"
                  type="text"
                  placeholder="Enter Checklist Name"
                  control={control}
                />
              </IconInputField>
              <SelectFieldSection>
                <SelectField
                  data={dealAnalysisArr}
                  name="dealAnalysis1"
                  control={control}
                  placeholder="Select"
                />
              </SelectFieldSection>
              <ButtonSection>
                <Button>Save</Button>
              </ButtonSection>
            </form>
          </Morecontent>
        )} */}
      </NewSection>

      <CardMainSection>
        <FirstSection>
          {item.checklists
            ?.filter((subItem) => subItem.isActive)
            .map((subItem, index) => {
              return (
                <Card
                  key={index}
                  index={index}
                  item={subItem}
                  Checklist={Checklist}
                  showEditable={false}
                  cardType="default"
                />
              );
            })}
        </FirstSection>
      </CardMainSection>
    </>
  );
};

export default ChecklistCards;
