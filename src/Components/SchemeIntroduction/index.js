import React from "react";
import caretDown from "../../Images/arrow/caret-down-white2.svg";
import { ReactComponent as FacebookIcon } from "../../Images/facebook-icon.svg";
import { ReactComponent as TwitterIcon } from "../../Images/twitter-icon.svg";

import "./index.css";

const socialMediaLinks = [
  {
    link: "https://twitter.com/OpenBudgetsIn",
    class: "link ml-12",
    child: <FacebookIcon fill="#95989D" />,
  },
  {
    link: "https://www.facebook.com/OpenBudgetsIndia",
    class: "link ml-12",
    child: <TwitterIcon fill="#95989D" />,
  },
];

const SchemeIntroduction = () => {
  return (
    <div className="scheme-introduction-wrapper pl-16 pt-32 mb-1">
      <div className="d-flex align-items-center justify-content-between mb-3">
        <h1 className="page-heading text-dark">
          Integrated Child Development Services
        </h1>
        <button className="button primary-button">
          <span>Download</span>
          <img className="button-caret-down" src={caretDown} alt="icon" />
        </button>
      </div>
      <p className="page-introduction-text mb-1">
        Integrated Child Development Services (ICDS) is a government programme
        in India which provides food, preschool education, primary healthcare,
        immunization, health check-up and referral services to children under 6
        years of age and their mothers
      </p>
      <div className="scheme-types-wrapper mt-3 d-flex align-items-center">
        <div className="frequency-container">
          <p className="page-introduction-text">
            Frequency: <span className="text-dark">Yearly</span>
          </p>
        </div>
        <div className="seperator"></div>
        <div className="type-container">
          <p className="page-introduction-text">
            Type of Scheme:{" "}
            <a className="" href="" target="_blank">
              #Centrally Sponsored Scheme
            </a>
          </p>
        </div>
        <div className="seperator"></div>
        <div className="d-flex align-items-center social-links-container">
          <p className="page-introduction-text">Share on social media:</p>
          <div class="social-media-links">
            {socialMediaLinks.map((link) => (
              <a className={link.class} href={link.link} target="_blank">
                {link.child}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchemeIntroduction;
