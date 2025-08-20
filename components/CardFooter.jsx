import React from 'react';

const CardWork = () => {
  const cardData = [
    {
      title: "HEAD OFFICE",
      details: [
        "296 Kati Street, Arusha City, Tanzania.",
        "Best Car Subscription Service"
      ]
    },
    {
      title: "CALL US",
      details: [
        "Make Call",
        "+255 (789) 586-014"
      ]
    },
    {
      title: "EMAIL US",
      details: [
        "Email On",
        "chricmac005@gmail.com"
      ]
    },
    {
      title: "OPENING HOURS",
      details: [
        "Mon to Fri: 9:00 AM - 5:00 PM",
        "Sat: 08:00 AM - 12:00 PM"
      ]
    }
  ];

  return (
    <div className="py-5 flex flex-col md:flex-row items-stretch md:items-center gap-4 md:gap-0">
      {cardData.map((card, index) => (
        <div key={index} className="flex-1">
          <div className="p-4 border-b-2 md:border-b-2 md:border-r-2 last:border-r-0 border-gray-300 h-full">
            <h1 className="font-bold text-[#896400] text-base md:text-lg">{card.title}</h1>
            {card.details.map((detail, i) => (
              <p key={i} className="text-sm md:text-base">{detail}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardWork;
