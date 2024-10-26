import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { ChartData } from 'chart.js';

// Register required Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

type BarChartProps = {
  data: ChartData<'bar'>;
};

const BarChart: React.FC<BarChartProps> = ({ data }) => {
  return <Bar data={data} />;
};

export default BarChart;
