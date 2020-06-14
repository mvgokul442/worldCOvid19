import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const MapChart = (props) => {
  return (
    <ComposableMap >
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map(geo => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              fill="#DDD"
              stroke="#FFF"
            />
          ))
        }
      </Geographies>
      {props.countryData.map((cdata,index)=>
      <Marker key={cdata.Country+index} coordinates={[cdata.Lon, cdata.Lat]}>
        <circle r={3} fill="#F53" />
      </Marker>
      )}
    </ComposableMap>
  );
};

export default MapChart;