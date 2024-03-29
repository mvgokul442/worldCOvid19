/* eslint-disable react/no-danger */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/prop-types */
import React from 'react';
import { Datetime } from '../utils/dateFormat';

const h4Style = {
  color: '#0000FF',
  cursor: 'pointer',
  fontSize: '20px',
};

function Whoresults({ result }) {
  return (
    <div>
      {result.map((idata) => (
        <div key={idata.link[0]} style={{ margin: '0px 0px 30px 0px' }}>
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
          <h4 style={h4Style} onClick={() => window.open(idata.link[0])}>
            {idata.title[0]}
          </h4>
          <p>{Datetime(idata.pubDate[0])}</p>
          {idata.description[0].length < 300 ? (
            <div
              style={{ color: '#818080' }}
              dangerouslySetInnerHTML={{ __html: idata.description[0] }}
            />
          ) : (
            <div
              style={{ color: '#818080' }}
              dangerouslySetInnerHTML={{
                __html: `${idata.description[0].substr(0, 300)}...`,
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default Whoresults;
