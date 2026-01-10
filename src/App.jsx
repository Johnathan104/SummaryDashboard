
import './App.css'
import Navbar from './components/static/Navbar.jsx'
import { MoveDownRight, MoveUpRight} from 'lucide-react'
import LtifrChart from './components/LtifrChart.jsx';
import IncidentSeverityBySite from './components/IncidentSeverityBySite.jsx';
import PPEComplianceChart from './components/PPEComplianceChart.jsx';
import IncidentSeverityDistribution from './components/IncidentSeverityDistributuon.jsx';
import CorrectiveActionsStatus from './components/CorrectiveActionStatus.jsx';
import 'chart.js/auto';

function App() {

  return (
    <>
      <Navbar/>
      <div style={{paddingLeft:'3rem', paddingRight:'3rem'} }className="danger text-black">
        {/* First ROW!!! */}
        <div className="w-full flex justify-evenly flex-wrap">
         <div className='p-[30px] flex bg-white gap-4 rounded-sm shadow-md m-2 flex-1'>
            {/* Added flex-1 to the container */}
            <div className="flex-1 flex flex-col gap-2">
              <h2 className="text-sky-950 w-fit font-bold">
                Start Date
              </h2>
              {/* Changed w-[200px] to w-full */}
              <input className='border-[#666] w-full border p-[5px] rounded-sm' name="startDate" id="startDate"/>
            </div>

            {/* Added flex-1 to the container */}
            <div className="flex-1 flex flex-col gap-2">
              <h2 className="text-sky-950 w-fit font-bold">
                End Date
              </h2>
              {/* Changed w-[100px] to w-full */}
              <input className='border-[#666] w-full border p-[5px] rounded-sm' name="endDate" id="endDate" />
            </div>
          </div>
          <div className='p-[30px] flex bg-white gap-4 rounded-sm shadow-md m-2 flex-1'>
            <div className="w-100 flex flex-col gap-2">
               <h2 className="text-sky-950 w-fit font-bold">
                Select Sites
              </h2>
              <select className='border-[#666] border p-[5px] rounded-sm' name="siteSelect" id="siteSelect">
                <option value="site1">All Sites</option>
              </select>
            </div>
          
          </div>
          <div className='p-[30px] flex bg-white gap-4 rounded-sm shadow-md m-2 flex-1'>
            <div className="w-100 flex flex-col gap-2">
               <h2 className="text-sky-950 w-fit font-bold">
                Select Department
              </h2>
              <select className='border-[#666] border p-[5px] rounded-sm' name="depSelect" id="depSelect">
                <option value="dep1">All departments</option>
              </select>
            </div>
          </div>
          <div className='p-[30px] flex bg-white gap-4 rounded-sm shadow-md m-2 flex-1'>
            <div className="w-100 flex flex-col gap-2">
               <h2 className="text-sky-950 w-fit font-bold">
                Select Department
              </h2>
              <select className='border-[#666] border p-[5px] rounded-sm' name="depSelect" id="depSelect">
                <option value="dep1">All departments</option>
              </select>
            </div>
          </div>
        </div>
        {/* Second ROW!!! */}
         <div className="w-full flex justify-evenly flex-wrap">
          <div className='p-[30px] flex bg-white gap-4 rounded-sm shadow-md m-2 flex-1'>
            <div className="w-100 flex flex-col gap-2">
               <h2 className="text-sky-950 w-fit font-bold">
                  Total Incidents(YTD)
                </h2>
                <h1 className="text-black w-fit font-bold">
                  <div className="flex justify-center items-center pl-[10px]">
                    972 <MoveDownRight size={35} className='text-green-800 ml-[10px] font-[100px] font-bold'/>
                  </div>
                </h1>
                <p className='w-fit text-stone-600'>vs prev 1032 <span className='text-green-800'>( -5.8% )</span></p>
              </div>
          </div>
          <div className='p-[30px] flex bg-white gap-4 rounded-sm shadow-md m-2 flex-1'>
            <div className="w-100 flex flex-col gap-2">
              <h2 className="text-sky-950 w-fit font-bold">
                Lost Time Injury Frequency Rate (rate)
              </h2>
              <h1 className="text-black w-fit font-bold">
                <div className="flex justify-center items-center pl-[10px]">
                  0.85 <MoveDownRight size={35} className='text-green-800 ml-[10px] font-[100px] font-bold'/>
                </div>
              </h1>
              <p className='w-fit text-stone-600'>vs prev 1.2 <span className='text-green-800'>( -29.2% )</span></p>
            </div>
          </div>
          <div className='p-[30px] flex bg-white gap-4 rounded-sm shadow-md m-2 flex-1'>
            <div className="w-100 flex flex-col gap-2">
              <h2 className="text-sky-950 w-fit font-bold">
                PPE Compliance (%)
              </h2>
              <h1 className="text-black w-fit font-bold">
                <div className="flex justify-center items-center pl-[10px]">
                  94.2 <MoveUpRight size={35} className='text-green-800 ml-[10px] font-[100px] font-bold'/>
                </div>
              </h1>
              <p className='w-fit text-stone-600'>vs prev 89.2% <span className='text-green-800'>( +5% )</span></p>
            </div>
          </div>
          <div className='p-[30px] flex bg-white gap-4 rounded-sm shadow-md m-2 flex-1'>
            <div className="w-100 flex flex-col gap-2">
              <h2 className="text-sky-950 w-fit font-bold">
                Corrective Actions Completed (%)
              </h2>
              <h1 className="text-black w-fit font-bold">
                <div className="flex justify-center items-center pl-[10px]">
                  78% <MoveUpRight size={35} className='text-green-800 ml-[10px] font-[100px] font-bold'/>
                </div>
              </h1>
              <p className='w-fit text-stone-600'>vs prev 73% <span className='text-green-800'>( +5% )</span></p>
            </div>
          </div>
          <div className='p-[30px] flex bg-white gap-4 rounded-sm shadow-md m-2 flex-1'>
            <div className="w-100 flex flex-col gap-2">
              <h2 className="text-sky-950 w-fit font-bold">
                Toolbox Talk Participation(%)
              </h2>
              <h1 className="text-black w-fit font-bold">
                <div className="flex justify-center items-center pl-[10px]">
                  89.7% <MoveUpRight size={35} className='text-green-800 ml-[10px] font-[100px] font-bold'/>
                </div>
              </h1>
              <p className='w-fit text-stone-600'>vs prev 85.2% <span className='text-green-800'>( +5.3% )</span></p>
            </div>
          </div>
         </div>
        {/* Third ROW!!! */}
        <div className="w-full flex justify-evenly flex-wrap">
          <div className="flex-1 flex-wrap justify-arond">
            <div className='p-[30px] flex bg-white gap-4 rounded-sm shadow-md m-2 flex-1'>
              <div className="flex flex-col gap-2">
                <h2 className="text-sky-950 w-fit font-bold">
                  Monthly Incidents and LTIFR Trends
                </h2>
                <LtifrChart/>
              </div>
            </div>
            <div className='p-[30px] flex bg-white gap-4 rounded-sm shadow-md m-2 flex-1'>
              <div className="flex flex-col items-center justify-center gap-2">
                <h2 className="text-sky-950 w-fit font-bold">
                  PPE Compliance Breakdown
                </h2>
                <PPEComplianceChart/>
              </div>
            </div>
            <div className='p-[30px] flex bg-white gap-4 rounded-sm shadow-md m-2 flex-1'>
              <div className="w-[100%] flex flex-col gap-2">
                <h2 className="text-sky-950 w-fit font-bold">
                  Incident Severity Distribution
                </h2>
                <IncidentSeverityDistribution/>
              </div>
            </div>
            <div className='p-[30px] flex bg-white gap-4 rounded-sm shadow-md m-2 flex-1'>
              <div className="flex flex-col items-center justify-center gap-2">
                <h2 className="text-sky-950 w-fit font-bold">
                  Corrective Action Status By Department
                </h2>
                <CorrectiveActionsStatus/>
              </div>
            </div>
          </div>
          <div className='p-[30px] flex bg-white gap-4 rounded-sm shadow-md m-2 flex-1'>
            <div className="w-[100%] flex flex-col gap-2">
              <h2 className="text-sky-950 w-fit font-bold">
                Incident Severity Distribution by Site  
              </h2>
              <div className="h-[800px] w-[100%] flex justify-center items-center">
                <IncidentSeverityBySite/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
