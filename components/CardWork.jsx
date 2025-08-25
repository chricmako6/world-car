import React from 'react';
import data from "@/data/Data.json";
import { motion } from 'framer-motion';

// Import Lucide icons
import { Briefcase, Code, PenTool, Layers } from 'lucide-react';

function CardWork() {
  const gridPositions = [
    "p-4 shadow-xl hidden md:block rounded-md hover:rotate-3 transition-transform duration-300 cursor-pointer w-[260px]", 
    "col-start-1 row-start-2 p-4 hidden md:block shadow-xl rounded-md hover:rotate-3 transition-transform duration-300 cursor-pointer w-[260px]",
    "col-start-2 row-start-1 p-4 hidden md:block shadow-xl rounded-md hover:-rotate-3 transition-transform duration-300 cursor-pointer w-[260px]",
    "col-start-2 row-start-2 p-4 hidden md:block shadow-xl rounded-md hover:-rotate-3 transition-transform duration-300 cursor-pointer w-[260px]"
  ];

  const iconMap = {
    0: Briefcase,
    1: Code,
    2: Layers,
    3: PenTool
  };

  return (
  <div className="grid grid-cols-2 gap-4 ">
    {data.work.map((item, index) => {
      const IconComponent = iconMap[index] || Briefcase;
      const key = item.id ? item.id : `${item.title}-${index}`;

      return (
      <motion.div
        key={key}
        className={gridPositions[index] || "bg-gray-100/10 p-4 rounded-md"}
        initial={{ opacity: 0, x: 60 }}      
        whileInView={{ opacity: 1, x: 0 }}  
        exit={{ opacity: 0, x: 60 }}         
        transition={{ duration: 1, type: "spring", delay: index * 0.3 }} // slower, smoother
      >
        <div className="mb-2 flex justify-center">
          <IconComponent size={24} color="#896400" strokeWidth={2} />
        </div>
        <h3 className="text-lg font-bold text-center">{item.title}</h3>
        <p className="text-sm text-gray-600 text-center">{item.desc}</p>
      </motion.div>
      );
    })}
  </div>
  );
}

export default CardWork;
