import React, { useEffect, useState, lazy, Suspense } from "react";
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

const Navbar = lazy(() => import("components/Navbar"));
const DescriptionTitle = lazy(() => import("components/DescriptionTitle"));
const ChecklistTitle = lazy(() => import("components/ChecklistTitle"));
const TaskTitle = lazy(() => import("components/TaskTitle"));
const Footer = lazy(() => import("components/Footer"));
const DescriptionSliderModal = lazy(() =>
  import("components/DescriptionSliderModal")
);

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
    pathId && dispatch(getChecklistBySubcategory(pathId));
  }, []);

  const { getValues } = useForm({
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
      <Suspense fallback={<h1 className="fallback-css">Loading…</h1>}>
        <DescriptionSliderModal
          isOpen={newmodal}
          togglefunction={toggleabc}
          checklistDiscriptionId={checkListDiscriptionId}
        />
      </Suspense>
      {contextHolder}
      <Suspense fallback={<h1 className="fallback-css">Loading…</h1>}>
        <Navbar
          search={false}
          addButton={false}
          getPayload={getPayload}
          createList={true}
        />
      </Suspense>
      <ChecklistMainWrapper>
        <ChecklistSubWrapper>
          <CenterSection>
            <div ref={reff}>
              <Suspense fallback={<h1 className="fallback-css">Loading…</h1>}>
                <ChecklistTitle />
              </Suspense>
              <Suspense fallback={<h1 className="fallback-css">Loading…</h1>}>
                <DescriptionTitle />
              </Suspense>
              {pathId && ChecklistDetail?.checklistImageId !== 0 && (
                <Suspense fallback={<h1 className="fallback-css">Loading…</h1>}>
                  <ImageWrapper
                    title={pathId ? ChecklistDetail?.checklistName : "untitled"}
                    imageId={ChecklistDetail?.checklistImageId}
                  />
                </Suspense>
              )}
              <Suspense fallback={<h1 className="fallback-css">Loading…</h1>}>
                <TaskTitle toggleabc={toggleabc} />
              </Suspense>
            </div>
          </CenterSection>
        </ChecklistSubWrapper>
      </ChecklistMainWrapper>
      <Suspense fallback={<h1 className="fallback-css">Loading…</h1>}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Guest;
