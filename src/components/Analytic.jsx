import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import TextInput from "components/FormElements/TextInput";
import { getAllTemplate, getAllTemplateByEmail } from "redux/actions/template";
import { deleteChecklist } from "redux/actions/checklist/index";
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
// import { IconInputFieldNew } from "styles/components/Navbar";

const Analytic = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const templateData = useSelector((state) => state.Template?.yourTemplate);

  useEffect(() => {
    dispatch(getAllTemplate());
  }, []);

  const {
    handleSubmit: submitData,
    control: formControl,
    watch,
    reset,
  } = useForm({
    mode: "onSubmit",
    reValidateMode: "onBlur",
  });

  const searchData = (data) => {
    console.log("data", data);
    // dispatch({ type: SET_SEARCH, payload: data?.listSearch });
    // navigate(`/search/${data?.listSearch}`, {
    //   state: { searchedterm: data?.listSearch },
    // });
  };

  return (
    <LandingContainer>
      <RightContainer>
        <WrapperSection>
          <FirstSection>My Dashboard</FirstSection>
          <SecondSection>
            All of your checklists, processes and templates.Help Video
          </SecondSection>
          {/* <form onSubmit={submitData(searchData)}> */}
          <IconInputFieldNew>
            <TextInput
              control={formControl}
              name="listSearch"
              type="text"
              placeholder="Search"
              onChange={(e) => console.log(e)}
            />
          </IconInputFieldNew>
          {/* </form> */}
          <ThirdSection>
            <ul>
              <li>Name</li>
              <li>Share</li>
              <li>Insights</li>
              <li>Delete</li>
            </ul>
          </ThirdSection>
          {templateData[0]?.checklists
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
  return (
    <FourthSection>
      <ul>
        <li>
          <Star />{" "}
          <div
            style={{
              cursor: "pointer",
              textDecoration: "underline",
              textAlign: "left",
            }}
            onClick={() => {
              navigate(`/createChecklist/${data?.id}`, {
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
