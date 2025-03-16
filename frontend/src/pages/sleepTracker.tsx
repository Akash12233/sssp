import React, { useState, useEffect} from "react";

const SleepTracker : React.FC = () => {
    return (
      <div className=" min-h-screen w-full flex items-center justify-center">
        <div className="w-full lg:w-1/2 bg-white shadow-xl rounded-2xl p-6 transition-all hover:shadow-2xl">
          <nav className="border-b border-gray-200 pb-3 mb-4">
            <div className="flex items-center justify-between">
              <button className="text-xl px-2">&lt;</button>
              <h1 className="text-4xl font-semibold">Sleep Details</h1>
              <div className="flex gap-4">
                <svg
                  className="w-6 h-6 stroke-current text-gray-800"
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="1.5"
                >
                  <path d="M18 16.08a2.88 2.88 0 0 1 0 5.76 2.88 2.88 0 0 1 0-5.76zM6 8.88a2.88 2.88 0 1 1 0 5.76 2.88 2.88 0 0 1 0-5.76zM18 2a2.88 2.88 0 1 1 0 5.76A2.88 2.88 0 0 1 18 2z" />
                </svg>
                <svg
                  className="w-6 h-6 stroke-current text-gray-800"
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="1.5"
                >
                  <path d="M12 19v-6m0 0V5m0 8H5m14 0h-7" />
                </svg>
              </div>
            </div>
          </nav>
          <main>
            <div className="bg-gray-50 rounded-xl p-4 mb-4">
              <div className="flex justify-between font-semibold text-gray-800">
                <span>10:00PM - 6:00AM</span>
                <span>11:21PM - 6:48AM</span>
              </div>
            </div>

            <section className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-base font-medium">Sleep Stages</h2>
                <span className="text-gray-500 text-sm">&gt;</span>
              </div>
              <div className="relative h-36 mb-4">
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between h-full px-2 space-x-1">
                  <div className="w-1/5 bg-indigo-500 rounded-t-md" style={{ height: "30%" }}></div>
                  <div className="w-1/5 bg-indigo-500 rounded-t-md" style={{ height: "80%" }}></div>
                  <div className="w-1/5 bg-indigo-500 rounded-t-md" style={{ height: "45%" }}></div>
                  <div className="w-1/5 bg-indigo-500 rounded-t-md" style={{ height: "60%" }}></div>
                  <div className="w-1/5 bg-indigo-500 rounded-t-md" style={{ height: "20%" }}></div>
                </div>
                <div className="flex justify-between text-black text-xs px-2 mt-10">
                  <span>10:00PM</span>
                  <span>12:40AM</span>
                  <span>3:20AM</span>
                  <span>6:00AM</span>
                </div>
              </div>
            </section>

            <section className="mb-4">
              <div className="flex items-center mb-2">
                <div className="flex items-center w-28 gap-2">
                  <div className="w-3 h-3 rounded-full bg-gray-200"></div>
                  <span className="text-sm">Awake 0m</span>
                </div>
                <div className="flex-grow h-2 bg-gray-100 rounded mx-4">
                  <div className="h-full bg-gray-200 rounded" style={{ width: "0%" }}></div>
                </div>
                <span className="w-10 text-right text-sm font-medium">0%</span>
              </div>
              <div className="flex items-center mb-2">
                <div className="flex items-center w-28 gap-2">
                  <div className="w-3 h-3 rounded-full bg-indigo-500"></div>
                  <span className="text-sm">REM 2h</span>
                </div>
                <div className="flex-grow h-2 bg-gray-100 rounded mx-4">
                  <div className="h-full bg-indigo-500 rounded" style={{ width: "65%" }}></div>
                </div>
                <span className="w-10 text-right text-sm font-medium">65%</span>
              </div>
              <div className="flex items-center mb-2">
                <div className="flex items-center w-28 gap-2">
                  <div className="w-3 h-3 rounded-full bg-blue-400"></div>
                  <span className="text-sm">Light 4h</span>
                </div>
                <div className="flex-grow h-2 bg-gray-100 rounded mx-4">
                  <div className="h-full bg-blue-400 rounded" style={{ width: "50%" }}></div>
                </div>
                <span className="w-10 text-right text-sm font-medium">50%</span>
              </div>
              <div className="flex items-center">
                <div className="flex items-center w-28 gap-2">
                  <div className="w-3 h-3 rounded-full bg-indigo-900"></div>
                  <span className="text-sm">Deep 2h</span>
                </div>
                <div className="flex-grow h-2 bg-gray-100 rounded mx-4">
                  <div className="h-full bg-indigo-900 rounded" style={{ width: "25%" }}></div>
                </div>
                <span className="w-10 text-right text-sm font-medium">25%</span>
              </div>
            </section>

            <section className="border-t border-gray-200 pt-4">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-base font-medium">Blood Oxygen During Sleep</h2>
                <span className="text-gray-500 text-sm">&gt;</span>
              </div>
              <p className="text-sm text-gray-500">No blood oxygen data</p>
            </section>
          </main>
        </div>
      </div>
    )
}   

export default SleepTracker;