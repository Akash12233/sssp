import React from "react";
import Sidebar from "./components/sidebar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div
      style={{
        backgroundImage: 'url(/bgimg.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
      }}
      className="h-screen w-full flex"
    >
      {/* Sidebar (Fixed Left) */}
      <div className="w-64 h-full bg-gray-900 shadow-lg">
        <Sidebar />
      </div>

      {/* Main Content (Takes Remaining Space) */}
      <div className="flex-1 p-6 bg-black/50 overflow-auto">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
