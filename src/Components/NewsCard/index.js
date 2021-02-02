import React from "react";
import "./index.css";

const NewsCard = (props) => {
  return (
    <a
      href={props.data.link}
      target="_blank"
      class={`case-studies-card card-link-container ${props.data.class}`}
    >
      <div class="right-aligned card-container pt-2 pr-3 pb-3 pl-3">
        {/* <div class="image-container first"></div> */}
        <div class="text-container ml-1 mr-1">
          <h4>{props.data.title}</h4>
          <p>{props.data.text}</p>
        </div>
      </div>
    </a>
  );
};

export default NewsCard;
