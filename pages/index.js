import React, { useState, useEffect } from 'react';
import Seo from 'components/seo/seo';
import Card from 'components/card/card';
import SchemesData from 'utils/schemesData';
import { fetchQuery } from 'utils/api';

export default function Home({ Data }) {
  const [schemes, setSchemes] = useState([]);
  const [schemeType, setSchemetype] = useState('Central Schemes');

  useEffect(() => {
    const cardsData  = (schemeType == 'Central Schemes') ? Data.central_data : Data.state_data
    const allSchemes = cardsData.map((scheme) => ({
      title: scheme.name,
      link: (schemeType == 'Central Schemes') ? `/scheme/${scheme.slug}` : `/state/${scheme.slug}`,
      icon: SchemesData[scheme.slug].logo,
    }));
    allSchemes.sort((a, b) =>
      a.title.toLowerCase().localeCompare(b.title.toLowerCase())
    );
    setSchemes(allSchemes);
  }, [schemeType]);

  const handleChangeSchemeType = (value) => {
    console.log(value);
    setSchemetype(value);
  };

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
	    <div className="btn-switch-container">
	      <button
		className="btn-switch"
		type="button"
		style={
		  schemeType == 'Central Schemes'
		    ? { background: '#4b4797', color: 'white' }
		    : {}
		}
		onClick={() => handleChangeSchemeType('Central Schemes')}
	      >
		Central Schemes
	      </button>

	      <button
		className="btn-switch"
		type="button"
		style={
		  schemeType == 'State Schemes'
		    ? { background: '#4b4797', color: 'white' }
		    : {}
		}
		onClick={() => handleChangeSchemeType('State Schemes')}
	      >
		State Schemes
	      </button>
	    </div>
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
  const central_data = await fetchQuery('schemeType', 'Centrally Sponsored Scheme');
  const state_data = await fetchQuery('schemeType', 'State Sponsored Scheme');
  return {
    props: {Data : {
	"central_data" : central_data.map((scheme) => ({
        slug: scheme.extras[2].value,
        name: scheme.extras[0].value,})),
        "state_data" : state_data.map((scheme) => ({
        slug: scheme.extras[2].value,
        name: scheme.extras[0].value,})),
       }
    },
    revalidate: 1,
  };
}
