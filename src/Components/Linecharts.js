import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

export let options = {
    chart: {
        type: 'line'
    },
    title: {
        text: ''
    },
    subtitle: {
        text: ''
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
            }
        }
    },
    colors: ['#6CF', '#39F', '#06C', '#036', '#000'],
    credits: {
        enabled: false
    },
    yAxis: {
        min: 0,
        title: {
            text: ''
        }
    },
    legend: {
        enabled: true
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
            }
        }
    },
    series: [{
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
    }]
}

export default function Highchart(props) {
    return (
            <HighchartsReact highcharts={Highcharts} options={props.options} containerProps={{ style: { height: props.heights } }} />
    )

}

Highchart.defaultProps = {
    heights: "200px",
}
