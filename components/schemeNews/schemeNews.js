import React, { useState, useEffect } from 'react';
import { fetchNews } from 'lib/api';
import ReactPlaceholder from 'react-placeholder';
import 'react-placeholder/lib/reactPlaceholder.css';
import SchemesData from 'lib/schemesData';
import { useRouter } from 'next/router';

const SchemeNews = () => {
  const [recentDevelopments, setRecentDevelopments] = useState([]);
  const [currentSlide, setCurrentSlide] = useState([0, 1]);
  const router = useRouter();

  useEffect(() => {
    fetchNews().then((res) => {
      const currentScheme = Object.keys(SchemesData).find(
        (eachScheme) => SchemesData[eachScheme].dataId == router.query.scheme
      );
      setRecentDevelopments(res[currentScheme]);
    });
  }, []);

  function updateSchemes(pos) {
    const len = recentDevelopments.length - 1;
    if (pos == -1 && currentSlide[0] == 0) {
      setCurrentSlide([len - 1, len]);
    } else if (pos == 1 && currentSlide[1] == len) {
      setCurrentSlide([0, 1]);
    } else
      setCurrentSlide((prevState) => [
        prevState[0] + pos * 2,
        prevState[1] + pos * 2,
      ]);
  }

  return (
    <div className="news">
      <div className="news__heading">
        <h3>Other Schemes</h3>
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
        {recentDevelopments.length > 0 ? (
          currentSlide.map((slideNum, index) => (
            <li className="news__card">
              <a
                key={`news-${index}`}
                href={recentDevelopments[slideNum].link}
                rel="noreferrer"
                className="news__link"
              >
                <h4 className="news__title">
                  {recentDevelopments[slideNum].title}
                </h4>
                <p className="news__text">
                  {recentDevelopments[slideNum].text}
                </p>
                <p className="news__accessed">
                  Accessed On: {recentDevelopments[slideNum].accessed_on}
                </p>
              </a>
            </li>
          ))
        ) : (
          <ReactPlaceholder
            type="text"
            rows={6}
            ready={recentDevelopments.length > 0}
            delay={1000}
            style={{ width: '360px' }}
          />
        )}
      </ul>
    </div>
  );
};

export default SchemeNews;
