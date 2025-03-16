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
    <div className="space-y-8 p-6">
      <h1 className="text-3xl font-bold">Sleep Education</h1>

      {/* Tabs */}
      <div className="flex space-x-4 border-b">
        {disorders.map((disorder) => (
          <button
            key={disorder.id}
            className={`px-4 py-2 font-medium ${
              selectedTab === disorder.id
                ? "border-b-2 border-blue-500 text-blue-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setSelectedTab(disorder.id)}
          >
            {disorder.title}
          </button>
        ))}
      </div>

      {/* Content */}
      <div>
        {disorders.map(
          (disorder) =>
            selectedTab === disorder.id && (
              <div key={disorder.id} className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
    <div className="p-6 bg-white shadow-lg rounded-lg border">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
