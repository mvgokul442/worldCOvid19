import React, { useState } from 'react';

import { Row, Col } from 'react-bootstrap';
import moment from 'moment';
import _ from 'lodash';
import { getConInfo } from './actions';
import LineChart from '../../Components/Linecharts';
import Statuses from './componets/Statuses';
import Search from './componets/Search';
import CountStatus from '../../Components/CounStatus';
import Mapchart from '../../Components/Mapchart';
import Url from '../../utils/Url';
import useStickSWR from '../../hooks/swrFetch';

function Home() {
  const [Global, setGlobal] = useState({});

  const { data } = useStickSWR(Url.summary + Url.allCountries);
  const { summary, allCountries: countryData } = data;
  const [linechartData, setLinechartData] = useState([]);

  const arrangeGraph = (timeline) => {
    const { cases, deaths, recovered } = timeline;
    const linechartDatas = [];
    Object.keys(cases).forEach((key) => {
      linechartDatas.push({
        cases: cases[key],
        deaths: deaths[key],
        recovered: recovered[key],
        xData: moment(key).format('MMM Do'),
      });
    });
    setLinechartData(linechartDatas);
  };

  const changeSelect = async (country) => {
    const coun = await _.find(countryData, ['country', country]);
    setGlobal(coun);
    getConInfo(country).then((res) => {
      if (res.timeline) {
        arrangeGraph(res.timeline);
      } else {
        console.log('network error');
      }
    });
  };
  return (
    <div>
      {summary && <Statuses Global={summary} />}
      {countryData?.length > 0 && (
        <Search Countries={countryData} changeSelect={changeSelect} />
      )}
      {Object.keys(Global).length > 0 && (
        <div>
          <CountStatus key={Global.cases} Global={Global} />
          <Row>
            <Col lg={6}>
              {linechartData && (
                <Row>
                  <Col lg={12} />
                  <Col lg={12}>
                    <div style={{ padding: '20px 0px' }}>
                      <LineChart
                        data={linechartData}
                        lines={['cases']}
                        color="#ffc107"
                      />
                    </div>
                  </Col>
                  <Col lg={12}>
                    <div style={{ padding: '20px 0px' }}>
                      <LineChart
                        data={linechartData}
                        lines={['deaths']}
                        color="#6c757d"
                      />
                    </div>
                  </Col>
                </Row>
              )}
            </Col>
            {Global?.countryInfo && (
              <Col lg={6}>
                <Mapchart countryData={Global.countryInfo} />
              </Col>
            )}
          </Row>
        </div>
      )}
    </div>
  );
}
export default Home;
