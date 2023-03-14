import React from "react";
import Pdf from "react-to-pdf";
import {
  RightCardWrapper,
  RightContentWrapper,
} from "styles/pages/EditChecklist";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CopyChecklist } from "redux/actions/checklist/index";

const RightSectionCard = ({ pathId, reff }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const inCompleteTaskCount = useSelector(
    (state) => state.checklist?.inCompleteTaskCount
  );
  const userEmail = useSelector((state) => state.auth?.userData?.email);

  const CopyHandler = async () => {
    const res = await dispatch(CopyChecklist(pathId, userEmail));
    !res?.error && navigate(`/createChecklist/${res?.data?.data}`);
  };

  return (
    <RightCardWrapper>
      <RightContentWrapper>
        <div
          style={{
            fontWeight: "400",
            fontSize: "16px",
            lineHeight: "24px",
            marginBottom: "10px",
          }}
        >
          <strong>{inCompleteTaskCount}</strong> Task Left
        </div>
        <button
          style={{
            marginBottom: "10px",
            paddingBottom: "10px",
            paddingTop: "10px",
            border: 0,
            background: "white",
          }}
        >
          <div
            style={{
              color: "white",
              fontSize: "14px",
              borderRadius: "5px",
              background: "#1d2e88",
              minWidth: "160px",
              padding: "15px 25px",
              border: 0,
              opacity: "0.9",
            }}
          >
            Save
          </div>
        </button>
        <div>
          Unlock recurring team processes, task descriptions, embedding,
          publishing, PDFs, colloborating, and more.
        </div>
        <div style={{ display: "flex", gap: "5px", justifyContent: "center" }}>
          <button
            style={{
              marginBottom: "10px",
              paddingBottom: "5px",
              paddingTop: "5px",
              border: 0,
              borderRadius: "10px",
              cursor: "pointer",
              backgroundColor: "#f5f5f5",
            }}
          >
            <div
              style={{
                padding: "8px",
                textDecoration: "none",
                fontSize: "13px",
                color: "#333",
              }}
              onClick={CopyHandler}
            >
              duplicate
            </div>
          </button>
          <Pdf
            targetRef={reff}
            filename="checklist.pdf"
            x={0.5}
            y={0.5}
            scale={0.8}
          >
            {({ toPdf }) => (
              <button
                onClick={toPdf}
                style={{
                  marginBottom: "10px",
                  paddingBottom: "5px",
                  paddingTop: "5px",
                  border: 0,
                  cursor: "pointer",
                  borderRadius: "10px",
                  backgroundColor: "#f5f5f5",
                }}
              >
                <div
                  style={{
                    padding: "8px",
                    textDecoration: "none",
                    fontSize: "13px",
                    color: "#333",
                  }}
                >
                  pdf
                </div>
              </button>
            )}
          </Pdf>
        </div>
      </RightContentWrapper>
    </RightCardWrapper>
  );
};

export default RightSectionCard;
