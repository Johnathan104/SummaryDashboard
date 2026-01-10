import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
  Title,
} from 'chart.js';

import { Chart } from 'react-chartjs-2';

// Register required components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
  Title
);

export default function LtifrChart() {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    datasets: [
      {
        type: 'bar',
        label: 'Incidents',
        data: [120, 110, 95, 105, 130, 115, 100, 90, 85],
        backgroundColor: '#4e79a7',
        yAxisID: 'yIncidents',
      },
      {
        type: 'line',
        label: 'LTIFR',
        data: [1.1, 1.15, 1.0, 1.1, 1.2, 1.1, 0.95, 0.9, 0.88],
        borderColor: '#59a14f',
        backgroundColor: '#59a14f',
        tension: 0.3,
        yAxisID: 'yLTIFR',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Monthly Incidents and LTIFR Trends',
      },
      legend: {
        position: 'top',
      },
    },
    scales: {
      yIncidents: {
        type: 'linear',
        position: 'left',
        title: {
          display: true,
          text: 'Incidents (Count)',
        },
      },
      yLTIFR: {
        type: 'linear',
        position: 'right',
        title: {
          display: true,
          text: 'LTIFR',
        },
        grid: {
          drawOnChartArea: false,
        },
      },
    },
  };

  return <Chart type="bar" data={data} options={options} />;
}
