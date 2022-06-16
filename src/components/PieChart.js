import React, { PureComponent } from 'react'
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Label,
} from 'recharts'

const data = [
  { name: 'Group A', value: 40 },
  { name: 'Group B', value: 60 },
]
const COLORS = ['#E4EBEC', '#FDC816']

export default class MyPieChart extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width="100%" height={500}>
        <PieChart onMouseEnter={this.onPieEnter} width={200} height={100}>
            <Pie
                data={data}
                cx={110}
                cy={100}
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
             >

            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    )
  }
}
