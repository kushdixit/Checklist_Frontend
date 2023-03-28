import React from "react";
import { Link } from "react-router-dom";
import {
  RightSection,
  Listeners,
  ImageSection,
  Text,
} from "styles/pages/Category";

const Tags = [
  "Digital Marketing",
  "Startup",
  "Health and Fitness",
  "Gaming",
  "Kids",
  "Love",
  "Productivity",
  "Sports",
  "Tech",
  "Nil",
];

const SideTags = () => {
  return (
    <RightSection>
      <Listeners>
        <ImageSection>
          <h4>Categories</h4>
        </ImageSection>
        {Tags?.map((item, id) => (
          <Link
            to={`/categories/${item}`}
            style={{ textDecoration: "none" }}
            key={id}
          >
            <Text>{item}</Text>
          </Link>
        ))}
        <ImageSection>
          <button className="button">See More</button>
        </ImageSection>
      </Listeners>
    </RightSection>
  );
};

export default SideTags;
