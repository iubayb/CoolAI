import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const TemperatureChart = ({ data }) => (
  <ResponsiveContainer width="100%" height={300}>
    <AreaChart data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="timestamp" tickFormatter={(ts) => new Date(ts).toLocaleTimeString()} />
      <YAxis />
      <Tooltip labelFormatter={(ts) => new Date(ts).toLocaleString()} />
      <Area type="monotone" dataKey="averageTemp" stroke="#8884d8" fill="#8884d8" name="Average Temp" />
      <Area type="monotone" dataKey="optimizedTemp" stroke="#82ca9d" fill="#82ca9d" name="Optimized Temp" />
    </AreaChart>
  </ResponsiveContainer>
);

export default TemperatureChart;
