import './App.css'
import Navbar from './components/static/Navbar.jsx'
import { MoveDownRight, MoveUpRight } from 'lucide-react'
import LtifrChart from './components/LtifrChart.jsx'
import IncidentSeverityBySite from './components/IncidentSeverityBySite.jsx'
import PPEComplianceChart from './components/PPEComplianceChart.jsx'
import IncidentSeverityDistribution from './components/IncidentSeverityDistributuon.jsx'
import CorrectiveActionsStatus from './components/CorrectiveActionStatus.jsx'
import 'chart.js/auto'

function App() {
  return (
    <>
      <Navbar />
 <div
    className="origin-top"

  >
      {/* ================= MAIN DASHBOARD ================= */}
      <div
        className="
          grid gap-3 px-4  mt-3 text-black
          lg:h-[calc(100vh-150px)]
          grid-rows-none
          lg:grid-rows-[0.4fr_0.6fr_4fr]
          md: grid-rows-none
        "
      >

        {/* ================= ROW 1 : FILTERS ================= */}
        <div
          className="
            grid gap-3
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >
          <div className="bg-white p-4 shadow flex gap-4">
            <div className="flex-1 flex flex-col gap-2">
              <h2 className="font-bold text-sky-950">Start Date</h2>
              <input className="border p-1 rounded w-full" />
            </div>
            <div className="flex-1 flex flex-col gap-2">
              <h2 className="font-bold text-sky-950">End Date</h2>
              <input className="border p-1 rounded w-full" />
            </div>
          </div>

          <div className="bg-white p-4 shadow">
            <h2 className="font-bold text-sky-950 mb-2">Select Site</h2>
            <select className="border p-1 rounded w-full">
              <option>All Sites</option>
            </select>
          </div>

          <div className="bg-white p-4 shadow">
            <h2 className="font-bold text-sky-950 mb-2">Select Department</h2>
            <select className="border p-1 rounded w-full">
              <option>All Departments</option>
            </select>
          </div>

          <div className="bg-white p-4 shadow">
            <h2 className="font-bold text-sky-950 mb-2">Select Department</h2>
            <select className="border p-1 rounded w-full">
              <option>All Departments</option>
            </select>
          </div>
        </div>

        {/* ================= ROW 2 : KPI ================= */}
        <div
          className="
            grid gap-3
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-5
          "
        >
          {[
            ['Total Incidents (YTD)', '972', '-5.8%', <MoveDownRight className="text-green-800" size={10} />],
            ['LTIFR', '0.85', '-29.2%', <MoveDownRight className="text-green-800" size={10} />],
            ['PPE Compliance', '94.2%', '+5%', <MoveUpRight className="text-green-800" size={10} />],
            ['Corrective Actions', '78%', '+5%', <MoveUpRight className="text-green-800" size={10} />],
            ['Toolbox Talk', '89.7%', '+5.3%', <MoveUpRight className="text-green-800" size={10} />],
          ].map(([title, value, delta, icon], i) => (
            <div
              key={i}
              className="bg-white p-4 shadow flex flex-col justify-center"
            >
              <h2 className="font-bold text-[100%] text-sky-950">{title}</h2>
              <div className="flex items-center text-[100%] font-bold mt-2">
                {value} {icon}
              </div>
              <p className="text-[100%] text-gray-500">
                vs prev <span className="text-green-800">({delta})</span>
              </p>
            </div>
          ))}
        </div>

        {/* ================= ROW 3 : CHARTS ================= */}
        <div
          className="
            grid gap-3 min-h-0
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            lg:h-full
          "
        >

          {/* COLUMN 1 */}
          <div className="grid grid-rows-2 gap-3 min-h-0">
            <ChartCard title="Monthly Incidents & LTIFR">
              <LtifrChart />
            </ChartCard>

            <ChartCard title="PPE Compliance">
              <PPEComplianceChart />
            </ChartCard>
          </div>

          {/* COLUMN 2 */}
          <div className="grid grid-rows-2 gap-3 min-h-0">
            <ChartCard title="Incident Severity">
              <IncidentSeverityDistribution />
            </ChartCard>

            <ChartCard title="Corrective Actions">
              <div className='h-full '>
              <CorrectiveActionsStatus />
              </div>
            </ChartCard>
          </div>

          {/* COLUMN 3 */}
          <ChartCard title="Incident Severity by Site">
            <IncidentSeverityBySite />
          </ChartCard>
        </div>

      </div>
    </div>
  </>
  )
}

/* ================= REUSABLE CHART CARD ================= */
function ChartCard({ title, children }) {
  return (
    <div className="bg-white p-3 shadow flex flex-col min-h-0 overflow-scroll">
      <h2 className="font-bold text-sky-950 text-sm mb-1 shrink-0">
        {title}
      </h2>
      <div className="flex-1 min-h-[220px] lg:min-h-[150px] overflow-hidden flex justify-center items-center">
        {children}
      </div>
    </div>
  )
}

export default App
