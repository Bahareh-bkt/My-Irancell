import React from 'react';

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";

const data = [
  {
    name: "7.1",
    uv: 400,
  },
  {
    name: "7.5",
    uv: 1000,
  },
  {
    name: "7.10",
    uv: 500,
  },
  {
    name: "7.15",
    uv: 1500,
  },
  {
    name: "7.18",
    uv: 2000,
  },
  {
    name: "7.25",
    uv: 2300,
  },
  {
    name: "7.20",
    uv: 1800,
  },
  {
    name: "7.28",
    uv: 1400,
  }
];

export default function ConsumChart() {
  return (
    <AreaChart
      width={500}
      height={400}
      data={data}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis dataKey="uv/>
      <Tooltip />
      <Area type="monotone" dataKey="uv" stroke="##FDC816" fill="#FDC816"/>
    </AreaChart>
  );
}
