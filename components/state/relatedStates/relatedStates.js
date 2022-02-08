import React from 'react';
import Card from 'components/card/card';
import ReactPlaceholder from 'react-placeholder';
import 'react-placeholder/lib/reactPlaceholder.css';

const RelatedSchemes = ({ related }) => (
  <div className="scheme__related state__related">
    <div className="related__header">
      <h3>Other States</h3>
      <a href="/">View All States</a>
    </div>
    <ul className="related__cards">
      {related.length > 0 ? (
        related.map((data, index) => (
          <React.Fragment key={index}>
            <Card scheme={data} />
          </React.Fragment>
        ))
      ) : (
        <ReactPlaceholder
          type="media"
          rows={5}
          ready={related.length > 0}
          delay={1000}
          style={{ width: '320px' }}
        />
      )}
    </ul>
  </div>
);

export default RelatedSchemes;
