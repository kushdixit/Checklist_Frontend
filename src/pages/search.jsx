import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { showAppLoader, hideAppLoader } from "redux/actions/loader";
import { SearchList } from "redux/actions/checklist";
import { SET_SEARCH } from "redux/actions/action_types";
import LandingCheckliCard from "components/LandingCheckliCard";
import {
  SearchWrapper,
  SearchText,
  SearchCardWrapper,
} from "styles/pages/Search";

const Search = () => {
  const dispatch = useDispatch();
  const { state } = useLocation();
  const [Searched, setSearched] = useState("");
  const [searchError, setSearchError] = useState(false);
  const searchedterm = state?.searchedterm;

  const SearchHandler = async () => {
    const response = await dispatch(SearchList(`?Name=${searchedterm}&Type=1`));
    dispatch(hideAppLoader());
    if (response.status === 200) {
      setSearched(response?.data);
      if (searchError) setSearchError(false);
    }
    if (response.message.response.status === 404) {
      setSearchError(true);
    }
  };

  useEffect(() => {
    if (searchedterm !== undefined && searchedterm !== "") SearchHandler();
    else dispatch(hideAppLoader());
  }, [searchedterm]);

  useEffect(() => {
    dispatch(showAppLoader());
    return () => {
      dispatch({ type: SET_SEARCH, payload: "" });
      console.log("returned");
    };
  }, []);

  return (
    <SearchWrapper>
      <SearchText>Search Results</SearchText>
      <SearchCardWrapper>
        {Searched.length > 0 &&
          Searched?.map((item, id) => (
            <LandingCheckliCard key={id} data={item} index={id} />
          ))}
      </SearchCardWrapper>
    </SearchWrapper>
  );
};

export default Search;
