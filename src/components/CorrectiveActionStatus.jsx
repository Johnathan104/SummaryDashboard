import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  Title,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  Title
);

export default function CorrectiveActionsStatus() {
  const data = {
    labels: [
      'Construction',
      'Operations',
      'Engineering',
      'Maintenance',
    ],
    datasets: [
      {
        label: 'Completed',
        data: [70, 85, 77, 65],
        backgroundColor: '#4e79a7',
      },
      {
        label: 'In Progress',
        data: [30, 15, 23, 35],
        backgroundColor: '#dfe608ff',
      },
    ],
  };

  const options = {
    indexAxis: 'y',
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: 'Corrective Actions Status by Department',
      },
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: (ctx) => `${ctx.label}: ${ctx.raw}%`,
        },
      },
    },
    scales: {
      x: {
        stacked: true,
        max: 100,
        ticks: {
          callback: (value) => `${value}%`,
        },
      },
      y: {
        stacked: true,
      },
    },
  };

  return (
      <Bar data={data} options={options} />
  );
}
