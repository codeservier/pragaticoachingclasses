import React from "react";
import image1 from "../assets/c1.jpg";
import image2 from "../assets/c2.jpg";
import image3 from "../assets/c3.jpg";
import image4 from "../assets/c4.jpg";
import image5 from "../assets/c5.jpg";
import image6 from "../assets/c6.jpg";
import Card from "../components/card/Card";
import { useNavigate, useParams } from "react-router-dom";

const ContinueWatching = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const cardsData = [
    {
      id: 1,
      title: "NEET",
      description:
        "This Batch is for NDA aspirants Targeting the NDA 1, 2025 Exam",
      image: image1,
    },
    {
      id: 2,
      title: "IIT JEE",
      description: "1000+ Hours of live Classes will be live on the PW app",
      image: image2,
    },
    {
      id: 3,
      title: "School Preparation",
      description: "Chapterwise/Topicwise Weekly & Monthly Test On Sunday.",
      image: image3,
    },
    {
      id: 4,
      title: "Govt Job Exams",
      description:
        "This Batch is for NDA aspirants Targeting the NDA 1, 2025 Exam",
      image: image4,
    },
    {
      id: 5,
      title: "Defence",
      description: "1000+ Hours of live Classes will be live on the PW app",
      image: image5,
    },
    {
      id: 6,
      title: "CA",
      description: "Chapterwise/Topicwise Weekly & Monthly Test On Sunday.",
      image: image6,
    },
  ];
  const handleCardClick = (id) => {
    navigate(`/coursedetail`);
  };
  return (
    <div className="container mx-auto p-4 my-4">
      <h1 className="text-2xl font-medium text-[#800020] text-400  mb-4">
        Continue Watching
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            image={card.image}
            onClick={() => handleCardClick()}
          />
        ))}
      </div>
    </div>
  );
};

export default ContinueWatching;
