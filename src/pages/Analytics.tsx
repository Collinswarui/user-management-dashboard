// src/pages/Analytics.tsx
import React from 'react';
import {
  LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, Tooltip, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer
} from 'recharts';
import { useQuery } from '@tanstack/react-query';
import { fetchUserData } from '../services/fetchUserData';


const Analytics: React.FC = () => {
  const {
    data,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["userDashboardData"],
    queryFn: fetchUserData, // Fetching data from the backend
  });

  const COLORS = ['#8884d8', '#82ca9d', '#ffc658'];

  // Extract userStats and graphData
  const userStats = data?.userStats;
  const graphData = data?.graphData;

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl text-center font-bold text-teal-500 mb-6">Analytics Overview</h1>

      {/* New User Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {/* User Growth Line Chart */}
        {/* <section className="p-6 bg-white shadow-md rounded-lg border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">User Growth</h2>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={graphData?.userGrowth.map((value: number, index: number) => ({ month: index + 1, growth: value }))}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="growth" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </section> */}

        {/* Admin vs Regular Users Pie Chart */}
        <section className="p-6 bg-white shadow-md rounded-lg border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Admin vs Regular Users</h2>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={[
                  { name: 'Admin Users', value: graphData?.adminUsers },
                  { name: 'Regular Users', value: graphData?.regularUsers },
                ]}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                label
              >
                {graphData && [
                  <Cell key="admin" fill={COLORS[0]} />,
                  <Cell key="regular" fill={COLORS[1]} />,
                ]}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </section>

        {/* Active vs Total Users Bar Chart */}
        <section className="p-6 bg-white shadow-md rounded-lg border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Active vs Total Users</h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={[{ name: 'Users', active: userStats?.activeUsers, total: userStats?.totalUsers }]}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="active" fill="#82ca9d" />
              <Bar dataKey="total" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </section>
      </div>
    </div>
  );
};

export default Analytics;