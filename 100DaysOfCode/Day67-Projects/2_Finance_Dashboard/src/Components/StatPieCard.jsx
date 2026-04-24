import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const StatPieCard = ({ title, value, data, colors, legend }) => {
  return (
    <div className="bg-white dark:bg-[#222230] p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm flex flex-col justify-between">
      <div>
        <p className="text-xs font-medium text-gray-500 mb-1">{title}</p>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{value}</h3>
        <p className="text-[10px] text-gray-400 font-medium mt-1">since last month</p>
      </div>

      <div className="flex items-center mt-4">
        <div className="flex-1 flex flex-col gap-2">
          {legend.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: colors[index] }}></span>
              <span className="text-[10px] text-gray-500 dark:text-gray-400">{item.label}</span>
            </div>
          ))}
        </div>
        <div className="w-24 h-24">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                innerRadius={25}
                outerRadius={40}
                paddingAngle={5}
                dataKey="value"
                stroke="none"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default StatPieCard;
