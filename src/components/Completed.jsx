import React, { useEffect, useState } from "react";
import { useLocation, Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  LandingContainer,
  RightContainer,
  WrapperSection,
  FirstSection,
  ThirdSection,
  FourthSection,
} from "styles/components/insights";

const Completed = () => {
  const { pathname } = useLocation();
  const { id: pathId } = useParams();
  const [cards, setCards] = useState([]);
  const ChecklistDetail = useSelector((state) =>
    pathId ? state.checklist : null
  );
  // console.log("ChecklistDetail", ChecklistDetail);

  useEffect(() => {
    const data = ChecklistDetail?.checklistMasterCopyRelations?.map(
      (item, id) => {
        if (pathname.includes("progress")) return item?.isDone === false;
        else return item?.isDone === true;
      }
    );
    console.log("data", data);
  }, [pathname]);

  return (
    <LandingContainer>
      <RightContainer>
        <WrapperSection>
          <FirstSection>
            {pathname.includes("progress") ? "Progress" : "Completed"}
          </FirstSection>
          <ThirdSection>
            <ul>
              <li>
                {pathname.includes("progress") ? "Started" : "Completed"} By
              </li>
              <li>Date Completed</li>
              <li style={{ width: "20%" }}>Additional Notes</li>
              <li>Link</li>
            </ul>
          </ThirdSection>
          {pathname.includes("progress") ? (
            <>
              {ChecklistDetail?.checklistMasterCopyRelations
                ?.filter((item) => item?.isDone === false)
                ?.map((item, id) => (
                  <ChecklistWrapper pathId={pathId} data={item} key={id} />
                ))}
            </>
          ) : (
            <>
              {ChecklistDetail?.checklistMasterCopyRelations
                ?.filter((item) => item?.isDone === true)
                ?.map((item, id) => (
                  <ChecklistWrapper pathId={pathId} data={item} key={id} />
                ))}
            </>
          )}
        </WrapperSection>
      </RightContainer>
    </LandingContainer>
  );
};

const ChecklistWrapper = ({ data, pathId }) => {
  console.log("data", data, pathId);

  return (
    <FourthSection>
      {/* {contextHolder} */}
      <ul>
        <li>
          <div>{data?.name}</div>
        </li>
        <li>
          <div>{data?.dateCreated}</div>
        </li>
        <li style={{ width: "20%" }}>
          <p>{data?.notes}</p>
        </li>
        <li>
          <Link to={{ pathname: `/view/process/${pathId}` }} state={data}>
            <div>View Process</div>
          </Link>
        </li>
      </ul>
    </FourthSection>
  );
};

export default Completed;





