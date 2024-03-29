import React, { useState, useEffect } from 'react';
import Seo from 'components/seo/seo';
import Card from 'components/card/card';
import SchemesData from 'utils/schemesData';
import { fetchQuery } from 'utils/api';

export default function Home({ cardsData }) {
  const [schemes, setSchemes] = useState([]);
  useEffect(() => {
    const allSchemes = cardsData.map((scheme) => ({
      title: scheme.name,
      link: `/scheme/${scheme.slug}`,
      icon: SchemesData[scheme.slug].logo,
    }));
    allSchemes.sort((a, b) =>
      a.title.toLowerCase().localeCompare(b.title.toLowerCase())
    );
    setSchemes(allSchemes);
  }, []);

  const seo = {
    url: 'https://schemes.openbudgetsindia.org/',
    description:
      'Find downloadable data, visualisations and other useful information related to a number of schemes run by the Union and State Governments.',
  };

  return (
    <>
      <Seo seo={seo} />
      <div className="skiptarget">
        <span id="maincontent">-</span>
      </div>
      <main id="main" tabIndex="-1" className="wrapper home">
        <ul className="home__cards">
          {schemes.length > 0 &&
            schemes.map((scheme, index) => (
              <React.Fragment key={index}>
                <Card scheme={scheme} />
              </React.Fragment>
            ))}
        </ul>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const data = await fetchQuery('schemeType', 'Centrally Sponsored Scheme');
  return {
    props: {
      cardsData: data.map((scheme) => ({
        slug: scheme.extras[2].value,
        name: scheme.extras[0].value,
      })),
    },
    revalidate: 1,
  };
}
