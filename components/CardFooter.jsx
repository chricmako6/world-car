import React from 'react';
import { motion } from 'framer-motion';

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
        <motion.div
          key={index}
          className="max-w-6xl mx-auto flex-1"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 60 }}
          transition={{
            duration: 0.8,
            type: "spring",
            delay: index * 0.3
          }}
          viewport={{ once: false, amount: 0.7 }}
        >
          <div className="p-4 h-full">
            <h3 className="font-bold text-[#896400]">{card.title}</h3>
            {card.details.map((detail, i) => (
              <p key={i} className="text-sm md:text-base">{detail}</p>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default CardWork;
