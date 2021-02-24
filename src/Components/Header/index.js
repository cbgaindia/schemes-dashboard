import React from "react";
import "./index.css";

import GotoIcon from "../../Images/go-to-icon.svg";
import OBILogo from "../../Images/Logo_OBI4-31.png";
// import OBILogo from "../../Images/powered-by-logo.svg";

const Header = () => {
  return (
    <header className="header-container">
      <div className="layout-wrapper d-flex align-items-center justify-content-between">
        <div className="logo-container">
          <a href="/" className="brand-name">
            Schemes Dashboards
          </a>
          <span className="screen-reader-icon-seperator"></span>
          <a href="https://openbudgetsindia.org/" className="powered-by">
            by <img src={OBILogo} className="ml-1 powered-by-logo"></img>
          </a>
        </div>
        <a
          href="https://openbudgetsindia.org/"
          target="_blank"
          className="home-primary-button budget-basics-btn"
        >
          <span>Go to OpenBudgetsIndia</span>
          <img src={GotoIcon} alt="Goto-icon" className="ml-2"></img>
        </a>
      </div>
    </header>
  );
};

export default Header;
