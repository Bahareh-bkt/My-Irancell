import React, { PureComponent } from 'react'
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Brush,
  ResponsiveContainer
} from "recharts"

const data = [
  {
    name: "7.1",
    value: 400,
  },
  {
    name: "7.5",
    value: 1000,
  },
  {
    name: "7.10",
    value: 500,
  },
  {
    name: "7.15",
    value: 1500,
  },
  {
    name: "7.18",
    value: 2000,
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
]
export default class ConsumChart extends PureComponent {
render() {
  return (
    <div style={{height: '250px', width:'100%', textAlign:'left'}}>
      <ResponsiveContainer >
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
                 <YAxis dataKey="value" axisLine={false} tickLine={false} type="category" domain={[0,1000]} width={100}/>
                 <Tooltip />
               <Area type="monotone" dataKey="value" stroke="#FDC816" strokeWidth={5} fill="#FDC816" />
          </AreaChart>
     </ResponsiveContainer>
    </div>
  )
}
}