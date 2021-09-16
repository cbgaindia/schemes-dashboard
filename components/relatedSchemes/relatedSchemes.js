import React, { useState, useEffect } from 'react';
import SchemesData from 'lib/schemesData';
import Card from 'components/card/card';
import ReactPlaceholder from 'react-placeholder';
import 'react-placeholder/lib/reactPlaceholder.css';
import { fetchRelated } from 'lib/api';

const RelatedSchemes = ({ scheme }) => {
  const [relatedSchemes, setRelatedSchemes] = useState([]);

  useEffect(() => {
    // Fetch related Schemes
    fetchRelated(scheme.metadata.name, scheme.metadata.type, SchemesData).then(
      (res) => {
        setRelatedSchemes(res);
      }
    );
    return () => {
      setRelatedSchemes([]);
    };
  }, [scheme]);
  return (
    <div className="scheme__related">
      <div className="related__header">
        <h3>Other Schemes</h3>
        <a href="/">View All Schemes</a>
      </div>
      <ul className="related__cards">
        {relatedSchemes.length > 0 ? (
          relatedSchemes.map((related, index) => (
            <React.Fragment key={index}>
              <Card scheme={related} />
            </React.Fragment>
          ))
        ) : (
          <ReactPlaceholder
            type="media"
            rows={5}
            ready={relatedSchemes.length > 0}
            delay={1000}
            style={{ width: '320px' }}
          />
        )}
      </ul>
    </div>
  );
};

export default RelatedSchemes;
