import React, { useState, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
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
  const dispatch = useDispatch();
  const [Searched, setSearched] = useState([]);
  const [count, setCount] = useState(1);
  const isLoading = useSelector((state) => state?.loader?.loaderVisible);

  useEffect(() => {
    if (Searched.length && count > 1) {
      let chatBox = document.getElementById(`card${count - 1 * 24}`);
      if (chatBox != null) chatBox.scrollIntoView();
      // else window.scrollTo(0, 0);
    } else {
      // window.scrollTo(0, 0);
    }
  }, [Searched]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    dispatch(showAppLoader());
    if (pathId === "New") ViewHandler(false);
    else if (pathId === "Popular") ViewHandler(true);
    else TagHandler();
  }, [count]);

  useEffect(() => {
    if (paramRef?.current !== pathId) {
      paramRef.current = pathId;
      TagHandler();
    }
    return () => {
      setCount(1);
      setSearched([]);
    };
  }, [pathId]);

  const TagHandler = async () => {
    const response = await dispatch(
      SearchList(`?Name=${pathId}&Type=1&SortBy=false&Pagination=${count}`)
    );
    dispatch(hideAppLoader());
    if (response.status === 200) {
      setSearched((prev) => [...prev, ...response?.data]);
    } else {
      setSearched([]);
    }
  };

  const ViewHandler = async (flag) => {
    const response = await dispatch(
      SearchList(`?SortBy=${flag}&Pagination=${count}`)
    );
    dispatch(hideAppLoader());
    if (response.status === 200) {
      setSearched((prev) => [...prev, ...response?.data]);
    } else {
      setSearched([]);
    }
  };

  return (
    <LandingContainer>
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
              {Searched.length > 0 &&
                Searched?.map((item, id) => (
                  <LandingCheckliCard
                    key={id}
                    data={item}
                    index={id}
                    id={`card${id}`}
                  />
                ))}
            </LeftSection>
            {isLoading ? (
              <div style={{ color: "#007ccb", marginBottom: "10px" }}>
                Loading...
              </div>
            ) : (
              <>
                {Searched?.length === 0 ? (
                  <div style={{ color: "#d65e5e" }}>No Record Found.</div>
                ) : (
                  <>
                    {Searched?.length % 24 === 0 ? (
                      <button
                        className="button"
                        onClick={() => setCount((prev) => prev + 1)}
                      >
                        See More
                      </button>
                    ) : (
                      <div style={{ color: "#d65e5e", marginBottom: "10px" }}>
                        End of List!
                      </div>
                    )}
                  </>
                )}
              </>
            )}
          </div>
          <SideTags />
        </div>
      </SubMainSection>
      <Footer />
    </LandingContainer>
  );
};

export default Categories;
