import React from "react";
import { Bar, Line } from "react-chartjs-2";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

type SleepData = {
  avg_stage_per_segment: number[];
  disease_prediction: string;
  stage_counts: {
    N1: number;
    N2: number;
    N3: number;
    REM: number;
    Wk: number;
  };
  time_segments: {
    start_time: number;
    end_time: number;
  }[];
};


const SleepTracker: React.FC = () => {
  const [data, setData] = useState<SleepData | null>(null);

  useEffect(() => {
    axios
      .get<SleepData>("http://127.0.0.1:5000/get_stage_analysis") // replace with your endpoint
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching sleep data:", error);
      });
  }, []);

  if (!data) {
    return <div className="text-white">Loading...</div>;
  }

  const response = data;
  const stageCounts = response.stage_counts;

  
  // Format timestamp to readable time
  const formatTime = (timestamp: number) => {
    const date = new Date(timestamp * 1000); // Convert to ms
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  const startTime = formatTime(response.time_segments[0].start_time);
  const endTime = formatTime(response.time_segments[response.time_segments.length - 1].end_time);


  // Mock blood oxygen levels for the line chart labels
  const bloodOxygenLevels = ["95%", "94%", "93%", "92%", "91%"];

  const barData = {
    labels: Object.keys(stageCounts),
    datasets: [
      {
        label: "Stage Counts",
        data: Object.values(stageCounts),
        backgroundColor: "rgba(99, 102, 241, 0.6)", // Indigo-500
      },
    ],
  };

  const lineData = {
    labels: bloodOxygenLevels,
    datasets: [
      {
        label: "Avg Stage per Segment",
        data: response.avg_stage_per_segment,
        borderColor: "rgba(16, 185, 129, 1)", // Emerald-500
        backgroundColor: "rgba(16, 185, 129, 0.2)",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-b to-slate-800 p-4 sm:p-6">
      <div className="w-full max-w-2xl lg:max-w-4xl bg-slate-800/50 backdrop-blur-sm rounded-xl lg:rounded-2xl p-4 sm:p-6 md:p-8 border border-slate-700 shadow-2xl transition-all hover:border-slate-600">
        {/* Navigation */}
        <nav className="border-b border-slate-700 pb-3 sm:pb-4 mb-4 sm:mb-6">
          <div className="flex items-center justify-between">
            <button className="text-slate-300 hover:text-indigo-400 transition-colors px-2 text-xl sm:text-2xl">
              &lt;
            </button>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Sleep Details
            </h1>
            <div className="flex gap-2 sm:gap-4">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 stroke-current text-slate-400 hover:text-indigo-400 transition-colors" viewBox="0 0 24 24">
                <path d="M18 16.08a2.88 2.88 0 0 1 0 5.76 2.88 2.88 0 0 1 0-5.76zM6 8.88a2.88 2.88 0 1 1 0 5.76 2.88 2.88 0 0 1 0-5.76zM18 2a2.88 2.88 0 1 1 0 5.76A2.88 2.88 0 0 1 18 2z" />
              </svg>
              <svg className="w-5 h-5 sm:w-6 sm:h-6 stroke-current text-slate-400 hover:text-indigo-400 transition-colors" viewBox="0 0 24 24">
                <path d="M12 19v-6m0 0V5m0 8H5m14 0h-7" />
              </svg>
            </div>
          </div>
        </nav>

         {/* Sleep Time Range */}
         <div className="text-slate-300 text-center text-lg font-semibold mb-6">
          Sleep Time: {startTime} - {endTime}
        </div>

        <main>
          {/* Sidebar details */}
          <div className="bg-slate-700/30 rounded-lg md:rounded-xl p-3 sm:p-4 mb-4 sm:mb-6 border border-slate-600 text-slate-300">
            <div className="text-lg font-semibold mb-2">Disease Prediction: <span className="text-indigo-400">{response.disease_prediction}</span></div>
            <div className="space-y-1">
              {Object.entries(stageCounts).map(([stage, count]) => (
                <div key={stage} className="flex justify-between">
                  <span>{stage}</span>
                  <span>{count}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bar Chart */}
          <div className="mb-8">
            <h2 className="text-slate-300 text-lg font-semibold mb-2">Sleep Stage Counts</h2>
            <Bar data={barData} />
          </div>

          {/* Line Chart */}
          <div>
            <h2 className="text-slate-300 text-lg font-semibold mb-2">Avg Stage per segment</h2>
            <Line data={lineData} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default SleepTracker;
