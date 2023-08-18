import React, { useState, useEffect, lazy, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { showAppLoader, hideAppLoader } from "redux/actions/loader";
import { SearchList } from "redux/actions/checklist";
import { SET_SEARCH } from "redux/actions/action_types";
import {
  SearchWrapper,
  SearchText,
  SearchCardWrapper,
} from "styles/pages/Search";

const LandingCheckliCard = lazy(() => import("components/LandingCheckliCard"));

const Search = () => {
  const dispatch = useDispatch();
  const { state } = useLocation();
  const [count, setCount] = useState(1);
  const [Searched, setSearched] = useState([]);
  const [searchError, setSearchError] = useState(false);
  const { id } = useParams();

  const isLoading = useSelector((state) => state?.loader?.loaderVisible);

  const SearchHandler = async (title, type) => {
    const response = await dispatch(
      SearchList(`?Name=${title}&Type=${type}&Pagination=${count}`)
    );
    dispatch(hideAppLoader());
    if (response.status === 200) {
      setSearched((prev) => [...prev, ...response?.data]);
      if (searchError) setSearchError(false);
    }
    if (response.message.response.status === 404) {
      setSearchError(true);
    }
  };

  useEffect(() => {
    if (id !== undefined && id !== "") SearchHandler(id, 1);
    else if (state?.tagTerm !== undefined && state?.tagTerm !== "")
      SearchHandler(state?.tagTerm, 3);
    else dispatch(hideAppLoader());
  }, [id, state?.tagTerm, count]);

  useEffect(() => {
    dispatch(showAppLoader());
    return () => {
      dispatch({ type: SET_SEARCH, payload: "" });
      setCount(1);
      setSearched([]);
    };
  }, []);

  return (
    <SearchWrapper>
      <SearchText>Search Results</SearchText>
      <SearchCardWrapper>
        <Suspense fallback={<h1 className="fallback-css">Loading…</h1>}>
          {Searched.length > 0 &&
            Searched?.map((item, id) => (
              <LandingCheckliCard key={id} data={item} index={id} />
            ))}
        </Suspense>
      </SearchCardWrapper>
      {isLoading ? (
        <div style={{ color: "#007ccb", marginBottom: "10px" }}>Loading...</div>
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
    </SearchWrapper>
  );
};

export default Search;
