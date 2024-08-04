import React, { useEffect, useState } from "react";
import Card from "../components/card/Card";
import image1 from "../assets/c1.jpg";
import image2 from "../assets/c2.jpg";
import image3 from "../assets/c3.jpg";
import image4 from "../assets/c4.jpg";
import image5 from "../assets/c5.jpg";
import image6 from "../assets/c6.jpg";
import Loader from "../components/loader/Loader";
import { useNavigate } from "react-router-dom";
const MyLearning = () => {
  const navigate = useNavigate();
  const cardsData = [
    {
      title: "IIT JEE",
      description: "1000+ Hours of live Classes will be live on the PW app",
      image: image2,
    },
    {
      title: "School Preparation",
      description: "Chapterwise/Topicwise Weekly & Monthly Test On Sunday.",
      image: image3,
    },
    {
      title: "NEET",
      description:
        "This Batch is for NDA aspirants Targeting the NDA 1, 2025 Exam",
      image: image4,
    },

    {
      title: "Defence",
      description: "1000+ Hours of live Classes will be live on the PW app",
      image: image5,
    },
    {
      title: "Govt Job Exams",
      description:
        "This Batch is for NDA aspirants Targeting the NDA 1, 2025 Exam",
      image: image6,
    },
    {
      title: "CA",
      description: "Chapterwise/Topicwise Weekly & Monthly Test On Sunday.",
      image: image1,
    },
  ];
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  const handleCardClick = (id) => {
    navigate(`/coursedetail`);
  };
  return (
    <>
      {loading ? (
        <div className="min-h-[80vh] flex items-center justify-center">
          <Loader />
        </div>
      ) : (
        <div className="max-w-screen-xl mx-auto p-2">
          <div className="container mx-auto p-4 my-4">
            <h1 className="text-2xl font-medium text-[#800020] text-400  mb-4">
              My Learning
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
        </div>
      )}
    </>
  );
};

export default MyLearning;
