import React from 'react';
import { LineChart, Line, ResponsiveContainer } from 'recharts';

const data = [
  { name: '1', value: 200 },
  { name: '2', value: 210 },
  { name: '3', value: 190 },
  { name: '4', value: 250 },
  { name: '5', value: 220 },
  { name: '6', value: 280 },
  { name: '7', value: 250 },
  { name: '8', value: 300 },
  { name: '9', value: 320 },
  { name: '10', value: 380 },
  { name: '11', value: 350 },
  { name: '12', value: 450 },
];

const UserActivity = () => {
  return (
    <div className="bg-white dark:bg-[#222230] p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-sm font-bold text-gray-900 dark:text-white">Overall User Activity</h3>
        <select className="bg-transparent text-sm font-medium text-gray-500 dark:text-gray-400 outline-none cursor-pointer">
          <option>2021</option>
          <option>2022</option>
        </select>
      </div>
      <div className="h-40 flex items-center relative">
         <div className="absolute left-0 h-full flex flex-col justify-between text-[10px] text-gray-400">
             <span>400k</span>
             <span>300k</span>
             <span>200k</span>
         </div>
        <div className="w-full h-full pl-8">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke="#a855f7" 
                strokeWidth={3} 
                dot={false} 
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default UserActivity;
