import React, { useEffect } from 'react';
import FacebookIcon from 'public/Images/facebook-icon.svg';
import TwitterIcon from 'public/Images/twitter-icon.svg';

const socialMediaLinks = [
  {
    name: 'facebook',
    text: 'Facebook Share',
    link: 'https://www.facebook.com/OpenBudgetsIndia',
    image: FacebookIcon,
    share: 'https://www.facebook.com/sharer/sharer.php?u=',
  },
  {
    name: 'twitter',
    text: 'Twitter Share',
    link: 'https://twitter.com/OpenBudgetsIn',
    image: TwitterIcon,
    share: 'https://twitter.com/intent/tweet?text=Share on twitter&url=',
  },
];

export default function SchemeIntroduction(props) {
  useEffect(() => {
    const links = document.querySelectorAll('a[href="#social"');
    links.forEach((link) => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
      });
    });
  }, []);

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
          <a
            href="https://openbudgetsindia.org/organization/state-wise-schemes-data"
            className="download-dropdown__item download-dropdown__link"
            rel="noreferrer"
          >
            Go to Dataset
          </a>
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
                href="#"
                key={`socialLink-${index}`}
                className="social__link"
                onClick={() =>
                  window.open(
                    link.share + encodeURIComponent(window.location.href)
                  )
                }
              >
                <span className="screen-reader-text">{link.text}</span>
                <link.image />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}