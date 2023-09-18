import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getAllTemplate, getAllTemplateByEmail } from "redux/actions/template";
import { deleteChecklist, PinChecklist } from "redux/actions/checklist/index";
import { notification } from "antd";
import {
  LandingContainer,
  RightContainer,
  FirstSection,
  SecondSection,
  WrapperSection,
  ThirdSection,
  FourthSection,
  IconInputFieldNew,
  DeleteIconWrapper,
} from "styles/components/Analytic";
import { colors } from "constants/color";
import { UPDATE_DATA } from "redux/actions/action_types";
import Share from "assets/images/share.png";
import ChartPie from "assets/images/chart-pie.png";
import Trash from "assets/images/trash.png";
import Star from "assets/SVG/Star";
import StarGrey from "assets/SVG/StarGrey";
import ShareModal from "./ShareModal";
import { DeleteOutlined } from "@ant-design/icons";

const Analytic = () => {
  const [search, setSearch] = useState("");
  const [details, setDetails] = useState([]);
  const dispatch = useDispatch();
  const templateData = useSelector((state) => state.Template?.yourTemplate);
  const userEmail = useSelector((state) => state.auth?.userData?.email);

  useEffect(() => {
    dispatch(getAllTemplate());
    dispatch(getAllTemplateByEmail(userEmail));
  }, []);

  useEffect(() => {
    if (templateData?.length && templateData[0]?.checklists) {
      setDetails(templateData[0]?.checklists);
    }
  }, [templateData]);

  useEffect(() => {
    if (templateData) {
      if (search !== "") {
        const data = templateData[0]?.checklists?.filter((item) => {
          if (
            item?.checklistName?.toLowerCase()?.includes(search?.toLowerCase())
          )
            return item;
        });
        setDetails(data);
      } else {
        setDetails(templateData[0]?.checklists);
      }
    }
  }, [search]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e?.target?.value);
  };

  const initialDisplayCount = 40;
  const [displayCount, setDisplayCount] = useState(initialDisplayCount);
  const displayedItems = details
    ?.filter((item) => !item?.pinned)
    .reverse()
    .slice(0, displayCount);

  const handleSeeMoreClick = () => {
    // Increment the displayCount by 40 when the button is clicked
    setDisplayCount(displayCount + 40);
  };

  return (
    <LandingContainer>
      <RightContainer>
        <WrapperSection>
          <FirstSection>My Dashboard</FirstSection>
          <SecondSection>
            All of your checklists, processes and templates.Help Video
          </SecondSection>
          <IconInputFieldNew>
            <input
              name="listSearch"
              type="text"
              placeholder="Search"
              onChange={(e) => handleSearch(e)}
            />
          </IconInputFieldNew>
          <ThirdSection>
            <ul>
              <li>Name</li>
              <li>Share</li>
              <li>Insights</li>
              <li>Delete</li>
            </ul>
          </ThirdSection>
          {details
            ?.filter((item) => item?.pinned)
            .map((item, id) => (
              <ChecklistWrapper key={id} data={item} id={id} />
            ))}
          {displayedItems.map((item, id) => (
            <ChecklistWrapper key={id} data={item} id={id} />
          ))}

          {details?.length > displayCount && (
            <div style={{ paddingTop: "60px" }}>
              <button className="button" onClick={handleSeeMoreClick}>
                See More
              </button>
            </div>
          )}
        </WrapperSection>
      </RightContainer>
    </LandingContainer>
  );
};

const ChecklistWrapper = ({ data }) => {
  const [userDataId, setUserDataID] = useState("");
  const [modal, setModal] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function togglefunction(data) {
    setModal(data);
  }
  const userEmail = useSelector((state) => state.auth?.userData?.email);
  const [api, contextHolder] = notification.useNotification();

  const openNotification = (message) => {
    api.info({
      message,
    });
  };

  const DeleteChecklist = async () => {
    const res = await dispatch(deleteChecklist(data?.id));
    if (res.status === 204) {
      openNotification("Checklist Deleted Successfully");
      dispatch(getAllTemplateByEmail(userEmail));
    }
  };

  const PinnedHandler = async () => {
    const pinn = !data?.pinned ? 1 : 0;
    const res = await dispatch(PinChecklist(data?.id, pinn));
    if (res?.status === 200) dispatch(getAllTemplateByEmail(userEmail));
  };
  const style = {
    backgroundColor: colors.backgroundColor,
    color: colors.primaryColor,
  };

  // console.log("data", data);
  return (
    <FourthSection>
      {contextHolder}
      <ul>
        <li>
          {data?.pinned ? (
            <Star onClick={PinnedHandler} />
          ) : (
            <StarGrey onClick={PinnedHandler} />
          )}
          <div
            style={{
              cursor: "pointer",
              textDecoration: "underline",
              textAlign: "left",
              width: "100%",
              maxWidth: "502",
            }}
            onClick={() => {
              dispatch({ type: UPDATE_DATA, payload: {} });
              navigate(`/dashboard/${data?.id}`, {
                state: { showEditable: false, cardType: "user" },
              });
              window.scroll(0, 0);
            }}
          >
            {data?.checklistName}
          </div>
        </li>
        <li>
          {/* <Link to={`/guest/${data?.id}`} target="_blank">
            <img src={Share} alt="Share" />
          </Link> */}
          <div
            onClick={() => {
              setUserDataID(data?.id);
              togglefunction(true);
            }}
          >
            <img src={Share} alt="Share" />
          </div>
        </li>
        <li>
          <img
            src={ChartPie}
            alt="ChartPie"
            onClick={() =>
              navigate(`/insight/${data?.id}`, {
                state: {
                  inProgress: data?.inCompletedProcessCount,
                  completed: data?.completedProcessCount,
                },
              })
            }
          />
        </li>
        <li onClick={DeleteChecklist} className="delete-checklist-wrapper">
          {/* <img src={Trash} alt="Trash" /> */}
          <DeleteIconWrapper>
            <DeleteOutlined />
          </DeleteIconWrapper>
        </li>
      </ul>
      <ShareModal
        isOpen={modal}
        togglefunction={togglefunction}
        linkto={data?.id}
        userDataId={userDataId}
        isPrivate={data?.isPrivate}
        openNotification={openNotification}
        userEmail={userEmail}
      />
    </FourthSection>
  );
};

export default Analytic;
