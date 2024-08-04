// src/components/Card.jsx
import React from "react";

const Card = ({ title, description, image, onClick }) => {
  return (
    <div
      className="bg-white shadow-lg rounded-lg cursor-pointer overflow-hidden"
      onClick={onClick}
    >
      <img
        src={image}
        alt={title}
        className="w-full h-32 sm:h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-medium  text-[#800020]">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default Card;
