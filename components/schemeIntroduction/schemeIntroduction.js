import React, { useState, useEffect } from 'react';
import CaretDown from 'public/Images/arrow/arrow_down.svg';

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
    <div className="scheme__intro">
      <p className="scheme__bread">
        <a href="/" className="scheme__home-link">
          <u>Schemes Dashboard</u>
        </a>
        &nbsp;&nbsp; &gt;
      </p>
      <div className="scheme__heading">
        <h2 className="scheme__title">{props.data && props.data.name}</h2>
        <div className="scheme__download">
          <button
            type="button"
            className="scheme__download-button"
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
      <p className="scheme__desc">{props.data.description}</p>
      <div className="scheme__meta">
        <p className="scheme__frequency">
          Frequency:{' '}
          <span className="scheme__meta--dark">{props.data.frequency}</span>
        </p>
        <span className="seperator" />
        <p className="scheme__type">
          Type of Scheme:{' '}
          <span className="scheme__meta--dark">{props.data.type}</span>
        </p>
        <span className="seperator" />
        <div className="social">
          <p className="social__title">Share on social media:</p>
          <div className="social__links-container">
            {socialMediaLinks.map((link, index) => (
              <a
                href="#social"
                key={`socialLink-${index}`}
                className="social__link"
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
