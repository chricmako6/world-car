import React from "react";

const CarCard = ({ img, name, description }) => {
  return (
    <div
      className="relative mt-10 w-96 h-64 rounded-2xl shadow shadow-gray-100 bg-cover bg-center"
      style={{ backgroundImage: `url(${img})` }} >
      {/* Optional: Overlay for better readability */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-40 rounded-2xl"></div> */}

      {/* Text content */}
      <div className="absolute bottom-4 left-4 text-white z-10">
        <h2 className="text-xl font-bold rum-title">{name}</h2>
        <p className="mt-2">{description}</p>
      </div>
    </div>
  );
};

export default CarCard;
