import React, { useEffect, Suspense, lazy, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { showAppLoader, hideAppLoader } from "redux/actions/loader";
import { getAllTemplate } from "redux/actions/template";
import { SearchList } from "redux/actions/checklist";
import Button from "components/Button";
import Navbar from "components/Navbar";
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
  SeeMoreWrapper,
  CardMainSection,
  SeeMore,
} from "styles/components/Card";
import { FirstSection } from "styles/components/ClientCard";
import preview from "assets/images/preview.webp";

const LandingCard = lazy(() => import("components/LandingCard"));
const Footer = lazy(() => import("components/Footer"));

const Tags = ["New", "Yoga", "Test", "Monday", "Education"];

const Landing = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [Popular, setPopular] = useState([]);
  const [searchError, setSearchError] = useState(false);

  useEffect(() => {
    dispatch(getAllTemplate());
    dispatch(showAppLoader());
    SearchHandler(true);
    dispatch(hideAppLoader());
  }, []);

  const SearchHandler = async (flag) => {
    const response = await dispatch(SearchList(`?SortBy=${flag}`));
    dispatch(hideAppLoader());
    if (response.status === 200) {
      if (searchError) setSearchError(false);
      setPopular(response?.data);
    }
    if (response?.message?.response?.status === 404) {
      setSearchError(true);
    }
  };

  return (
    <LandingContainer>
      <UpperContentWrapper>
        <NavSection>
          <Suspense fallback={<h1 className="fallback-css">Loading…</h1>}>
            <Navbar search={true} navType="home" />
          </Suspense>
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
              src={preview}
              alt="Share"
              width={"800"}
              height={"600"}
            />
          </div>
          <SecondHeading>How it works</SecondHeading>
          <p style={{ paddingBottom: "50px" }}>
            Organize your mind or scale your bussiness the right way,every time.
          </p>
          <LandingCardSection>
            <Suspense fallback={<h1 className="fallback-css">Loading…</h1>}>
              <LandingCard />
            </Suspense>
          </LandingCardSection>
          <LandingChecklistCardSection>
            <h3>Free Template Library</h3>
            <p>
              Copy, edit, and use thousands of free checklists and business
              processes for free.
            </p>
            {Popular.length > 0 ? (
              <>
                <ButtonSection>
                  {Tags?.map((item, id) => (
                    <Link
                      className="button"
                      to={`/categories/${item}`}
                      key={id}
                    >
                      {item}
                    </Link>
                  ))}
                </ButtonSection>
                <MiniCardWrapper data={Popular} title="popular" />
              </>
            ) : (
              <div>Loading...</div>
            )}
          </LandingChecklistCardSection>
        </Wrapper>
      </UpperContentWrapper>
      <Suspense fallback={<h1 className="fallback-css">Loading…</h1>}>
        <Footer />
      </Suspense>
    </LandingContainer>
  );
};

const MiniCardWrapper = ({ data }) => {
  return (
    <>
      <CardMainSection>
        <div style={{ width: "100%", display: "flex" }}>
          <h2
            style={{
              margin: "0px",
              fontWeight: "600",
            }}
          >
            Popular
          </h2>
        </div>
        <Suspense fallback={<h1 className="fallback-css">Loading…</h1>}>
          <>
            <FirstSection
              itemscope
              itemtype="https://schema.org/BreadcrumbList"
            >
              {data
                ?.filter((subItem) => subItem.isActive)
                ?.filter((item, index) => index < 9)
                .map((subItem, id) => {
                  return <LandingCheckliCard data={subItem} key={id} />;
                })}
            </FirstSection>
            <SeeMoreWrapper>
              <SeeMore to="/explore/New">See More</SeeMore>
            </SeeMoreWrapper>
          </>
        </Suspense>
      </CardMainSection>
    </>
  );
};

export default Landing;
