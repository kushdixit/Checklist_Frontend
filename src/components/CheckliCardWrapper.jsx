import React from "react";
import CheckliCard from "components/CheckliCard";

const CheckliCardWrapper = ({ data }) => {
  return (
    <div>
      <h4>{data?.templateName}</h4>
      <div style={{ display: "flex" }}>
        {data?.checklists?.map((item) => (
          <CheckliCard data={item} />
        ))}
      </div>
    </div>
  );
};
export default CheckliCardWrapper;
