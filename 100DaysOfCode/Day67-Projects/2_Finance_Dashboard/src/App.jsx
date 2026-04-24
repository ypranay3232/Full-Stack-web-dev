import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './Components/SideBar';
import Header from './Components/Header';
import StatCard from './Components/StatCard';
import SalesChart from './Components/SalesChart';
import StatPieCard from './Components/StatPieCard';
import UserActivity from './Components/UserActivity';
import FundsCard from './Components/FundsCard';
import CustomerOrder from './Components/CustomerOrder';
import { ShoppingCart, CheckSquare, DollarSign, Wallet, CreditCard, ShoppingBag } from 'lucide-react';

const DashboardContent = ({ isDark, toggleTheme }) => {
  const stats = [
    { title: 'Orders', value: '201', change: '8.2%', isPositive: true, icon: ShoppingCart, iconClass: 'text-green-500', bgClass: 'bg-green-100 dark:bg-green-500/20' },
    { title: 'Approved', value: '36', change: '3.4%', isPositive: true, icon: CheckSquare, iconClass: 'text-blue-500', bgClass: 'bg-blue-100 dark:bg-blue-500/20' },
    { title: 'Month total', value: '$25410', change: '0.2%', isPositive: false, icon: DollarSign, iconClass: 'text-orange-500', bgClass: 'bg-orange-100 dark:bg-orange-500/20' },
    { title: 'Revenue', value: '$1352', change: '1.2%', isPositive: true, icon: CreditCard, iconClass: 'text-indigo-500', bgClass: 'bg-indigo-100 dark:bg-indigo-500/20' },
  ];

  const usersData = [
    { name: 'New', value: 62 },
    { name: 'Returning', value: 26 },
    { name: 'Inactive', value: 12 },
  ];
  
  const subscriptionsData = [
    { name: 'Paid', value: 70 },
    { name: 'Trial', value: 30 },
  ];

  return (
    <>
      <Header isDark={isDark} toggleTheme={toggleTheme} />
      
      {/* Top Dashboard Grid */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatCard 
            key={index}
            title={stat.title}
            value={stat.value}
            change={stat.change}
            isPositive={stat.isPositive}
            Icon={stat.icon}
            iconClass={stat.iconClass}
            bgClass={stat.bgClass}
          />
        ))}
      </div>

      {/* Charts and Users Grid */}
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-2 flex flex-col gap-6">
            <SalesChart />
            <UserActivity />
        </div>

        <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 h-48">
              <StatPieCard 
                title="Users" 
                value="4.890" 
                data={usersData} 
                colors={['#eab308', '#f97316', '#3b82f6']} 
                legend={[{ label: '62% New' }, { label: '26% Returning' }, { label: '12% Inactive' }]}
              />
              <StatPieCard 
                title="Subscriptions" 
                value="1.201" 
                data={subscriptionsData} 
                colors={['#3b82f6', '#1d4ed8']} 
                legend={[{ label: '70% Paid' }, { label: '30% Trial' }]}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 h-40">
              <FundsCard 
                title="Paid Invoices"
                value="$30256.23"
                percentage="+15%"
                icon={Wallet}
                colorClass="border-purple-500 text-purple-500"
              />
              <FundsCard 
                title="Funds received"
                value="$150256.23"
                percentage="+59%"
                icon={ShoppingBag}
                colorClass="border-green-500 text-green-500"
              />
            </div>

            <CustomerOrder />
        </div>
      </div>
    </>
  );
};

// Dummy components for other routes
const PlaceholderPage = ({ title, isDark, toggleTheme }) => (
  <>
    <Header isDark={isDark} toggleTheme={toggleTheme} />
    <div className="flex-1 flex items-center justify-center h-[calc(100vh-120px)] text-2xl font-bold text-gray-400 dark:text-gray-600">
      {title} Page coming soon
    </div>
  </>
);

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <BrowserRouter>
      <div className={`flex h-screen bg-[#f8f9fb] dark:bg-[#13141a] font-sans overflow-hidden transition-colors`}>
        <Sidebar />
        
        <main className="flex-1 p-8 overflow-y-auto">
          <div className="max-w-6xl mx-auto">
            <Routes>
              <Route path="/" element={<Navigate to="/analytics" />} />
              <Route path="/analytics" element={<DashboardContent isDark={isDark} toggleTheme={toggleTheme} />} />
              <Route path="/products" element={<PlaceholderPage title="Products" isDark={isDark} toggleTheme={toggleTheme} />} />
              <Route path="/messages" element={<PlaceholderPage title="Messages" isDark={isDark} toggleTheme={toggleTheme} />} />
              <Route path="/customers" element={<PlaceholderPage title="Customers" isDark={isDark} toggleTheme={toggleTheme} />} />
            </Routes>
          </div>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;