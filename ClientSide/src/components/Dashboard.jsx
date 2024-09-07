import React, { PureComponent } from 'react';
import { ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
  ResponsiveContainer, PieChart, Pie, BarChart,LineChart } from 'recharts';
const data4 = [
  {
    name: 'Diary Products',
    uv: 590,
    pv: 800,
    amt: 1400,
    cnt: 490,
  },
  {
    name: 'Baking Good',
    uv: 868,
    pv: 967,
    amt: 1506,
    cnt: 590,
  },
  {
    name: 'Canned',
    uv: 1397,
    pv: 1098,
    amt: 989,
    cnt: 350,
  },
  {
    name: 'Snack Food',
    uv: 1480,
    pv: 1200,
    amt: 1228,
    cnt: 480,
  },
  {
    name: 'SeaFoods',
    uv: 1520,
    pv: 1108,
    amt: 1100,
    cnt: 460,
  },
  {
    name: 'Soft Drinks',
    uv: 1400,
    pv: 680,
    amt: 1700,
    cnt: 380,
  },
];
const data01 = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];
const data02 = [
  { name: 'A1', value: 100 },
  { name: 'A2', value: 300 },
  { name: 'B1', value: 100 },
  { name: 'B2', value: 80 },
  { name: 'B3', value: 40 },
  { name: 'B4', value: 30 },
  { name: 'B5', value: 50 },
  { name: 'C1', value: 100 },
  { name: 'C2', value: 200 },
  { name: 'D1', value: 150 },
  { name: 'D2', value: 50 },
];
const data = [
  {
    name: 'Soft Drinks',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Snack Food',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Canned',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Baking Good',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Dairy Product',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Meat',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Starcy Food',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const Dashboard = () => {
  return (
    <div >
      
  <div   style={{ display: 'flex' }}>
    <div width="50%" height={300}>
      <LineChart
        width={600} // Adjust the width as needed
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
    </div>

    

    <div width="50%" height="100%">
        <BarChart width={600} height={300} data={data}>
          <Bar dataKey="uv" fill="#8884d8" />
        </BarChart>
      </div>
</div  >
       <div  style={{ display: 'flex' }}>

     
      <div width="50%" height="50%">
        <PieChart width={600} height={300}>
          <Pie data={data01} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
          <Pie data={data02} dataKey="value" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
        </PieChart>
      </div>

      <div width="50%" height="50%">
        <ComposedChart
          width={600}
          height={300}
          data={data4}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
          <Bar dataKey="pv" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="uv" stroke="#ff7300" />
          <Scatter dataKey="cnt" fill="red" />
        </ComposedChart>
      </div>
      </div>

    </div>
    





  );
};

export default Dashboard;