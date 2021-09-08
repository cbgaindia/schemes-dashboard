import React, { useState, useEffect } from 'react';
import Link from 'next/link';
// import { fetchAPI } from 'lib/api';
import Seo from 'components/seo/seo';
import Card from 'components/card/card';
import { sortList } from 'utils/helpers';
import Header from 'components/header/header';
// import Highlight from 'components/highlights/highlights';
// import Carousel from 'components/carousel/carousel';
import SchemesData from 'lib/schemesData';

export default function Home({ homepage }) {
  function headerDesc() {
    return <p className="header__desc">homepage.heading</p>;
  }
  const [schemes, setSchemes] = useState([]);

  useEffect(() => {
    const allSchemes = Object.keys(SchemesData).map((scheme) => ({
      title: SchemesData[scheme].name,
      link: `/scheme/${SchemesData[scheme].slug}`,
      icon: SchemesData[scheme].logo,
    }));
    allSchemes.sort((a, b) =>
      a.title.toLowerCase().localeCompare(b.title.toLowerCase())
    );
    setSchemes(allSchemes);
  }, []);

  const seo = {
    title: 'Schemes Dashboard | Open Budgets India',
    url: 'https://schemes.openbudgetsindia.org/',
    description:
      'Find downloadable data, visualisations and other useful information related to a number of schemes run by the Union and State Governments.',
  };

  return (
    <>
      <Seo seo={seo} />

      <Header desc={headerDesc()} color="#101524" />
      {/* <section className="home__mobile-search">
        <Link href="/search">
          <a>Search</a>
        </Link>
      </section> */}
      <div className="skiptarget">
        <span id="maincontent">-</span>
      </div>
      <main id="main" tabIndex="-1" className="wrapper">
        <ul className="home__cards">
          {schemes.map((scheme, index) => (
            <React.Fragment key={index}>
              <Card scheme={scheme} />
            </React.Fragment>
          ))}
        </ul>
      </main>
    </>
  );
}
