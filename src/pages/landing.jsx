import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Button from "components/Button";
import { useSelector, useDispatch } from "react-redux";
import { getAllTemplate } from "redux/actions/template";
import ChecklistCards from "../components/ChecklistCards";
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
} from "styles/pages/Landing";
import LandingCard from "../components/LandingCard";
import Footer from "components/Footer";

const Landing = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const allTemplate = useSelector((state) => state.Template?.allTemplate);
  useEffect(() => {
    // const token = localStorage.getItem("access_token");
    // if (token) navigate("/dashboard");
    // else navigate("/landing");
    dispatch(getAllTemplate());
  }, []);

  return (
    <LandingContainer>
      <UpperContentWrapper>
        <NavSection>
          <Navbar search={true} navType="home" />
        </NavSection>
        <div
          style={{
            paddingTop: "50px",
            paddingBottom: "170px",
          }}
        >
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
          <SecondHeading>How it works</SecondHeading>
          <p style={{ paddingBottom: "50px" }}>
            Organize your mind or scale your bussiness the right way,every time.
          </p>
          <LandingCardSection>
            <LandingCard />
          </LandingCardSection>
          <LandingChecklistCardSection>
            <h5>Free Template Library</h5>
            <p>
              Copy, edit, and use thousands of free checklists and business
              processes for free.
            </p>
            <ButtonSection>
              <button className="button">New</button>{" "}
              <button className="button">Digital Marketing</button>
              <button className="button">Education</button>
              <button className="button">HR</button>
              <button className="button">Business</button>
              <button className="button">Real Estate</button>
              <button className="button">Start Up</button>
            </ButtonSection>
            {allTemplate?.map((item, id) => (
              <ChecklistCards key={id} item={item} />
            ))}
          </LandingChecklistCardSection>
        </div>
      </UpperContentWrapper>
      <Footer />
    </LandingContainer>
  );
};

export default Landing;
