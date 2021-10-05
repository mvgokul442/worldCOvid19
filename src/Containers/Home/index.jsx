import React, { useState } from 'react';

import { Row, Col } from 'react-bootstrap';
import moment from 'moment';
import _ from 'lodash';
import { getConInfo } from './actions';
import LineChart, { options } from '../../Components/Linecharts';
import Statuses from './componets/Statuses';
import Search from './componets/Search';
import CountStatus from '../../Components/CounStatus';
import Mapchart from '../../Components/Mapchart';
import Url from '../../utils/Url';
import useStickSWR from '../../hooks/swrFetch';

function Home() {
  const [Global, setGlobal] = useState({});
  const [countryDetails, setCountry] = useState({});
  const { data } = useStickSWR(Url.summary + Url.allCountries);
  const { summary, allCountries: countryData } = data;

  const arrangeGraph = (timeline) => {
    const { cases, deaths, recovered } = timeline;
    const cas = { name: 'Cases', data: [] };
    const death = { name: 'Deaths', data: [] };
    const recover = { name: 'Recovered', data: [] };
    const xData = [];
    Object.keys(cases).forEach((key) => {
      cas.data.push(cases[key]);
      death.data.push(deaths[key]);
      recover.data.push(recovered[key]);
      xData.push(moment(key).format('MMM Do'));
    });
    const option1 = _.clone(options, true);
    option1.series = [cas];
    option1.colors = ['#ffc107'];
    option1.xAxis = { categories: xData };
    option1.yAxis = { title: { text: 'no of cases' } };

    const option2 = _.clone(options, true);
    option2.series = [death];
    option2.colors = ['#6c757d'];
    option2.yAxis = { title: { text: 'no of deaths' } };
    option2.xAxis = { categories: xData };

    const option3 = _.clone(options, true);
    option3.series = [recover];
    option3.xAxis = { categories: xData };
    option3.yAxis = { title: { text: 'no of recovered' } };
    option3.colors = ['#17a2b8'];

    setCountry({ cases: option1, deaths: option2, recovered: option3 });
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
              {countryDetails.cases && (
                <Row>
                  <Col lg={12} />
                  <Col lg={12}>
                    <div style={{ padding: '20px 0px' }}>
                      <LineChart options={countryDetails.cases} />
                    </div>
                  </Col>
                  <Col lg={12}>
                    <div style={{ padding: '20px 0px' }}>
                      <LineChart options={countryDetails.deaths} />
                    </div>
                  </Col>
                  <Col lg={12}>
                    <div style={{ padding: '20px 0px' }}>
                      <LineChart options={countryDetails.recovered} />
                    </div>
                  </Col>
                </Row>
              )}
            </Col>
            {countryDetails?.cases && (
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
