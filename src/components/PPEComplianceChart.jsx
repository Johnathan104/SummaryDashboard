import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  Title
);

export default function PPEComplianceChart() {
  const data = {
    labels: [
      'Full Compliance',
      'Partial Compliance',
      'Failed',
    ],
    datasets: [
      {
        data: [729, 213, 30], // fake data matching image proportions
        backgroundColor: [
          '#4e79a7',
          '#9ad0f5',
          '#c7c7f4',
        ],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    cutout: '65%', // 🔑 donut hole size
    plugins: {
      title: {
        display: true,
        text: 'PPE Compliance Breakdown',
      },
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            const total = context.dataset.data.reduce((a, b) => a + b, 0);
            const value = context.raw;
            const percent = ((value / total) * 100).toFixed(0);
            return `${context.label}: ${value} (${percent}%)`;
          },
        },
      },
    },
  };

  return <Doughnut data={data} options={options} />;
}
