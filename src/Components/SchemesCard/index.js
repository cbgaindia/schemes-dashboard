import React from "react";
import {Link } from "react-router-dom"
import "./index.css";


const SchemesCard = (props) => {
  return (
    <Link
      to={props.scheme.link}
      className={`scheme-card card-link-container ${props.scheme.class}`}
    >
      <div class="image-container">
        <img src={props.scheme.img} alt="scheme-logo" />
      </div>
      <div class="text-container mt-2">
        <h4>{props.scheme.title}</h4>
      </div>
    </Link>
  );
};

export default SchemesCard;
