import React from "react";
import "./index.css";

const NewsCard = (props) => {
  return (
    <a
      href={props.data.link}
      target="_blank"
      className={"case-studies-card card-link-container" +  (props.cardindex % 2 == 0 ? "" : " ml-4")}
    >
      <div class="right-aligned card-container pt-2 pr-3 pb-3 pl-3">
        {/* <div class="image-container first"></div> */}
        <div class="text-container ml-1 mr-1 d-flex flex-column">
          <h4>{props.data.title}</h4>
          <div className="d-flex flex-column justify-content-between flex-grow-1">
            <p>{props.data.text}</p>
            <p className="m-0 fs-12 text-light mt-2">
              Accessed On: {props.data.accessed_on}
            </p>
          </div>
        </div>
      </div>
    </a>
  );
};

export default NewsCard;
