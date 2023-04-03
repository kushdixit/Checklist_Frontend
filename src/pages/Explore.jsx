import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SearchList } from "redux/actions/checklist";
import { showAppLoader, hideAppLoader } from "redux/actions/loader";
import { SET_SEARCH } from "redux/actions/action_types";
import Navbar from "components/Navbar";
import LandingCheckliCard from "components/LandingCheckliCard";
import TextInput from "components/FormElements/TextInput";
import SideTags from "components/SideTags";
import Footer from "components/Footer";
import {
  LandingContainer,
  NavSection,
  IconInputFieldNew,
  SearchSection,
  LeftSection,
  SubMainSection,
  SeeMore,
  SeeMoreWrapper,
} from "styles/pages/Explore";

const Explore = (search) => {
  const dispatch = useDispatch();
  const [updateSearch, SetUpdateSearch] = useState("");
  const navigate = useNavigate();
  const [Popular, setPopular] = useState([]);
  const [New, setNew] = useState([]);

  const ListHandler = async () => {
    const response = await dispatch(SearchList(`?SortBy=true`));
    dispatch(hideAppLoader());
    if (response.status === 200) {
      setPopular(response?.data);
    } else {
      setPopular([]);
    }
  };

  const NewListHandler = async () => {
    const response = await dispatch(SearchList(`?SortBy=false`));
    dispatch(hideAppLoader());
    if (response.status === 200) {
      setNew(response?.data);
    } else {
      setNew([]);
    }
  };

  useEffect(() => {
    dispatch(showAppLoader());
    ListHandler();
    NewListHandler();
  }, []);

  const { handleSubmit: submitData, control: formControl } = useForm({
    mode: "onSubmit",
    reValidateMode: "onBlur",
  });

  const searchData = (data) => {
    dispatch({ type: SET_SEARCH, payload: data?.listSearch });
    navigate(`/search/${data?.listSearch}`, {
      state: { searchedterm: data?.listSearch, tagTerm: "" },
    });
  };

  const handleKeyDown = (e) => {
    if (e.key === "Backspace") {
      SetUpdateSearch((prev) => prev.slice(0, -1));
    }
  };

  useEffect(() => {
    if (updateSearch === "") {
      dispatch({ type: SET_SEARCH, payload: "" });
    } else dispatch({ type: SET_SEARCH, payload: updateSearch });
  }, [updateSearch]);

  return (
    <LandingContainer>
      <NavSection>
        <Navbar search={true} navType="freeTemplate" />
      </NavSection>
      <h1>Free Template Library</h1>
      <p>
        Explore thousands of free checklist and business process templates.
        Copy, complete, or download for free.
      </p>
      <SearchSection>
        {search && (
          <form onSubmit={submitData(searchData)}>
            <IconInputFieldNew>
              <TextInput
                name="listSearch"
                type="text"
                placeholder="Search"
                control={formControl}
                handleKeyDown={handleKeyDown}
                handlekeyPress={(e) => {
                  SetUpdateSearch((prev) => prev + e.key);
                }}
              />
            </IconInputFieldNew>
          </form>
        )}
      </SearchSection>
      <SubMainSection>
        <div>
          <MiniCardWrapper data={Popular} title="Popular" />
          <MiniCardWrapper data={New} title="New" />
        </div>
        <SideTags />
      </SubMainSection>
      <Footer />
    </LandingContainer>
  );
};

const MiniCardWrapper = ({ data, title }) => {
  return (
    <>
      <LeftSection>
        <div
          style={{
            marginTop: "25px",
            width: "100%",
            display: "flex",
          }}
        >
          <h4
            style={{
              paddingBottom: "20px",
              fontWeight: "400",
            }}
          >
            {title} Checklists
          </h4>
        </div>
        {data.length > 0 ? (
          data
            ?.filter((item, index) => index <= 8)
            ?.map((item) => <LandingCheckliCard data={item} />)
        ) : (
          <div style={{ color: "#d65e5e" }}>No Record Found.</div>
        )}
        {data.length > 0 && (
          <SeeMoreWrapper>
            <SeeMore href={`/explore/${title}`}>See More</SeeMore>
          </SeeMoreWrapper>
        )}
      </LeftSection>
    </>
  );
};

export default Explore;
