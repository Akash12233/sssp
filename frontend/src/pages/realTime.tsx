import React, { useState, useEffect} from "react";
import io from 'socket.io-client';


const socket = io('http://127.0.0.1:5000', {
  transports: ['websocket'], // Force WebSocket transport
});

type Data = {
  current_stage: number;
    stage_distribution: { Wk: number; N1: number; N2: number; N3: number; REM: number };
    message: string;
    disease: string | null;
};

const RealTime : React.FC = () => {
    const [data, setData] = useState<Data>({
        current_stage: 0,
        stage_distribution: { Wk: 0, N1: 0, N2: 0, N3: 0, REM: 0 },
        message: 'You are awake',
        disease: "No disease Detected",
      });
      
    
      useEffect(() => {
        socket.on('connect', () => {
          console.log('✅ Connected to WebSocket server');
        });
        socket.on('prediction', (newData: Data) => {
          console.log('📡 Received data:', newData);
          setData(newData);
        });
    
        return () => {
          socket.off('connect');
          socket.off('disconnect');
          socket.off('prediction');
        };
      }, []);
      
      const total = Object.values(data.stage_distribution).reduce((sum, value) => sum + value, 0) || 1;
    
      
    
      const stageLabels: ("Wk" | "N1" | "N2" | "N3" | "REM")[] = ["Wk", "N1", "N2", "N3", "REM"];

    return (
        <>
      <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white">Sleep Monitor Dashboard</h1>
            <p className="text-xl text-white mt-2">Status: {data.message}</p>
      </div>

      {/* Cards Container */}
      <div className="flex flex-col lg:flex-row justify-center gap-8">
        {/* Card 1: Sleep Stage Monitor */}
        <div className="w-full lg:w-1/2  shadow-xl rounded-2xl p-6 transition-all hover:shadow-2xl">
          <div className="mb-6 text-center">
            <h2 className="text-2xl font-semibold text-white">Sleep Stage Monitor</h2>
            <p className="text-lg text-white mt-1">
              Current Stage: <span className="text-white font-semibold text ">{stageLabels[data.current_stage]}</span>
            </p>
          </div>
          <h3 className="text-lg font-semibold mb-4 text-center text-violet-600">
            Stage Distribution (Last 5 Minutes)
          </h3>
          <div className="space-y-3">
            {stageLabels.map((label, index) => {
              const count = data.stage_distribution[label] || 0;
              const width = `${(count / total) * 100}%`;
              return (
                <div key={index} className="flex items-center">
                  <span className="w-12 text-sm font-medium text-white">{label}:</span>
                  <div
                    className={`h-6 rounded-md transition-all duration-300 ease-in-out ${
                      data.current_stage === index ? 'bg-blue-500' : 'bg-gray-300'
                    }`}
                    style={{ width }}
                  ></div>
                </div>
              );
            })}
          </div>
          {data.disease && (
            <div className="mt-8 p-4 bg-red-100 border-l-4 border-red-500 text-red-700 rounded">
              <h3 className="font-semibold text-center">Detected Condition</h3>
              <p className="text-center mt-2">{data.disease}</p>
            </div>
          )}
        </div>
        </div>
        </div>
        </>
    )
}   

export default RealTime;