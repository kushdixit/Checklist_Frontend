import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { BodyContainer } from "styles/pages/Dashboard";
import Navbar from "../components/Navbar";
import YourSearch from "components/YourSearch";
import Card from "components/Card";
import FirstImage from "assets/images/checklist.svg";
import {
  FirstSection,
  NewSection,
  SubSectionNew,
  CardMainSection,
} from "styles/components/Card";

const Search = () => {
  const [searchedData, setSearchedData] = useState([]);
  const navigate = useNavigate();
  const { state } = useLocation();
  const allTemplate = useSelector((state) => state.Template?.allTemplate);
  const yourTemplate = useSelector((state) => state.Template?.yourTemplate);
  const searchedterm = state?.searchedterm;

  useEffect(() => {
    const res = localStorage.getItem("access_token");
    if (!res) navigate("/");
  }, []);

  useEffect(() => {
    if (searchedterm?.length != 0) {
      const userCreated = yourTemplate[0].checklists
        ?.filter((item) => {
          return item.checklistName
            .toLowerCase()
            .includes(searchedterm?.toLowerCase());
        })
        .map((item) => {
          return { ...item, cardType: "user" };
        });

      const default1 = allTemplate[0].checklists
        ?.filter((item) => {
          return item.checklistName
            .toLowerCase()
            .includes(searchedterm?.toLowerCase());
        })
        .map((item) => {
          return { ...item, cardType: "default" };
        });

      const default2 = allTemplate[1].checklists
        ?.filter((item) => {
          return item.checklistName
            .toLowerCase()
            .includes(searchedterm?.toLowerCase());
        })
        .map((item) => {
          return { ...item, cardType: "default" };
        });

      setSearchedData([...default1, ...default2, ...userCreated]);
    } else setSearchedData([]);
  }, []);

  return (
    <BodyContainer>
      <Navbar search={false} buttonType="Create List" addButton={true} />
      {/* {searchedData && (
        <YourSearch searchedData={searchedData} searchedterm={searchedterm} />
      )} */}
      <SubSectionNew>
        <h2>You Searched for "{searchedterm}"</h2>
      </SubSectionNew>
      <Searched item={yourTemplate[0]} searchedterm={searchedterm} />
      {allTemplate?.map((item) => (
        <Searched item={item} searchedterm={searchedterm} />
      ))}
      {searchedData.length === 0 && (
        <div style={{ display: "flex", justifyContent: "center", flex: 1 }}>
          <div>{searchedterm} not found!</div>
        </div>
      )}
    </BodyContainer>
  );
};

const Searched = ({ item, searchedterm }) => {
  const [searchedData, setSearchedData] = useState([]);

  const Checklist = [
    { id: 1, time: "3:25 p.m", image: FirstImage },
    { id: 2, time: "3:25 p.m", image: FirstImage },
    { id: 3, time: "3:25 p.m", image: FirstImage },
    { id: 4, time: "3:25 p.m", image: FirstImage },
  ];

  useEffect(() => {
    console.log(item);
    const filteredData = item.checklists
      ?.filter((item) => {
        return item.checklistName
          .toLowerCase()
          .includes(searchedterm?.toLowerCase());
      })
      .map((item) => {
        return { ...item, cardType: "user" };
      });
    setSearchedData(filteredData);
  }, []);

  console.log(searchedData);

  return (
    <>
      {searchedData.length !== 0 && (
        <>
          <NewSection>
            <SubSectionNew>
              <h2>{item?.templateName}</h2>
            </SubSectionNew>
          </NewSection>

          <CardMainSection>
            <FirstSection>
              {searchedData
                ?.filter((subItem) => subItem.isActive)
                .map((subItem, index) => {
                  return (
                    <Card
                      key={index}
                      index={index}
                      item={subItem}
                      Checklist={Checklist}
                      showEditable={true}
                      cardType={subItem.cardType}
                    />
                  );
                })}
            </FirstSection>
          </CardMainSection>
        </>
      )}
    </>
  );
};
export default Search;
