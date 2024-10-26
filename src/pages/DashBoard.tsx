import SideBar from '../components/SideBar';
import LineChart from '../charts/LineChart';
import BarChart from '../charts/BarChart';

const Dashboard = () => {
  const barChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'], 
    datasets: [
      {
        label: 'Active Users', 
        data: [50, 60, 70, 65, 80, 90], 
        backgroundColor: 'rgba(54, 162, 235, 0.6)', 
        borderColor: 'rgba(54, 162, 235, 1)', 
        borderWidth: 1,
      },
    ],
  };

  const lineChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'], 
    datasets: [
      {
        label: 'Users Over Time',
        data: [30, 40, 45, 60, 70, 90], 
        fill: false,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
      },
    ],
  };

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
            <LineChart data={lineChartData} />
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-xl mb-4">Active Users (Bar Chart)</h2>
            <BarChart data={barChartData} />
          </div>
        </div>
      </div>
  );
};

export default Dashboard;
