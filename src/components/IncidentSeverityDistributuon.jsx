import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  Tooltip,
  Legend,
  Title,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement, 
  BarElement,
  Tooltip,
  Legend,
  Title
);

export default function IncidentSeverityDistribution() {
  const data = {
    labels: [''],
    datasets: [
      {
        label: 'Minor Incidents',
        data: [46],
        backgroundColor: '#4e79a7',
      },
      {
        label: 'Moderate Incidents',
        data: [23.2],
        backgroundColor: '#9ad0f5',
      },
      {
        label: 'Major Incidents',
        data: [30.8],
        backgroundColor: '#c7c7f4',
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
        text: 'Incident Severity Distribution',
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
    <div style={{ height: '120px' }}>
      <Bar data={data} options={options} />
    </div>
  );
}
