import React from 'react';
import { Star } from 'lucide-react';
import data from "@/data/Data.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function CardTestmonial() {
  // sliders
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 }
      },
        {
      breakpoint: 480, // Extra small devices
      settings: { slidesToShow: 1 }
    }
    ]
  };

  return (
    <div className="slider-container px-2">
      <Slider {...settings}>
        {data.testimonial.map((testimonial) => (
          <div key={testimonial.id} className="px-2">
            <div className="bg-gray-200 p-5 rounded-lg shadow-md h-full">
                <div className='flex justify-between mb-3'>
                    <img
                    src={testimonial.user}
                    alt={testimonial.username}
                    className="w-16 h-16 rounded-full mb-3 object-cover object-center shadow-xs shadow-black" 
                />
                    <span className="flex items-center gap-1">
                        <Star size={20} className="text-[#896400] fill-[#896400]" />
                        <Star size={20} className="text-[#896400] fill-[#896400]" />
                        <Star size={20} className="text-[#896400] fill-[#896400]" />
                        <Star size={20} className="text-[#896400] fill-transparent stroke-current" />
                    </span>
                </div>
                
              <p className="text-gray-700">"{testimonial.description}"</p>
              <p className="font-bold mt-3">{testimonial.username}</p>
              <p className="text-sm text-gray-500">{testimonial.time}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CardTestmonial;
