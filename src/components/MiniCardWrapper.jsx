import React, { lazy, Suspense } from "react";
import { LeftSection, SeeMore, SeeMoreWrapper } from "styles/pages/Explore";

const LandingCheckliCard = lazy(() => import("components/LandingCheckliCard"));

const MiniCardWrapper = ({ data, title }) => {
  return (
    <>
      <LeftSection>
        <div
          style={{
            marginTop: "25px",
            width: "100%",
            display: "flex",
          }}
        >
          <h4
            style={{
              paddingBottom: "20px",
              fontWeight: "400",
            }}
          >
            {title} Checklists
          </h4>
        </div>
        <Suspense fallback={<h1 className="fallback-css">Loading…</h1>}>
          {data.length > 0 ? (
            data
              ?.filter((item, index) => index <= 8)
              ?.map((item) => <LandingCheckliCard data={item} />)
          ) : (
            <div style={{ color: "#d65e5e" }}>No Record Found.</div>
          )}
        </Suspense>
        {data.length > 0 && (
          <SeeMoreWrapper>
            <SeeMore href={`/explore/${title}`}>See More</SeeMore>
          </SeeMoreWrapper>
        )}
      </LeftSection>
    </>
  );
};

export default MiniCardWrapper;
