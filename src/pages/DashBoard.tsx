import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../components/LoadingSpinner";
import { fetchUserData } from "../services/fetchUserData";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line, ResponsiveContainer } from "recharts";

// Define some color themes for the charts
const barChartColors = ["#FF8A00", "#4CAF50"];
const lineChartColor = "#3E82F7";
const adminBarColor = "#FF5733"; 
const regularUserBarColor = "#4CAF50";

const Dashboard = () => {
  // Fetch data from the backend using React Query
  const {
    data: dashboardData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["userDashboardData"],
    queryFn: fetchUserData, // Fetching data from the backend
  });

  // Handling loading state
  if (isLoading) return <LoadingSpinner />;

  // Handling errors or missing data
  if (error || !dashboardData?.graphData) {
    return <p>Error loading data or incomplete data.</p>;
  }

  // Prepare data for User Roles chart
  const userRolesChartData = [
    { name: "Admins", count: dashboardData.graphData.adminUsers },
    { name: "Regular Users", count: dashboardData.graphData.regularUsers },
  ];

  // Prepare data for User Growth chart
  const userGrowthData = dashboardData?.graphData?.userGrowth || [];

  // Format user growth data to display it monthly
  const userGrowthChartData = userGrowthData.map((data) => ({
    name: `Month ${data._id}`, // Assuming _id represents month (e.g., 1 = January, 2 = February, etc.)
    userGrowth: data.count,
  }));

  // Optionally, map _id to month names if your data uses month numbers
  const monthNames = [
    "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
  ];

  // Ensure all 12 months are represented, filling missing months with 0 growth
  const formattedUserGrowthChartData = monthNames.map((month, index) => {
    // Find the data for the current month (index + 1 for month number)
    const dataForMonth = userGrowthData.find((data) => data._id === index + 1);
    return {
      name: month,
      userGrowth: dataForMonth ? dataForMonth.count : 0, // If no data, set growth to 0
    };
  });

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-teal-600 text-center">
        Dashboard
      </h1>

      {/* User Statistics Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl">Total Users</h2>
          <p className="text-3xl font-semibold">
            {dashboardData.userStats.totalUsers}
          </p>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl">Active Users</h2>
          <p className="text-3xl font-semibold">
            {dashboardData.userStats.activeUsers}
          </p>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl">New Users (Last 30 Days)</h2>
          <p className="text-3xl font-semibold">
            {dashboardData.userStats.newUsersLastMonth}
          </p>
        </div>
      </div>

      {/* Graphs Section - Flex Layout */}
      <div className="flex flex-wrap gap-8 mb-8">
        {/* User Roles Graph */}
        <div className="flex-1 min-w-[48%] bg-white p-6 rounded shadow">
          <h2 className="text-2xl font-semibold mb-4">User Roles</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={userRolesChartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} />
              <YAxis axisLine={false} tickLine={false} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#fff",
                  borderRadius: "5px",
                  boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
                }}
              />
              <Legend />
              <Bar dataKey="count" fill={barChartColors[0]} barSize={40} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* User Growth Graph */}
        <div className="flex-1 min-w-[48%] bg-white p-6 rounded shadow">
          <h2 className="text-2xl font-semibold mb-4">User Growth Over Time</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={formattedUserGrowthChartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fontWeight: "bold", fill: "#333" }}
                angle={-45}
                textAnchor="end"
              />
              <YAxis axisLine={false} tickLine={false} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#fff",
                  borderRadius: "5px",
                  boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
                }}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="userGrowth"
                stroke={lineChartColor}
                strokeWidth={3}
                dot={{ r: 4, strokeWidth: 2, fill: "#fff" }}
                activeDot={{ r: 6, strokeWidth: 2, fill: "#fff" }}
                legendType="line"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
