import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { ChartData } from 'chart.js';

// Register required Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

type LineChartProps = {
  data: ChartData<'line'>;
};

const LineChart: React.FC<LineChartProps> = ({ data }) => {
  return <Line data={data} />;
};

export default LineChart;
