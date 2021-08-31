import React from 'react';
import './index.css';

import GotoIcon from '../../Images/go-to-icon.svg';
import OBILogo from '../../Images/Logo_OBI4-31.png';
// import OBILogo from "../../Images/powered-by-logo.svg";

const Header = () => (
  <header className="header-container">
    <div className="layout-wrapper d-flex align-items-center justify-content-between">
      <div className="logo-container">
        <a href="/" className="brand-name">
          Schemes Dashboard
        </a>
        <span className="screen-reader-icon-seperator" />
        <a href="https://openbudgetsindia.org/" className="powered-by">
          by{' '}
          <img
            src={OBILogo}
            alt="open budgets india"
            className="ml-1 powered-by-logo"
          />
        </a>
      </div>
      <a
        href="https://openbudgetsindia.org/"
        target="_blank"
        rel="noreferrer"
        className="home-primary-button budget-basics-btn"
      >
        <span>Go to OpenBudgetsIndia</span>
        <img src={GotoIcon} alt="" className="ml-2" />
      </a>
    </div>
  </header>
);

export default Header;
