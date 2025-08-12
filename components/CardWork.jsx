import React from 'react';
import data from "@/data/Data.json";

// Import Lucide icons
import { Briefcase, Code, PenTool, Layers } from 'lucide-react';

function CardWork() {
  const gridPositions = [
    "bg-white p-4 shadow-xl hidden md:block rounded-md hover:rotate-3 transition-transform duration-300 cursor-pointer",              
    "row-span-2 p-4 bg-[#896400] hidden md:block shadow-xl rounded-md hover:rotate-3 transition-transform duration-300 cursor-pointer", 
    "col-start-1 row-start-2 p-4 hidden md:block shadow-xl rounded-md hover:rotate-3 transition-transform duration-300 cursor-pointer",
    "col-start-3 row-start-1 p-4 hidden md:block shadow-xl rounded-md hover:-rotate-3 transition-transform duration-300 cursor-pointer",
    "col-start-3 row-start-2 p-4 hidden md:block shadow-xl rounded-md hover:-rotate-3 transition-transform duration-300 cursor-pointer"
  ];
  
  const iconMap = {
    0: Briefcase,
    1: Code,
    2: Briefcase,
    3: PenTool,
    4: Layers
  };

  return (
    <div className="grid grid-cols-3 grid-rows-2 gap-4">
      {data.work.map((item, index) => {
        const IconComponent = iconMap[index] || Briefcase;
        return (
          <div
            key={index}
            className={gridPositions[index] || "bg-gray-100/10 p-4 rounded-md"}
          >
            <div className="mb-2 flex justify-center">
              <IconComponent
                size={24}
                color={"#896400"}
                strokeWidth={2}
              />
            </div>
            <h3 className="text-lg font-bold text-center">{item.title}</h3>
            <p className="text-sm text-gray-600 text-center">{item.desc}</p>
          </div>
        );
      })}
    </div>
  );
}

export default CardWork;
