import { BarChartData, LineChartData } from '../types/chartData';

export const fetchBarChartData = async (): Promise<BarChartData> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
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
      });
    }, 500);
  });
};

export const fetchLineChartData = async (): Promise<LineChartData> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
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
      });
    }, 500);
  });
};
