import React, { useState, useEffect} from "react";
import io from 'socket.io-client';
import axios from 'axios';

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const socket = io('http://127.0.0.1:5000', {
  transports: ['websocket'], // Force WebSocket transport
});

type Data = {
  current_stage: number;
    stage_distribution: { Wk: number; N1: number; N2: number; N3: number; REM: number };
    message: string;
    disease: string | null;
    graphData?: number[];
};

const RealTime : React.FC = () => {
    const [data, setData] = useState<Data>({
        current_stage: 0,
        stage_distribution: { Wk: 0, N1: 0, N2: 0, N3: 0, REM: 0 },
        message: 'You are awake',
        disease: "No disease Detected",
      });
      
      const [graphData, setGraphData] = useState<number[]>([]);

      useEffect(() => {
        socket.on("connect", () => {
          console.log("✅ Connected to WebSocket server");
        });

        socket.on("prediction", (newData: Data) => {
          console.log("📡 Received data:", newData);
          setData(newData);

        const flattenedGraphData = newData.graphData?.flat() || [];

          if (flattenedGraphData && flattenedGraphData.length > 0) {
            setGraphData(flattenedGraphData);
          }
        });

        return () => {
          socket.off("connect");
          socket.off("disconnect");
          socket.off("prediction");
        };
      }, []);
    
     
      
      
  const sendCommand = async (action: string) => {
    try {
      await axios.post(`http://127.0.0.1:5000/command`, null, {
        params: { action },
      });
      console.log(`${action} command sent ✅`);
    } catch (error) {
      console.error("Error sending command:", error);
    }
  };

  const handleMonitorToggle = async () => {
    const action = isMonitoring ? "stop" : "start";

    try {
      await sendCommand(action);
      setIsMonitoring(!isMonitoring);
    } catch (error) {
      console.error(`❌ Error sending ${action} command:`, error);
    }
  };

  const [isMonitoring, setIsMonitoring] = useState(false); 
      const total = Object.values(data.stage_distribution).reduce((sum, value) => sum + value, 0) || 1;
      const stageLabels: ("Wk" | "N1" | "N2" | "N3" | "REM")[] = ["Wk", "N1", "N2", "N3", "REM"];
    
      const stageColors = {
        Wk: 'from-blue-400 to-cyan-400',
        N1: 'from-purple-400 to-fuchsia-400',
        N2: 'from-green-400 to-emerald-400',
        N3: 'from-indigo-400 to-blue-400',
        REM: 'from-pink-400 to-rose-400'
      };
    
      return (
        <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b  to-slate-800">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Sleep Monitor Dashboard
            </h1>
            <p className="text-xl text-slate-300 mt-4">
              Status: <span className="font-semibold text-indigo-300">{data.message}</span>
            </p>
            {/* Start/Stop Button */}
           <div>
              <button
                onClick={handleMonitorToggle}
                className={`mt-6 px-6 py-3 rounded-xl text-white font-semibold ${
                  isMonitoring
                    ? "bg-red-500 hover:bg-red-600"
                    : "bg-green-500 hover:bg-green-600"
                }`}
              >
                {isMonitoring ? "Stop Monitoring" : "Start Monitoring"}
              </button>
            </div>
    
          </div>

           
    
          <div className="max-w-6xl mx-auto">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-slate-700">
              <div className="mb-8 text-center">
                <h2 className="text-2xl font-semibold text-transparent bg-gradient-to-r from-indigo-300 to-cyan-300 bg-clip-text">
                  Sleep Stage Monitor
                </h2>
                <p className="text-lg text-slate-300 mt-2">
                  Current Stage: {' '}
                  <span className="font-bold bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                    {stageLabels[data.current_stage]}
                  </span>
                </p>
              </div>
    
              <h3 className="text-lg font-semibold mb-6 text-center text-slate-300">
                Stage Distribution (Last 5 Minutes)
              </h3>

             
              <div className="space-y-10">
                {stageLabels.map((label, index) => {
                  const count = data.stage_distribution[label] || 0;
                  const width = `${(count / total) * 100}%`;
                  return (
                    <div key={index} className="flex items-center group">
                      <span className="w-16 text-sm font-medium text-slate-400 group-hover:text-slate-200 transition-colors">
                        {label}:
                      </span>
                      <div className="flex-1 h-4 bg-slate-700 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full bg-gradient-to-r ${stageColors[label]} transition-all duration-500 ease-out`}
                          style={{ width }}
                        >
                          <div className="h-full bg-opacity-20 backdrop-blur-sm"></div>
                        </div>
                      </div>
                      <span className="w-12 text-right text-sm text-slate-400">
                        {Math.round((count / total) * 100)}%
                      </span>
                    </div>
                  );
                })}
              </div>
    
              {data.disease && data.disease !== "No disease Detected" && (
                <div className="mt-8 p-4 bg-gradient-to-r from-red-500/20 to-rose-500/20 border-l-4 border-red-400 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-1 bg-red-400 rounded-full"></div>
                    <div>
                      <h3 className="font-semibold text-red-200">Detected Condition</h3>
                      <p className="text-red-400 text-sm mt-1">{data.disease}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          {/* Graph Section */}
        <div className="max-w-6xl mx-auto mt-8">
        {graphData.length > 0 && (
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">PPG Signal Graph</h2>
            <Line
              data={{
                labels: graphData.map((_, idx) => idx),
                datasets: [
                  {
                    label: "PPG Signal",
                    data: graphData,
                    borderColor: "rgb(75, 192, 192)",
                    backgroundColor: "rgba(75, 192, 192, 0.2)",
                  },
                ],
              }}
              options={{
                responsive: true,
                plugins: {
                  legend: {
                    position: "top" as const,
                  },
                  title: {
                    display: true,
                    text: "Real-Time PPG Signal",
                  },
                },
              }}
            />
          </div>
        )}
        </div>
        </div>
      );
    };
    
    export default RealTime;