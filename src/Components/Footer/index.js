import React from 'react';
import * as data from './footer_data';

import './index.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer__main layout-wrapper ">
      <a
        rel="noopener noreferrer"
        className="footer__logo"
        href={data.Dashboards.homepage.link}
        target="_blank"
      >
        <span className="screen-reader-text">
          {data.Dashboards.homepage.alt}
        </span>
        {data.Dashboards.homepage.child}
      </a>

      <div className="footer__links">
        <section className="footer__links-section">
          <p>{data.Dashboards.name}</p>
          {data.Dashboards.links.map((link, index) => (
            <a
              key={`footer_link-1.${index}`}
              className="link footer_link"
              rel="noopener noreferrer"
              href={link.value}
              target="_blank"
            >
              {link.title}
            </a>
          ))}
        </section>

        <section className="footer__links-section">
          <p>{data.Budget_Datasets.name}</p>
          {data.Budget_Datasets.links.map((link, index) => (
            <a
              key={`footer_link-2.${index}`}
              className="link footer_link"
              rel="noopener noreferrer"
              href={link.value}
              target="_blank"
            >
              {link.title}
            </a>
          ))}
        </section>

        <section className="footer__links-section">
          <p>{data.OBI_Platform.name}</p>
          {data.OBI_Platform.links.map((link, index) => (
            <a
              key={`footer_link-3.${index}`}
              className="link footer_link"
              rel="noopener noreferrer"
              href={link.value}
              target="_blank"
            >
              {link.title}
            </a>
          ))}
        </section>
      </div>
    </div>

    <div className="attribute">
      <div className="attribute__container wrapper">
        <div className="attribute__links">
          {data.Attr_Links.links.map((link, index) => (
            <a
              key={`attr_link-${index}`}
              rel="noopener noreferrer"
              href={link.value}
              target="_blank"
              className="link footer_link"
            >
              {link.title}
            </a>
          ))}
        </div>

        <div className="attribute__logos">
          {data.Attr_Logos.links.map((link, index) => (
            <a
              key={`attr_logo-${index}`}
              rel="nofollow noopener noreferrer"
              href={link.value}
              target="_blank"
              className="link footer_link"
            >
              <img
                src={link.src}
                alt={link.alt}
                loading="lazy"
                width={80}
                height={23}
              />
            </a>
          ))}
        </div>

        <div className="attribute__social">
          {data.Attr_Social.map((link, index) => (
            <a
              key={`attr-social-${index}`}
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
  </footer>
);

export default Footer;
