import React from "react";
import "./index.css";

const SchemesCard = (props) => {
  return (
    <a
      href={props.scheme.link}
      target="_blank"
      class={`scheme-card card-link-container ${props.scheme.class}`}
    >
      <div class="image-container"></div>
      <div class="text-container mt-2">
        <h4>{props.scheme.title}</h4>
      </div>
    </a>
  );
};

export default SchemesCard;
