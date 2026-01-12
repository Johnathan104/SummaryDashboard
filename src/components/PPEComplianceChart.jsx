import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title,
} from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import { useMemo } from 'react'

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  Title
)

export default function PPEComplianceChart() {

  const data = {
    labels: [
      'Full Compliance',
      'Partial Compliance',
      'Failed',
    ],
    datasets: [
      {
        data: [729, 213, 30],
        backgroundColor: [
          '#429a46ff',
          '#cfa922ff',
          '#c43d33ff',
        ],
        borderWidth: 0,
      },
    ],
  }

  const options = useMemo(() => ({
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          boxWidth: 10,
          padding: 8,
          font: (ctx) => {
            const h = ctx.chart.height

            // scale with chart height
            const size = Math.max(
              9,                 // minimum
              Math.min(h * 0.045, 12) // clamp
            )

            return { size }
          },
        },
      },
    },
  }), [])


  return (
    <div className="relative w-full h-full">
      <Doughnut data={data} options={options} />
    </div>
  )
}
