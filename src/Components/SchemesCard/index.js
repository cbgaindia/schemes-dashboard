import React from 'react';
// import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import './index.css';

const SchemesCard = (props) => (
  <a href={props.scheme.link} className="scheme-card card-link-container">
    <div className="image-container">
      <img src={props.scheme.img} alt="scheme-logo" />
    </div>
    <div className="text-container mt-2">
      <h4>{props.scheme.title}</h4>
    </div>
  </a>
);

export default withRouter(SchemesCard);
