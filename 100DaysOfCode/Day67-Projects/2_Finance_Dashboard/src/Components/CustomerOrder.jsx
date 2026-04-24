import React from 'react';
import { MoreHorizontal } from 'lucide-react';

const orders = [
  { id: 1, name: 'Press', address: 'London', date: '22.06.2022', status: 'Delivered', price: '$900', avatar: 'https://i.pravatar.cc/150?img=11', statusColor: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' },
  { id: 2, name: 'Marina', address: 'Man city', date: '24.06.2022', status: 'Processed', price: '$452', avatar: 'https://i.pravatar.cc/150?img=5', statusColor: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' },
  { id: 3, name: 'Alex', address: 'Unknown', date: '18.06.2022', status: 'Cancelled', price: '$1200', avatar: 'https://i.pravatar.cc/150?img=12', statusColor: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400' },
  { id: 4, name: 'Robert', address: 'New York', date: '03.06.2022', status: 'Delivered', price: '$1235', avatar: 'https://i.pravatar.cc/150?img=13', statusColor: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400' },
];

const CustomerOrder = () => {
  return (
    <div className="bg-white dark:bg-[#222230] p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm col-span-1 lg:col-span-2">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-sm font-bold text-gray-900 dark:text-white">Customer order</h3>
        <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead>
            <tr className="text-gray-400 border-b border-gray-50 dark:border-gray-800/50">
              <th className="pb-3 font-medium">Profile</th>
              <th className="pb-3 font-medium">Address</th>
              <th className="pb-3 font-medium">Date</th>
              <th className="pb-3 font-medium">Status</th>
              <th className="pb-3 font-medium">Price</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 dark:text-gray-300">
            {orders.map((order) => (
              <tr key={order.id} className="border-b border-gray-50 dark:border-gray-800/50 last:border-0 hover:bg-gray-50/50 dark:hover:bg-white/5 transition-colors">
                <td className="py-3 flex items-center gap-2">
                  <img src={order.avatar} alt={order.name} className="w-6 h-6 rounded-full object-cover" />
                  <span className="font-medium text-gray-900 dark:text-gray-100">{order.name}</span>
                </td>
                <td className="py-3">{order.address}</td>
                <td className="py-3">{order.date}</td>
                <td className="py-3">
                  <span className={`px-2 py-1 rounded-full text-[10px] font-semibold ${order.statusColor}`}>
                    {order.status}
                  </span>
                </td>
                <td className="py-3 font-semibold text-gray-900 dark:text-gray-100">{order.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomerOrder;
