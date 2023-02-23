import React from "react";
import CheckliCard from "components/CheckliCard";
import { CheckliCardSection, CardSection } from "styles/components/CheckliCard";

const CheckliCardWrapper = ({ data }) => {
  return (
    <CardSection>
      <h4>{data?.templateName}</h4>
      <CheckliCardSection style={{ display: "flex" }}>
        {data?.checklists?.map((item) => (
          <CheckliCard data={item} />
        ))}
      </CheckliCardSection>
    </CardSection>
  );
};

export default CheckliCardWrapper;
