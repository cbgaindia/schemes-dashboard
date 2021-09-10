import React, { useState, useEffect } from 'react';
import CaretDown from 'public/Images/arrow/caret-down-white2.svg';
// import Image from 'next/image';

import FacebookIcon from 'public/Images/facebook-icon.svg';
import TwitterIcon from 'public/Images/twitter-icon.svg';
import Dropdown from 'components/dropdown/dropdown';

const socialMediaLinks = [
  {
    link: 'https://www.facebook.com/OpenBudgetsIndia',
    image: FacebookIcon,
    share: 'https://www.facebook.com/sharer/sharer.php?u=',
  },
  {
    link: 'https://twitter.com/OpenBudgetsIn',
    image: TwitterIcon,
    share: 'https://twitter.com/intent/tweet?text=Share on twitter&url=',
  },
];

export default function SchemeIntroduction(props) {
  const [dropdownActive, setDropdownActive] = useState(false);

  useEffect(() => {
    const links = document.querySelectorAll('a[href="#social"');
    links.forEach((link) => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
      });
    });
  }, []);

  const handleToggleDropdown = (val) => {
    setDropdownActive(val);
  };

  return (
    <div className="scheme-introduction-wrapper pl-3 pr-3 pt-32 mb-1">
      <p className="d-block page-introduction-text fs-12 mb-3">
        <a href="/" className="page-introduction-text fs-12">
          <u>Schemes Dashboard</u>
        </a>
        &nbsp;&nbsp; &gt;
      </p>
      <div className="d-flex align-items-center justify-content-between mb-3">
        <h1 className="page-heading text-dark">
          {props.data && props.data.name}
        </h1>
        <div>
          <button
            type="button"
            className="button primary-button"
            onClick={() => handleToggleDropdown(!dropdownActive)}
          >
            <span>Download</span>
            <CaretDown />
          </button>
          {dropdownActive ? (
            <Dropdown
              handleDownloadReportImage={props.handleDownloadReportImage}
              showViz={props.showViz}
            />
          ) : null}
        </div>
      </div>
      <p className="page-introduction-text mb-1">{props.data.description}</p>
      <div className="scheme-types-wrapper mt-3 d-flex align-items-center">
        <div className="frequency-container">
          <p className="page-introduction-text">
            Frequency: <span className="text-dark">{props.data.frequency}</span>
          </p>
        </div>
        <div className="seperator" />
        <div className="type-container">
          <p className="page-introduction-text">
            Type of Scheme: <span className="text-dark">{props.data.type}</span>
          </p>
        </div>
        <div className="seperator" />
        <div className="d-flex align-items-center social-links-container">
          <p className="page-introduction-text">Share on social media:</p>
          <div className="social-media-links">
            {socialMediaLinks.map((link, index) => (
              <a
                href="#social"
                key={`socialLink-${index}`}
                className="social-links"
                onClick={() =>
                  window.open(
                    link.share + encodeURIComponent(window.location.href)
                  )
                }
              >
                <link.image />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
