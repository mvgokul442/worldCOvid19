import React, { useEffect, useState } from 'react';

import Search from '../Who/components/Onsearch';
import Whoresults from '../../Components/whoResults';
import useStickSWR from '../../hooks/swrFetch';
import Url from '../../utils/Url';

const { parseString } = require('xml2js');

function FeedsData() {
  const [result, setResults] = useState({});
  const [filterRes, setFilter] = useState([]);
  const { data: newsData } = useStickSWR(Url.news);

  useEffect(() => {
    parseString(newsData, (err, _result) => {
      if (_result) {
        setResults(_result);
        setFilter(_result.rss.channel[0].item);
      }
    });
  }, [newsData]);

  const handleChange = (searchName) => {
    const newArray = result.rss.channel[0].item.filter((wine) =>
      // eslint-disable-next-line implicit-arrow-linebreak
      Object.values(wine).some((val) =>
        // eslint-disable-next-line implicit-arrow-linebreak
        String(val).toLowerCase().includes(searchName.toLowerCase())));
    setFilter(newArray);
  };
  return (
    <div>
      {/* {result.rss && */}
      <div>
        <div className="search-box">
          <Search handleChange={handleChange} />
        </div>
        <br />
        {filterRes.length > 0 ? (
          <Whoresults result={filterRes} />
        ) : (
          <p>No results found</p>
        )}
      </div>
    </div>
  );
}

export default FeedsData;
