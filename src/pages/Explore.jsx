import React, { useState, useEffect, lazy, Suspense } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SearchList } from "redux/actions/checklist";
import { showAppLoader, hideAppLoader } from "redux/actions/loader";
import { SET_SEARCH } from "redux/actions/action_types";
import {
  LandingContainer,
  NavSection,
  IconInputFieldNew,
  SearchSection,
  SubMainSection,
} from "styles/pages/Explore";

const Navbar = lazy(() => import("components/Navbar"));
const MiniCardWrapper = lazy(() => import("components/MiniCardWrapper"));
const TextInput = lazy(() => import("components//FormElements/TextInput"));
const SideTags = lazy(() => import("components/SideTags"));
const Footer = lazy(() => import("components/Footer"));

const Explore = (search) => {
  const dispatch = useDispatch();
  const [updateSearch, SetUpdateSearch] = useState("");
  const isUserActive = useSelector((state) => state?.auth?.userData?.email);

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
        <Suspense fallback={<h1 className="fallback-css">Loading…</h1>}>
          <Navbar search={true} navType="freeTemplate" />
        </Suspense>
      </NavSection>
      <h1>Free Template Library</h1>
      <p>
        Explore thousands of free checklist and business process templates.
        Copy, complete, or download for free.
      </p>
      <SearchSection>
        {!isUserActive && (
          <>
            {search && (
              <form onSubmit={submitData(searchData)}>
                <IconInputFieldNew>
                  <Suspense
                    fallback={<h1 className="fallback-css">Loading…</h1>}
                  >
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
                  </Suspense>
                </IconInputFieldNew>
              </form>
            )}
          </>
        )}
      </SearchSection>
      <SubMainSection>
        <div>
          <Suspense fallback={<h1 className="fallback-css">Loading…</h1>}>
            <MiniCardWrapper data={Popular} title="Popular" />
          </Suspense>
          <Suspense fallback={<h1 className="fallback-css">Loading…</h1>}>
            <MiniCardWrapper data={New} title="New" />
          </Suspense>
        </div>
        <Suspense fallback={<h1 className="fallback-css">Loading…</h1>}>
          <SideTags />
        </Suspense>
      </SubMainSection>
      <Suspense fallback={<h1 className="fallback-css">Loading…</h1>}>
        <Footer />
      </Suspense>
    </LandingContainer>
  );
};

export default Explore;
