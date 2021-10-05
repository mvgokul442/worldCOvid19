import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import PropTypes from 'prop-types';

export const options = {
  chart: {
    type: 'line',
  },
  title: {
    text: '',
  },
  subtitle: {
    text: '',
  },
  xAxis: {
    type: 'category',
    title: {
      text: null,
      // align: 'high'
    },
    labels: {
      rotation: -45,
      overflow: 'justify',
      style: {
        fontSize: '13px',
        fontFamily: 'Verdana, sans-serif',
      },
    },
  },
  colors: ['#6CF', '#39F', '#06C', '#036', '#000'],
  credits: {
    enabled: false,
  },
  yAxis: {
    min: 0,
    title: {
      text: '',
    },
  },
  legend: {
    enabled: true,
  },
  // tooltip: {
  //     formatter: function() {
  //         console.log(this)
  //         return this.key +': <br/> '+this.y;
  //     }
  // },
  tooltip: {
    // pointFormat: ' <b>{point.y:.1f}</b>'
  },
  plotOptions: {
    column: {
      dataLabels: {
        enabled: true,
        // format: '{y}°C'
      },
    },
  },
  series: [
    {
      name: '',
      data: [],
      // dataLabels: {
      //     enabled: true,
      //     rotation: -90,
      //     color: '#FFFFFF',
      //     align: 'right',
      //     format: '{point.y:.1f}', // one decimal
      //     y: 10, // 10 pixels down from the top
      //     style: {
      //         fontSize: '13px',
      //         fontFamily: 'Verdana, sans-serif'
      //     }
      // }
    },
  ],
};

function Highchart(props) {
  const { options: option, heights } = props;
  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={option}
      containerProps={{ style: { height: heights } }}
    />
  );
}
Highchart.propTypes = {
  heights: PropTypes.number,
  // eslint-disable-next-line react/forbid-prop-types
  options: PropTypes.object,
};

Highchart.defaultProps = {
  heights: '200px',
  options: {},
};

export default Highchart;
