import React, { PureComponent } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts"

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
export default class MyAreaChart extends PureComponent {
render() {
  return (
      <ResponsiveContainer width="100%" height={400}>
          <AreaChart data={data}
              width={500}
              height={400}
              margin={{
                 top: 10,
                 right: 30,
                 left: 0,
                 bottom: 0}}>
                 {/* <defs>
                     <linearGradient id="color" x1="0" y1="0 x2="0" y2="1">
                       <stop offset="0%" stopColor="#2451B7" stopOpacity={0.4} />
                      <stop offset="75%" stopColor="#2451B7" stopOpacity={0.05} />                  
                    </linearGradient>
                 </defs>    */}
                 <CartesianGrid strokeDasharray="3 3" />
                 <XAxis dataKey="name" axisLine={false} tickLine={false} />
                 <YAxis dataKey="uv" axisLine={false} tickLine={false} />
                 <Tooltip />
               <Area type="monotone" dataKey="uv" stroke="##FDC816" strokeWidth={5} fill="#FDC816"/>
          </AreaChart>
     </ResponsiveContainer>
  )
}
}
