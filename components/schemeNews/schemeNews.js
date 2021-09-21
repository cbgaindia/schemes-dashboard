import React, { useState } from 'react';
import ReactPlaceholder from 'react-placeholder';
import 'react-placeholder/lib/reactPlaceholder.css';

const SchemeNews = ({ newsData }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  function updateSchemes(pos) {
    const len = newsData.length - 1;
    if (pos == -1 && currentSlide == 0) {
      setCurrentSlide(len);
    } else if (pos == 1 && currentSlide == len) {
      setCurrentSlide(0);
    } else setCurrentSlide((prevState) => prevState + pos);
  }

  return (
    <div className="news">
      <div className="news__heading">
        <h3>Recent Developments</h3>
        <div className="news__controls">
          <button
            type="button"
            className="news__back"
            onClick={() => updateSchemes(-1)}
          >
            <span className="screen-reader-text">Previous Highlight</span>
            <svg
              width="24"
              height="22"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
              fill="#ffffff"
            >
              <path d="M2.117 12l7.527 6.235-.644.765-9-7.521 9-7.479.645.764-7.529 6.236h21.884v1h-21.883z" />
            </svg>
          </button>
          <button
            type="button"
            className="news__forward"
            onClick={() => updateSchemes(1)}
          >
            <span className="screen-reader-text">Next Highlight</span>
            <svg
              width="24"
              height="22"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
              fill="#ffffff"
            >
              <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
            </svg>
          </button>
        </div>{' '}
      </div>
      <ul className="news__container">
        {newsData.length > 0 ? (
          newsData[currentSlide].map((news, index) => (
            <li className="news__card" key={`news-${index}`}>
              <a href={news.link} rel="noreferrer" className="news__link">
                <h4 className="news__title">{news.title}</h4>
                <p className="news__text">{news.text}</p>
                <p className="news__accessed">
                  Accessed On: {news.accessed_on}
                </p>
              </a>
            </li>
          ))
        ) : (
          <ReactPlaceholder
            type="text"
            rows={6}
            ready={newsData.length > 0}
            delay={1000}
            style={{ width: '360px' }}
          />
        )}
      </ul>
    </div>
  );
};

export default SchemeNews;
