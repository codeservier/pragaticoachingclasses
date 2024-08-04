// src/components/TopInstructor.jsx
import React from "react";
import image1 from "../assets/c5.jpg";
import image2 from "../assets/c4.jpg";
import image3 from "../assets/c5.jpg";
import Card from "../components/card/Card";
import TopInstructorCard from "./card/TopInstructorCard";

const TopInstructor = () => {
  const cardsData = [
    {
      title: "Fred Louis",
      description: "100+ reviews | 10+ live courses | Mathematics",
      image: image1,
    },
    {
      title: "Fred Louis",
      description: "100+ reviews | 10+ live courses | Mathematics",
      image: image2,
    },
    {
      title: "Fred Louis",
      description: "100+ reviews | 10+ live courses | Mathematics",
      image: image3,
    },
    {
      title: "Fred Louis",
      description: "100+ reviews | 10+ live courses | Mathematics",
      image: image3,
    },
    {
      title: "Fred Louis",
      description: "100+ reviews | 10+ live courses | Mathematics",
      image: image2,
    },
    {
      title: "Fred Louis",
      description: "100+ reviews | 10+ live courses | Mathematics",
      image: image1,
    },
  ];

  return (
    <div className="container mx-auto p-4 my-4">
      <h1 className="text-2xl font-medium text-[#800020] text-400  mb-4">
        Top instructors
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {cardsData.map((card, index) => (
          <TopInstructorCard
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

export default TopInstructor;
