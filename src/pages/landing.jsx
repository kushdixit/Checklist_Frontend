import React, { useEffect, Suspense, lazy, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { showAppLoader, hideAppLoader } from "redux/actions/loader";
import { getAllTemplate } from "redux/actions/template";
import { SearchList } from "redux/actions/checklist";
import Navbar from "components/Navbar";
import Button from "components/Button";
import Footer from "components/Footer";
import LandingCheckliCard from "components/LandingCheckliCard";
import {
  LandingContainer,
  Heading,
  NavSection,
  ChecklistButton,
  SecondHeading,
  LandingCardSection,
  UpperContentWrapper,
  LandingChecklistCardSection,
  ButtonSection,
  ChecklistImage,
  Wrapper,
} from "styles/pages/Landing";
import {
  FirstSection,
  SeeMoreWrapper,
  CardMainSection,
  SeeMore,
} from "styles/components/Card";

import Screenshot from "assets/images/Screenshot.png";

const LandingCard = lazy(() => import("components/LandingCard"));

const Tags = ["New", "Yoga", "Test", "Monday", "Education"];

const Landing = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const allTemplate = useSelector((state) => state.Template?.allTemplate);
  const [Popular, setPopular] = useState([]);

  const [searchError, setSearchError] = useState(false);

  useEffect(() => {
    // const token = localStorage.getItem("access_token");
    // if (token) navigate("/dashboard");
    // else navigate("/landing");
    dispatch(getAllTemplate());
    dispatch(showAppLoader());
    SearchHandler(true);
    dispatch(hideAppLoader());
  }, []);

  const SearchHandler = async (flag) => {
    const response = await dispatch(SearchList(`?SortBy=${flag}`));
    dispatch(hideAppLoader());
    console.log("response?.data", response?.data);
    if (response.status === 200) {
      if (searchError) setSearchError(false);
      setPopular(response?.data);
    }
    if (response.message.response.status === 404) {
      setSearchError(true);
    }
  };

  if (allTemplate.includes("<!DOCTYPE html>")) return <div>Loading...</div>;

  return (
    <LandingContainer>
      <UpperContentWrapper>
        <NavSection>
          <Navbar search={true} navType="home" />
        </NavSection>
        <Wrapper>
          <Heading>
            Make your checklists,
            <br />
            and browse through them.
          </Heading>
          <h3
            style={{
              padding: "10px 0px 30px 0px",
              fontSize: "20px",
              lineHeight: "31px",
              margin: "0px",
              fontWeight: 500,
            }}
          >
            Organize your mind or scale your bussiness the right way,every time.
          </h3>
          <ChecklistButton>
            <Button
              className="button"
              handleClick={() =>
                localStorage.getItem("access_token")
                  ? navigate("/createChecklist")
                  : navigate("/sign-in", {
                      state: { redirect: "/createChecklist" },
                    })
              }
            >
              Make a free checklist
            </Button>
          </ChecklistButton>
          <h1
            style={{ cursor: "pointer", margin: "50px 0px" }}
            onClick={() =>
              localStorage.getItem("access_token")
                ? navigate("/dashboard")
                : navigate("/sign-in", {
                    state: { redirect: "/dashboard" },
                  })
            }
          >
            Browse Your Checklist
          </h1>
          <div
            style={{
              width: "100%",
              borderBottom: "1px solid #eaeaea",
              marginBottom: "100px",
            }}
          >
            <ChecklistImage
              src={Screenshot}
              // src="https://www.checkli.com/app/css/images/free-list-maker.png"
              alt="Share"
            />
          </div>
          <SecondHeading>How it works</SecondHeading>
          <p style={{ paddingBottom: "50px" }}>
            Organize your mind or scale your bussiness the right way,every time.
          </p>
          <LandingCardSection>
            <Suspense fallback={<h1>Loading…</h1>}>
              <LandingCard />
            </Suspense>
          </LandingCardSection>
          <LandingChecklistCardSection>
            <h5>Free Template Library</h5>
            <p>
              Copy, edit, and use thousands of free checklists and business
              processes for free.
            </p>
            <ButtonSection>
              {Tags?.map((item) => (
                <button
                  className="button"
                  onClick={() => {
                    navigate(`/categories/${item}`);
                  }}
                >
                  {item}
                </button>
              ))}
            </ButtonSection>
            <MiniCardWrapper data={Popular} title="popular" />
          </LandingChecklistCardSection>
        </Wrapper>
      </UpperContentWrapper>
      <Footer />
    </LandingContainer>
  );
};

const MiniCardWrapper = ({ data, title }) => {
  const navigate = useNavigate();
  return (
    <>
      <CardMainSection>
        <div style={{ marginTop: "25px", width: "100%", display: "flex" }}>
          <h2
            style={{
              paddingBottom: "10px",
              marginLeft: "8px",
              fontWeight: "600",
            }}
          >
            Popular
          </h2>
        </div>
        <FirstSection>
          {data
            ?.filter((subItem) => subItem.isActive)
            ?.filter((item, index) => index < 9)
            .map((subItem) => {
              return <LandingCheckliCard data={subItem} />;
            })}
        </FirstSection>
        <SeeMoreWrapper>
          <SeeMore
            onClick={() => {
              navigate(`/explore/New`);
            }}
          >
            See More
          </SeeMore>
        </SeeMoreWrapper>
      </CardMainSection>
    </>
  );
};

export default Landing;
