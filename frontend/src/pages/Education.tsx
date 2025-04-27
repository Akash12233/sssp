

import { useState } from "react";

const disorders = [
  {
    id: "osa",
    title: "Obstructive Sleep Apnea (OSA)",
    content: {
      symptoms: [
        "Loud snoring",
        "Episodes of stopped breathing during sleep",
        "Gasping for air during sleep",
        "Morning headache",
        "Excessive daytime sleepiness",
      ],
      causes: [
        "Excess weight",
        "Narrow airway",
        "Family history",
        "Smoking",
        "Nasal congestion",
      ],
      treatment: [
        "CPAP therapy",
        "Oral appliances",
        "Lifestyle changes",
        "Surgery in some cases",
      ],
    },
  },
  {
    id: "eds",
    title: "Excessive Daytime Sleepiness (EDS)",
    content: {
      symptoms: [
        "Difficulty staying awake during the day",
        "Falling asleep at inappropriate times",
        "Lack of energy",
        "Difficulty concentrating",
        "Memory problems",
      ],
      causes: [
        "Poor sleep habits",
        "Sleep disorders",
        "Medical conditions",
        "Medications",
        "Shift work",
      ],
      treatment: [
        "Improving sleep hygiene",
        "Treating underlying conditions",
        "Medication if necessary",
        "Regular sleep schedule",
      ],
    },
  },
  {
    id: "snoring",
    title: "Snoring",
    content: {
      symptoms: [
        "Loud breathing sounds during sleep",
        "Dry mouth upon awakening",
        "Sore throat in the morning",
        "Restless sleep",
        "Daytime fatigue",
      ],
      causes: [
        "Mouth anatomy",
        "Alcohol consumption",
        "Nasal problems",
        "Sleep position",
        "Being overweight",
      ],
      treatment: [
        "Lifestyle changes",
        "Side sleeping",
        "Nasal strips or dilators",
        "Weight loss if needed",
        "Avoiding alcohol before bed",
      ],
    },
  },
];

export default function Education() {
  const [selectedTab, setSelectedTab] = useState("osa");

  return (
    <div className="min-h-screen p-4 sm:p-6 md:p-8 bg-gradient-to-b  to-slate-800">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
        Sleep Education
      </h1>

      {/* Tabs */}
      <div className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-4 mb-6 sm:mb-8">
        {disorders.map((disorder) => (
          <button
            key={disorder.id}
            className={`px-4 py-2 sm:px-6 sm:py-3 rounded-xl font-medium transition-all text-sm sm:text-base w-full sm:w-auto ${
              selectedTab === disorder.id
                ? "bg-gradient-to-r from-indigo-500 to-cyan-500 text-white shadow-lg"
                : "bg-slate-700/50 text-slate-300 hover:bg-slate-700/70 hover:text-white"
            }`}
            onClick={() => setSelectedTab(disorder.id)}
          >
            {disorder.title}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="space-y-6 sm:space-y-8">
        {disorders.map(
          (disorder) =>
            selectedTab === disorder.id && (
              <div key={disorder.id} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                <DisorderInfo title="Symptoms" items={disorder.content.symptoms} />
                <DisorderInfo title="Causes" items={disorder.content.causes} />
                <DisorderInfo title="Treatment" items={disorder.content.treatment} />
              </div>
            )
        )}
      </div>
    </div>
  );
}

function DisorderInfo({ title, items }) {
  return (
    <div className="p-4 md:p-6 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 shadow-xl">
      <h2 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-slate-200">
        <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
          {title}
        </span>
      </h2>
      <ul className="space-y-2 md:space-y-3">
        {items.map((item, index) => (
          <li 
            key={index}
            className="flex items-start text-sm md:text-base text-slate-300 before:content-['•'] before:text-cyan-400 before:mr-2 md:before:mr-3 before:mt-1"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
