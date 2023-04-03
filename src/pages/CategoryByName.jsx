import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { SearchList } from "redux/actions/checklist";
import { showAppLoader, hideAppLoader } from "redux/actions/loader";
import LandingCheckliCard from "components/LandingCheckliCard";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import TextInput from "components/FormElements/TextInput";
import { SET_SEARCH } from "redux/actions/action_types";
import {
  LandingContainer,
  NavSection,
  LeftSection,
  SubMainSection,
  IconInputFieldNew,
  SearchSection,
} from "styles/pages/CategoryByName";

const CategoryByName = () => {
  const { id: pathId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [updateSearch, SetUpdateSearch] = useState("");
  const [Searched, setSearched] = useState([]);
  const [count, setCount] = useState(1);
  const isLoading = useSelector((state) => state?.loader?.loaderVisible);

  useEffect(() => {
    if (Searched.length && count > 1) {
      let chatBox = document.getElementById(`card${count - 1 * 24}`);
      console.log("chatBox", chatBox);
      if (chatBox != null) chatBox.scrollIntoView();
    } else {
    }
  }, [Searched]);

  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {
      setCount(1);
      setSearched([]);
    };
  }, []);

  useEffect(() => {
    dispatch(showAppLoader());
    if (pathId === "New") ViewHandler(false);
    else ViewHandler(true);
  }, [count]);

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

  useEffect(() => {
    if (updateSearch === "") {
      dispatch({ type: SET_SEARCH, payload: "" });
    } else dispatch({ type: SET_SEARCH, payload: updateSearch });
  }, [updateSearch]);

  return (
    <LandingContainer>
      <NavSection>
        <Navbar search={true} navType="home" />
      </NavSection>
      <SubMainSection>
        <SearchSection>
          <form onSubmit={submitData(searchData)}>
            <IconInputFieldNew>
              <TextInput
                name="listSearch"
                type="text"
                placeholder="Search templates"
                control={formControl}
                handleKeyDown={handleKeyDown}
                handlekeyPress={(e) => {
                  SetUpdateSearch((prev) => prev + e.key);
                }}
              />
            </IconInputFieldNew>
          </form>
        </SearchSection>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div style={{ paddingTop: "75px" }}>
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
        </div>
      </SubMainSection>
      <Footer />
    </LandingContainer>
  );
};

export default CategoryByName;
