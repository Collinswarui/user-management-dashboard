// src/pages/Analytics.tsx
import React from 'react';
import {
  LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, Tooltip, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer
} from 'recharts';
import { useQuery } from '@tanstack/react-query';
import {
  mockUserActivity,
  mockGrowthMetrics,
  mockDemographics,
  mockUsageBehavior,
  mockSystemPerformance,
} from '../data/analyticsData';

const Analytics: React.FC = () => {
  const COLORS = ['#8884d8', '#82ca9d', '#ffc658'];

  // Fetch User Activity Data
  const { data: userActivity } = useQuery({
    queryKey: ['userActivity'],
    queryFn: () => mockUserActivity,
  });

  // Fetch Growth Metrics Data
  const { data: growthMetrics } = useQuery({
    queryKey: ['growthMetrics'],
    queryFn: () => mockGrowthMetrics,
  });

  // Fetch Demographics Data
  const { data: demographics } = useQuery({
    queryKey: ['demographics'],
    queryFn: () => mockDemographics,
  });

  // Fetch Usage Behavior Data
  const { data: usageBehavior } = useQuery({
    queryKey: ['usageBehavior'],
    queryFn: () => mockUsageBehavior,
  });

  // Fetch System Performance Data
  const { data: systemPerformance } = useQuery({
    queryKey: ['systemPerformance'],
    queryFn: () => mockSystemPerformance,
  });

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl text-center font-bold text-teal-500 mb-6">Analytics Overview</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Daily Active Users Line Chart */}
        <section className="p-6 bg-white shadow-md rounded-lg border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">User Activity Analysis</h2>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={userActivity?.dailyActiveUsers.map((value: number, index: number) => ({ day: index + 1, users: value }))}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" label={{ value: "Day", position: "insideBottomRight", offset: -10 }} />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="users" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </section>

        {/* User Growth Over Time Bar Chart */}
        <section className="p-6 bg-white shadow-md rounded-lg border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Growth Metrics</h2>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={growthMetrics?.userGrowth.map((value: number, index: number) => ({ month: index + 1, growth: value }))}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" label={{ value: "Month", position: "insideBottomRight", offset: -10 }} />
              <YAxis />
              <Tooltip />
              <Bar dataKey="growth" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </section>

        {/* Sign-Up Sources Pie Chart */}
        <section className="p-6 bg-white shadow-md rounded-lg border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Sign-Up Sources</h2>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie data={growthMetrics?.signUpSources} dataKey="count" nameKey="source" cx="50%" cy="50%" outerRadius={80} label>
                {growthMetrics?.signUpSources.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </section>

        {/* Geographic Distribution Pie Chart */}
        <section className="p-6 bg-white shadow-md rounded-lg border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Geographic Distribution</h2>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie data={demographics?.geographicDistribution} dataKey="users" nameKey="country" cx="50%" cy="50%" outerRadius={80} label>
                {demographics?.geographicDistribution.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </section>

        {/* Feature Usage Bar Chart */}
        <section className="p-6 bg-white shadow-md rounded-lg border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Feature Usage</h2>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={usageBehavior?.featureUsage}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="feature" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="usagePercentage" fill="#ffc658" />
            </BarChart>
          </ResponsiveContainer>
        </section>

        {/* Error Rates Line Chart */}
        <section className="p-6 bg-white shadow-md rounded-lg border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">System Performance</h2>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={systemPerformance?.errorRates.map((value: number, index: number) => ({ day: index + 1, errors: value }))}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" label={{ value: "Day", position: "insideBottomRight", offset: -10 }} />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="errors" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </section>
      </div>
    </div>
  );
};

export default Analytics;
