import { TrendingUp, TrendingDown } from 'lucide-react';

const StatCard = ({ title, value, change, isPositive, Icon, iconClass, bgClass }) => {
  return (
    <div className="bg-white dark:bg-[#222230] p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm flex flex-col justify-between h-32">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-xs font-medium text-gray-500 mb-1">{title}</p>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{value}</h3>
        </div>
        {/* Dynamic Icon with a light background wrapper */}
        <div className={`p-2 rounded-lg ${bgClass}`}>
          <Icon className={`w-5 h-5 ${iconClass}`} />
        </div>
      </div>

      <div className="flex items-center gap-1 mt-2">
        {isPositive ? (
          <TrendingUp className="w-3 h-3 text-green-500" />
        ) : (
          <TrendingDown className="w-3 h-3 text-red-500" />
        )}
        <span className={`text-[10px] font-bold ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
          {isPositive ? '↑' : '↓'} {change}
        </span>
        <span className="text-[10px] text-gray-400 font-medium">since last month</span>
      </div>
    </div>
  );
};

export default StatCard;