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

export default function IncidentSeverityBySite() {
  const data = {
    labels: [
      'Construction Zone A',
      'Construction Zone B',
      'Construction Zone C',
      'Construction Zone D',
      'Construction Zone E',
    ],
    datasets: [
      {
        label: 'Minor Incidents',
        data: [45, 38, 34, 36, 30],
        backgroundColor: '#429a46ff',
      },
      {
        label: 'Moderate Incidents',
        data: [20, 22, 18, 20, 15],
        backgroundColor: '#cfa922ff',
      },
      {
        label: 'Major Incidents',
        data: [25, 30, 28, 27, 22],
        backgroundColor: '#c43d33ff',
      },
    ],
  };

  const options = {
    indexAxis: 'y', // 🔑 makes it horizontal
    responsive: true,
    
    plugins: {
      title: {
        display: true,
        text: 'Incident Severity Distribution by Site',
      },
      legend: {
        position: 'top',
      },
    },
    scales: {
      x: {
        stacked: true,
        title: {
          display: true,
          text: 'Incidents (Count)',
        },
      },
      y: {
        stacked: true,
      },
    },
  };

  return <Bar data={data} options={options} />;
}
