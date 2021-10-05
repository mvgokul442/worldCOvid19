/* eslint-disable arrow-body-style */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/prop-types */
import React from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from 'react-simple-maps';

const geoUrl = 'https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json';

const MapChart = ({ countryData }) => {
  return (
    <ComposableMap>
      <Geographies geography={geoUrl}>
        {
          ({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#DDD"
                stroke="#FFF"
              />
            ))
          // eslint-disable-next-line react/jsx-curly-newline
        }
      </Geographies>
      <Marker coordinates={[countryData.long, countryData.lat]}>
        <circle r={3} fill="#F53" />
      </Marker>
    </ComposableMap>
  );
};

export default MapChart;
