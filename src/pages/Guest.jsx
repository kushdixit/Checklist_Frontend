import React, { useEffect, useState } from "react";
import DescriptionTitle from "components/DescriptionTitle";
import ChecklistTitle from "components/ChecklistTitle";
import DescriptionSliderModal from "components/DescriptionSliderModal";
import Footer from "components/Footer";
import TaskTitle from "components/TaskTitle";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { notification } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getChecklistBySubcategory } from "redux/actions/task";
import { addTempChecklist } from "redux/actions/checklist";
import { SET_IS_EDITABLE } from "redux/actions/action_types";
import { ImageWrapper } from "helpers/copy";
import {
  ChecklistMainWrapper,
  ChecklistSubWrapper,
  CenterSection,
} from "styles/pages/Guest";
import Navbar from "components/Navbar";

const reff = React.createRef();

const Guest = () => {
  const [newmodal, setNewModal] = useState(false);
  const [checkListDiscriptionId, setCheckListDiscriptionId] = useState();
  function toggleabc(data, descriptionId) {
    setCheckListDiscriptionId(descriptionId);
    setNewModal(data);
  }

  const { id: pathId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userEmail = useSelector((state) => state.auth?.userData?.email);
  const ChecklistDetail = useSelector((state) =>
    pathId ? state.checklist : null
  );
  const [api, contextHolder] = notification.useNotification();

  useEffect(() => {
    // const token = localStorage.getItem("access_token");
    // if (!token) navigate("/sign-in");
    pathId && dispatch(getChecklistBySubcategory(pathId));
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
        navigate(`/createChecklist/${res?.id}`, {
          state: { showEditable: false, cardType: "user" },
        });
    }
  };

  return (
    <div>
      <DescriptionSliderModal
        isOpen={newmodal}
        togglefunction={toggleabc}
        checklistDiscriptionId={checkListDiscriptionId}
      />
      {contextHolder}
      <Navbar
        search={false}
        addButton={false}
        getPayload={getPayload}
        createList={true}
      />
      <ChecklistMainWrapper>
        <ChecklistSubWrapper>
          <CenterSection>
            <div ref={reff}>
              <ChecklistTitle />
              <DescriptionTitle />
              {pathId && ChecklistDetail?.checklistImageId !== 0 && (
                <ImageWrapper
                  title={pathId ? ChecklistDetail?.checklistName : "untitled"}
                  imageId={ChecklistDetail?.checklistImageId}
                />
              )}
              <TaskTitle toggleabc={toggleabc} />
            </div>
          </CenterSection>
        </ChecklistSubWrapper>
      </ChecklistMainWrapper>
      <Footer />
    </div>
  );
};

export default Guest;
