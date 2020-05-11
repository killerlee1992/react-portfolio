import React from "react";
import { unstable_renderSubtreeIntoContainer } from "react-dom";

const BlogFeaturedImage = (props) => {
  if (!props.img) {
    return null;
  }
  return (
    <div className="featured-image-wrapper">
      <img src={props.img} />
    </div>
  );
};

export default BlogFeaturedImage;
