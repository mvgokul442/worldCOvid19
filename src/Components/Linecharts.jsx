/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

export default function App(props) {
  const DataFormater = (number) => {
    if (number > 1000000000) {
      return `${(number / 1000000000).toString()}B`;
    }
    if (number > 1000000) {
      return `${(number / 1000000).toString()}M`;
    }
    if (number > 1000) {
      return `${(number / 1000).toString()}K`;
    }
    return number.toString();
  };
  return (
    <ResponsiveContainer width="95%" height={300}>
      <LineChart
        width={500}
        height={300}
        data={props.data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="xData"
          axisLine={false}
          // angle={45}
          // dx={15}
          // dy={20}
        />
        <YAxis
          tickFormatter={DataFormater}
          label={{
            value: `no of ${props?.lines[0]}`,
            angle: -90,
            position: 'left',
          }}
        />
        <Tooltip />
        <Legend verticalAlign="top" />
        {props?.lines?.map((elm) => (
          <Line type="monotone" dataKey={elm} stroke={props?.color} />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
}
