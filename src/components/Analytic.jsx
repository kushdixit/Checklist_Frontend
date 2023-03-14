import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllTemplate, getAllTemplateByEmail } from "redux/actions/template";
import { deleteChecklist, PinChecklist } from "redux/actions/checklist/index";
import {
  LandingContainer,
  RightContainer,
  FirstSection,
  SecondSection,
  WrapperSection,
  ThirdSection,
  FourthSection,
  IconInputFieldNew,
} from "styles/components/Analytic";
import { useNavigate } from "react-router-dom";
import Share from "assets/images/share.png";
import ChartPie from "assets/images/chart-pie.png";
import Trash from "assets/images/trash.png";
import Star from "assets/SVG/Star";
import StarGrey from "assets/SVG/StarGrey";
const Analytic = () => {
  const [search, setSearch] = useState("");
  const [details, setDetails] = useState([]);
  const dispatch = useDispatch();
  const templateData = useSelector((state) => state.Template?.yourTemplate);

  useEffect(() => {
    dispatch(getAllTemplate());
  }, []);

  useEffect(() => {
    if (templateData[0]?.checklists) {
      setDetails(templateData[0]?.checklists);
    }
  }, [templateData[0]?.checklists]);

  useEffect(() => {
    if (search !== "") {
      const data = templateData[0]?.checklists?.filter((item) => {
        if (item?.checklistName?.toLowerCase()?.includes(search?.toLowerCase()))
          return item;
      });
      setDetails(data);
    } else {
      setDetails(templateData[0]?.checklists);
    }
  }, [search]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e?.target?.value);
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
            ?.filter((item, index) => index <= 9)
            .map((item) => (
              <ChecklistWrapper data={item} />
            ))}
        </WrapperSection>
      </RightContainer>
    </LandingContainer>
  );
};

const ChecklistWrapper = ({ data }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userEmail = useSelector((state) => state.auth?.userData?.email);

  const DeleteChecklist = async () => {
    const res = await dispatch(deleteChecklist(data?.id));
    if (res.status === 204) {
      dispatch(getAllTemplateByEmail(userEmail));
    }
  };

  const PinnedHandler = () => {
    dispatch(PinChecklist(data?.id, !data?.pinned));
  };

  return (
    <FourthSection>
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
            }}
            onClick={() => {
              navigate(`/temp/${data?.id}`, {
                state: { showEditable: false, cardType: "user" },
              });
            }}
          >
            {data?.checklistName}
          </div>
        </li>
        <li>
          <img src={Share} alt="Share" />
        </li>
        <li>
          <img src={ChartPie} alt="ChartPie" />
        </li>
        <li onClick={DeleteChecklist}>
          <img src={Trash} alt="Trash" />
        </li>
      </ul>
    </FourthSection>
  );
};

export default Analytic;
