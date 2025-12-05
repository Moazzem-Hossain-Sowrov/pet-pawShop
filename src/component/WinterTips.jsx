import React from "react";

const tips = [
  {
    id: 1,
    title: "Keep Your Pet Warm",
    description: "Use winter jackets, sweaters, and proper bedding to protect pets from cold drafts.",
    icon: "❄️",
  },
  {
    id: 2,
    title: "Protect Their Paws",
    description: "Snow, ice, and salt can damage paw pads. Use paw balms or protective boots.",
    icon: "🐾",
  },
  {
    id: 3,
    title: "Avoid Overbathing",
    description: "Reduce baths during winter to prevent skin dryness. Use moisturizing shampoos.",
    icon: "🛁",
  },
  {
    id: 4,
    title: "Provide Proper Nutrition",
    description: "Pets may need extra calories in winter to maintain body heat.",
    icon: "🍗",
  },
];

const WinterTips = () => {
  return (
    <div className="lg:px-[120px] sm:px-5 px-10">
      <div>
        <h2 className="font-bold md:text-4xl sm:text-3xl text-2xl text-center p-6 text-blue-500">
          Winter Care Tips for Pets
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 gap-4">
        {tips.map((tip) => (
          <div key={tip.id} className="card w-auto sm:w-full bg-base-100 card-md shadow-sm">
            <div className="card-body">
              <div className="text-4xl mb-4">{tip.icon}</div>
              <h2 className="card-title text-blue-800 text-xl sm:text-lg">{tip.title}</h2>
              <p className="text-sm sm:text-xs">{tip.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

  )
}

export default WinterTips;