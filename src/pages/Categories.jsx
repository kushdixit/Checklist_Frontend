import React, { useState, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { SearchList } from "redux/actions/checklist";
import { showAppLoader, hideAppLoader } from "redux/actions/loader";
import LandingCheckliCard from "components/LandingCheckliCard";
import Navbar from "components/Navbar";
import SideTags from "components/SideTags";
import Footer from "components/Footer";
import {
  LandingContainer,
  NavSection,
  TextWrapper,
  LeftSection,
  SubMainSection,
  CreateList,
} from "styles/pages/Category";

const Categories = () => {
  const { id: pathId } = useParams();
  const paramRef = useRef(pathId);
  const abcd = useRef(null);
  const dispatch = useDispatch();
  const [Searched, setSearched] = useState("");
  const [count, setCount] = useState(1);

  const TagHandler = async () => {
    const response = await dispatch(
      SearchList(`?Name=${pathId}&Type=1&SortBy=false&Pagination=${count}`)
    );
    dispatch(hideAppLoader());
    if (response.status === 200) {
      setSearched(response?.data);
    } else {
      setSearched([]);
    }
  };

  useEffect(() => {
    let chatBox = document.getElementById(`card${count * 24}`);
    if (chatBox != null) chatBox.scrollIntoView();
    abcd?.current?.scrollIntoView();
  }, [Searched]);

  const ViewHandler = async (flag) => {
    const response = await dispatch(
      SearchList(`?SortBy=${flag}&Pagination=${count}`)
    );
    dispatch(hideAppLoader());
    if (response.status === 200) {
      setSearched(response?.data);
    } else {
      setSearched([]);
    }
  };

  useEffect(() => {
    dispatch(showAppLoader());
    if (pathId === "New" || pathId === "Popular") {
      if (pathId === "New") ViewHandler(false);
      else ViewHandler(true);
    } else TagHandler();
  }, [count]);

  useEffect(() => {
    if (paramRef?.current !== pathId) {
      paramRef.current = pathId;
      TagHandler();
    }
  }, [pathId]);

  return (
    <LandingContainer ref={abcd}>
      <NavSection>
        <Navbar search={true} navType="home" />
      </NavSection>
      <SubMainSection>
        <TextWrapper>
          <h1>{pathId} Checklists</h1>
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
        <div
          style={{
            display: "flex",
            width: "90%",
            justifyContent: "space-between",
          }}
        >
          <div style={{ paddingTop: "75px" }}>
            <h4
              style={{
                margin: "0px 0px 20px 10px",
                display: "flex",
                alignItems: "flex-start",
              }}
            >
              New Checklists
            </h4>
            <LeftSection>
              {Searched.length > 0 ? (
                Searched?.map((item, id) => (
                  <LandingCheckliCard
                    key={id}
                    data={item}
                    index={id}
                    id={`card${id}`}
                  />
                ))
              ) : (
                <div style={{ color: "#d65e5e" }}>No Record Found.</div>
              )}
            </LeftSection>
            <button
              className="button"
              onClick={() => setCount((prev) => prev + 1)}
            >
              See More
            </button>
          </div>
          <SideTags />
        </div>
      </SubMainSection>
      <Footer />
    </LandingContainer>
  );
};

export default Categories;
