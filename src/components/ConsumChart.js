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
    value: '400',
  },
  {
    name: "7.5",
    value: '2000',
  },
  {
    name: "7.10",
    value: '1400',
  },
  {
    name: "7.15",
    value: '700',
  },
  {
    name: "7.18",
    value: '2000',
  },
  {
    name: "7.25",
    value: '800',
  },
  {
    name: "7.20",
    value: '1400',
  },
  {
    name: "7.28",
    value: '1000',
  }
]
export default class ConsumChart extends PureComponent {
render() {
  return (
    <div className='chart' style={{height: '250px', width:'99%', textAlign:'center'}}>
      <ResponsiveContainer >
          <AreaChart data={data}>
                 {/* <defs>
                     <linearGradient id="color" x1="0" y1="0 x2="0" y2="1">
                       <stop offset="0%" stopColor="#2451B7" stopOpacity={0.4} />
                      <stop offset="75%" stopColor="#2451B7" stopOpacity={0.05} />                  
                    </linearGradient>
                 </defs>    */}
                 <CartesianGrid strokeDasharray="0" />
                 <XAxis dataKey="name"/>
                 <YAxis dataKey="value" type="category" domain={[0,2000]} width={100}/>
                 <Tooltip />
               <Area type="monotone" dataKey="value" stroke="#FDC816" strokeWidth={5} fill="#FDC816" />
          </AreaChart>
     </ResponsiveContainer>
    </div>
  )
}
}