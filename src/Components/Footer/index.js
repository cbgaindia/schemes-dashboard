import React from 'react';
import { ReactComponent as FacebookIcon } from '../../Images/facebook-icon.svg';
import { ReactComponent as TwitterIcon } from '../../Images/twitter-icon.svg';
import { ReactComponent as GithubIcon } from '../../Images/github-icon.svg';

import './index.css';

const dashboardLinks = {
  union: [
    {
      title: 'Union Budget Explorer 2021-22',
      link: 'https://union.openbudgetsindia.org/en/',
    },
    {
      title: 'Union Budget Explorer 2020-21',
      link: 'https://union2020.openbudgetsindia.org/en/',
    },
    {
      title: 'Union Budget Explorer 2019-20',
      link: 'https://union2019.openbudgetsindia.org/en/',
    },
    {
      title: 'Union Budget Explorer 2019-20 (I)',
      link: 'https://union2019i.openbudgetsindia.org/en/',
    },
    {
      title: 'Union Budget Explorer 2018-19',
      link: 'https://union2018.openbudgetsindia.org/en/',
    },
  ],
  state: [
    {
      title: 'Assam Budget Explorer 2020-21',
      link: 'https://assam2020.openbudgetsindia.org/en/',
    },
    {
      title: 'Assam Budget Explorer 2019-20',
      link: 'https://assam2019.openbudgetsindia.org/en/',
    },
  ],
  district: [
    {
      title: 'Balasore District Treasury',
      link: 'https://dash.openbudgetsindia.org/superset/dashboard/odisha_balasore_treasury_dashboard/?standalone=true',
    },
    {
      title: 'Krishna District Treasury',
      link: 'https://dash.openbudgetsindia.org/superset/dashboard/ap_krishna_treasury_dashboard/?standalone=true',
    },
  ],
  schemes: [
    {
      title: 'Schemes Dashboard',
      link: 'https://schemes.openbudgetsindia.org/',
    },
  ],
  story: [
    {
      title: 'Story Generator',
      link: 'https://cbgaindia.github.io/story-generator/',
    },
  ],
};

const budgetDatasets = [
  {
    title: 'Government-wise Budget Data',
    link: 'https://openbudgetsindia.org/organization',
  },
  {
    title: 'Sector-wise Budget Data',
    link: 'https://openbudgetsindia.org/group',
  },
  { title: 'All Datasets', link: 'https://openbudgetsindia.org/dataset' },
];

const platformLinks = [
  {
    title: 'How to use the OBI Platform',
    link: 'https://openbudgetsindia.org/pages/how-to-use-the-portal',
  },
  {
    title: 'FAQs on the Platform',
    link: 'https://openbudgetsindia.org/pages/faqs',
  },
  { title: 'About OBI Platform', link: 'https://openbudgetsindia.org/about' },
  { title: 'Video: OBI Platform', link: 'https://youtu.be/xKjzH1ZB3c4' },
  { title: 'Video: Budget Basics', link: 'https://youtu.be/fGxNh5Xfn2I' },
];

const attributionLinks = [
  {
    title: 'Disclaimer',
    link: 'https://openbudgetsindia.org/pages/disclaimers',
    class: '',
  },
  {
    title: 'License',
    link: 'https://openbudgetsindia.org/pages/license',
    class: 'ml-24',
  },
  {
    title: 'Contact Us',
    link: 'https://openbudgetsindia.org/contact',
    class: 'ml-24',
  },
  {
    title: 'CKAN API',
    link: 'https://docs.ckan.org/en/latest/api/',
    class: 'ml-24',
  },
];

const socialMediaLinks = [
  {
    link: 'https://github.com/cbgaindia',
    class: 'link',
    child: <GithubIcon fill="white" />,
  },
  {
    link: 'https://twitter.com/OpenBudgetsIn',
    class: 'link ml-24',
    child: <TwitterIcon fill="white" />,
  },
  {
    link: 'https://www.facebook.com/OpenBudgetsIndia',
    class: 'link ml-24',
    child: <FacebookIcon fill="white" />,
  },
];

const Footer = () => (
  <footer className="site-footer">
    <div className="footer-links-container">
      <div className="site-logo">
        <a
          href="https://openbudgetsindia.org/en/"
          target="_blank"
          rel="noreferrer"
        >
          <span className="logo-link-container" />
        </a>
      </div>

      <div className="footer-links">
        <div className="links-container">
          <h4>Dashboards</h4>
          <div className="links dashboard-links">
            <h4>Union Dashboards</h4>
            {dashboardLinks.union.map((dashboard) => (
              <a href={dashboard.link} target="_blank" rel="noreferrer">
                {dashboard.title}
              </a>
            ))}
            <h4>State Dashboards</h4>
            {dashboardLinks.state.map((dashboard) => (
              <a href={dashboard.link} target="_blank" rel="noreferrer">
                {dashboard.title}
              </a>
            ))}
            <h4>District Dashboards</h4>
            {dashboardLinks.district.map((dashboard) => (
              <a href={dashboard.link} target="_blank" rel="noreferrer">
                {dashboard.title}
              </a>
            ))}
            <h4>Schemes Dashboard</h4>
            {dashboardLinks.schemes.map((dashboard) => (
              <a href={dashboard.link} target="_blank" rel="noreferrer">
                {dashboard.title}
              </a>
            ))}
            <h4>Story Generator</h4>
            {dashboardLinks.story.map((dashboard) => (
              <a href={dashboard.link} target="_blank" rel="noreferrer">
                {dashboard.title}
              </a>
            ))}
          </div>
        </div>
        <div className="links-container ml-32">
          <h4>Budget Datasets</h4>
          <div className="links dataset-links">
            {budgetDatasets.map((dataset) => (
              <a href={dataset.link} target="_blank" rel="noreferrer">
                {dataset.title}
              </a>
            ))}
          </div>
        </div>
        <div className="links-container ml-32">
          <h4>OBI Platform</h4>
          <div className="links platform-links">
            {platformLinks.map((link) => (
              <a href={link.link} target="_blank" rel="noreferrer">
                {link.title}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
    <div className="attribution-container">
      <div className="attribution-content">
        <div className="links-container">
          {attributionLinks.map((link) => (
            <a
              className={link.class}
              href={link.link}
              target="_blank"
              rel="noreferrer"
            >
              {link.title}
            </a>
          ))}
        </div>
        <div className="logos-container">
          <div className="attribution-logos">
            <div className="logo cc">
              <a
                href="https://creativecommons.org/licenses/by/4.0/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="card-link-container" />
              </a>
            </div>
            <div className="logo oss ml-24">
              <a
                href="https://opendefinition.org/od/2.1/en/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="card-link-container" />
              </a>
            </div>
          </div>
          <div className="social-media-links">
            {socialMediaLinks.map((link) => (
              <a
                className={link.class}
                href={link.link}
                target="_blank"
                rel="noreferrer"
              >
                {link.child}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
