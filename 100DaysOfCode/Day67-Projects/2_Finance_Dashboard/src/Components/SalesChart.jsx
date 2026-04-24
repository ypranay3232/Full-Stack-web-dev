import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'JAN', value: 200 },
  { name: 'FEB', value: 300 },
  { name: 'MAR', value: 250 },
  { name: 'APR', value: 400 },
  { name: 'MAY', value: 350 },
  { name: 'JUN', value: 450 },
  { name: 'JUL', value: 300 },
  { name: 'AUG', value: 400 },
  { name: 'SEP', value: 350 },
  { name: 'OCT', value: 450 },
  { name: 'NOV', value: 300 },
  { name: 'DEC', value: 500 },
];

const SalesChart = () => {
  return (
    <div className="bg-white dark:bg-[#222230] p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm col-span-1 lg:col-span-2">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-sm font-bold text-gray-900 dark:text-white">Sales dynamics</h3>
        <select className="bg-transparent text-sm font-medium text-gray-500 dark:text-gray-400 outline-none cursor-pointer">
          <option>2021</option>
          <option>2022</option>
        </select>
      </div>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barSize={8}>
            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#9ca3af' }} dy={10} />
            <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#9ca3af' }} dx={-10} />
            <Tooltip 
              cursor={{ fill: 'rgba(79, 70, 229, 0.1)' }}
              contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', backgroundColor: '#fff', color: '#000' }}
            />
            <Bar dataKey="value" fill="#4f46e5" radius={[4, 4, 4, 4]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SalesChart;
