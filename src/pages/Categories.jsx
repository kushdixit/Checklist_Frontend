import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { SearchList } from "redux/actions/checklist";
import { showAppLoader, hideAppLoader } from "redux/actions/loader";
import LandingCheckliCard from "components/LandingCheckliCard";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import {
  LandingContainer,
  NavSection,
  TextWrapper,
  LeftSection,
  RightSection,
  Listeners,
  SubMainSection,
  ImageSection,
  Text,
  CreateList,
} from "styles/pages/Category";

const Tags = [
  "Digital Marketing",
  "Startup",
  "Health and Fitness",
  "Gaming",
  "Kids",
  "Love",
  "Productivity",
  "Sports",
  "Tech",
  "Nil",
];

const Categories = () => {
  const { id: pathId } = useParams();
  const dispatch = useDispatch();
  const [Searched, setSearched] = useState("");

  const TagHandler = async () => {
    const response = await dispatch(SearchList(`?Name=${pathId}&Type=1`));
    dispatch(hideAppLoader());
    if (response.status === 200) {
      setSearched(response?.data);
    }
  };

  useEffect(() => {
    dispatch(showAppLoader());
    TagHandler();
  }, []);

  return (
    <LandingContainer>
      <NavSection>
        <Navbar search={true} navType="freeTemplate" />
      </NavSection>
      <SubMainSection>
        <TextWrapper>
          <h1>Startup Checklists</h1>
          <p
            style={{
              maxWidth: "600px",
              paddingBottom: "20px",
              marginBottom: "0px",
              lineHeight: "25px",
            }}
          >
            Free checklists templates for startups, entrepreneurs, and new
            businesses. Learn from the best experts in the world. You can
            download our checklist templates as free PDFs, or create an account
            and complete our templates the Checkli website or iOS mobile app.
          </p>
          <CreateList>
            <Link
              to={"/sign-in"}
              style={{ textDecoration: "none", color: "white" }}
            >
              Make a free checklist
            </Link>
          </CreateList>
        </TextWrapper>
        <div style={{ display: "flex" }}>
          <LeftSection>
            {Searched.length > 0 &&
              Searched?.map((item, id) => (
                <LandingCheckliCard key={id} data={item} index={id} />
              ))}
          </LeftSection>
          <RightSection>
            <Listeners>
              <ImageSection>
                <h4>Categories</h4>
              </ImageSection>
              {Tags?.map((item, id) => (
                <Link
                  to={`/categories/${item}`}
                  style={{ textDecoration: "none" }}
                  key={id}
                >
                  <Text>{item}</Text>
                </Link>
              ))}
              <ImageSection>
                <button className="button">See More</button>
              </ImageSection>
            </Listeners>
          </RightSection>
        </div>
      </SubMainSection>
      <Footer />
    </LandingContainer>
  );
};

export default Categories;
