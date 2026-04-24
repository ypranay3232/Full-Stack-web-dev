import React from 'react';

const FundsCard = ({ title, value, percentage, icon: Icon, isPositive, colorClass }) => {
  return (
    <div className="bg-white dark:bg-[#222230] p-5 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm flex flex-col justify-between">
      <div className="flex justify-between items-center mb-4">
        <div className="p-2 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
          <Icon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
        </div>
        <div className={`w-10 h-10 rounded-full border-4 flex items-center justify-center ${colorClass}`}>
          <span className="text-[10px] font-bold text-gray-700 dark:text-gray-300">{percentage}</span>
        </div>
      </div>
      <div>
        <p className="text-xs font-medium text-gray-500 mb-1">{title}</p>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{value}</h3>
        <p className="text-[10px] text-gray-400 font-medium mt-1">Current Financial Year</p>
      </div>
    </div>
  );
};

export default FundsCard;
