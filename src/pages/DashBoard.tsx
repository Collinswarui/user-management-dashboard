import { useQuery } from '@tanstack/react-query';
import { fetchBarChartData, fetchLineChartData } from '../api/fetchChartData';
import { BarChartData, LineChartData } from '../types/chartData';
import LineChart from '../charts/LineChart';
import BarChart from '../charts/BarChart';

const Dashboard = () => {
  const {
    data: barData,
    isLoading: isBarLoading,
    error: barError,
  } = useQuery<BarChartData>({
    queryKey: ['barChartData'],  
    queryFn: fetchBarChartData,  
  });

  const {
    data: lineData,
    isLoading: isLineLoading,
    error: lineError,
  } = useQuery<LineChartData>({
    queryKey: ['lineChartData'],  
    queryFn: fetchLineChartData,  
  });

  if (isBarLoading || isLineLoading) return <p>Loading...</p>;
  if (barError || lineError) return <p>Error loading chart data.</p>;

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-teal-600 text-center">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl">Total Users</h2>
          <p className="text-3xl font-semibold">100</p>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl">Active Users</h2>
          <p className="text-3xl font-semibold">80</p>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl">New Users</h2>
          <p className="text-3xl font-semibold">20</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl mb-4">User Growth (Line Chart)</h2>
          <LineChart data={lineData} />
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl mb-4">Active Users (Bar Chart)</h2>
          <BarChart data={barData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
