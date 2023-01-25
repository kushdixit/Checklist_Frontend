import React from "react";
import {
  RightCardWrapper,
  RightContentWrapper,
} from "styles/pages/EditChecklist";

const RightSectionCard = () => {
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
          <strong>40</strong> Task Left
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
              background: "#ec4e20",
              minWidth: "160px",
              padding: "15px 25px",
              border: 0,
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
              duplicate
            </div>
          </button>
          <button
            style={{
              marginBottom: "10px",
              paddingBottom: "5px",
              paddingTop: "5px",
              border: 0,
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
        </div>
      </RightContentWrapper>
    </RightCardWrapper>
  );
};

export default RightSectionCard;
