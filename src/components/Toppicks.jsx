// src/components/Toppicks.jsx
import React from "react";
import image1 from "../assets/c3.jpg";
import image2 from "../assets/c6.jpg";
import image3 from "../assets/3.webp";
import Card from "../components/card/Card";

const Toppicks = () => {
  const cardsData = [
    {
      title: "Starting with DevOps",
      description: "By Syed Hasnain",
      image: image1,
    },
    {
      title: "Basics of Arabic",
      description: "By Syed Hasnain",
      image: image2,
    },
  ];

  return (
    <div className="container mx-auto p-4 my-4">
      <h1 className="text-2xl font-medium text-[#800020] text-400  mb-4">
        Top picks
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            image={card.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Toppicks;
