import React from 'react';
import { Armchair, Fuel, Fence, Star } from 'lucide-react';
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const cardData = [
	{
		image: "https://images.unsplash.com/photo-1661501315656-30e4496eeaad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvbmRhJTIwY2l2aWN8ZW58MHx8MHx8fDA%3D",
		title: "HONDA CIVIC",
		text: "1.5 VTEC Turbo Sport 5dr CVT",
		price: "$22,150.00",
		set: "5 Seats",
		door: "4 Doors",
		gas: "Diesel"
	},
	{
		image: "https://images.unsplash.com/photo-1743114713466-f12a85992a75?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TUFaREElMjBDWCUyMDV8ZW58MHx8MHx8fDA%3D",
		title: "MAZDA CX-5",
		text: "2.0 Skyactiv-G SE-L Lux 5dr",
		price: "$24,990.00",
		set: "4 Seats",
		door: "4 Doors",
		gas: "Petrol"
	},
	{
		image: "https://images.unsplash.com/photo-1654689289571-07f69459ae35?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fEtJQSUyMFNQT1JUQUdFfGVufDB8fDB8fHww",
		title: "KIA SPORTAGE",
		text: "1.6 T-GDi 2 5dr Auto AWD",
		price: "$26,700.00",
		set: "5 Seats",
		door: "4 Doors",
		gas: "Diesel"
	},
	{
		image: "https://images.unsplash.com/photo-1661501315656-30e4496eeaad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvbmRhJTIwY2l2aWN8ZW58MHx8MHx8fDA%3D",
		title: "HONDA CIVIC",
		text: "1.5 VTEC Turbo Sport 5dr CVT",
		price: "$22,150.00",
		set: "5 Seats",
		door: "4 Doors",
		gas: "Diesel"
	},
	{
		image: "https://images.unsplash.com/photo-1743114713466-f12a85992a75?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TUFaREElMjBDWCUyMDV8ZW58MHx8MHx8fDA%3D",
		title: "MAZDA CX-5",
		text: "2.0 Skyactiv-G SE-L Lux 5dr",
		price: "$24,990.00",
		set: "4 Seats",
		door: "4 Doors",
		gas: "Petrol"
	},
	{
		image: "https://images.unsplash.com/photo-1654689289571-07f69459ae35?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fEtJQSUyMFNQT1JUQUdFfGVufDB8fDB8fHww",
		title: "KIA SPORTAGE",
		text: "1.6 T-GDi 2 5dr Auto AWD",
		price: "$26,700.00",
		set: "5 Seats",
		door: "4 Doors",
		gas: "Diesel"
	}
];

// sliders
const settings = {
	dots: false,
	infinite: true,
	slidesToShow: 3,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 2000,
	pauseOnHover: true,
  arrows: false,
	responsive: [
		{
			breakpoint: 1024,
			settings: { slidesToShow: 2 }
		},
		{
			breakpoint: 640,
			settings: { slidesToShow: 1 }
		}
	]
};

function CardOur() {
    return (
        <div className="slider-container mx-auto px-2 md:px-8 py-4 items-center justify-center">
            <Slider {...settings}>
                {cardData.map((card, idx) => (
                    <motion.div
                        key={idx}
                        className='border-2 border-[#896400] rounded-md gap-3 bg-[#181818] max-w-sm'
                        initial={{ opacity: 0, y: 60 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, type: "spring", delay: idx * 0.2 }}
                        viewport={{ once: false, amount: 0.7 }}
                    >
                        {/* Card Image */}
                        <div
                            className='h-[200px] md:h-[240px] w-full rounded-md bg-cover bg-center'
                            style={{ backgroundImage: `url(${card.image})` }}>
                            <h1 className='text-white px-2 rounded-br-lg font-bold bg-[#896400] absolute'>{card.title}</h1>
                        </div>
                        {/* Card Content */}
                        <div className='p-3 flex flex-col gap-2 text-white'>
                            <div>
                                <h1 className='font-bold md:text-xl my-2'>{card.title}</h1>
                                <p className='py-1'>{card.text}</p>
                            </div>
                            {/* Icons Info */}
                            <div className='flex gap-5 items-center '>
                                <div className='items-center text-center flex flex-col justify-center'>
                                    <Armchair size={25} />
                                    <p className='text-sm'>{card.set}</p>
                                </div>
                                <div className='items-center text-center flex flex-col justify-center'>
                                    <Fence size={25} />
                                    <p className='text-sm'>{card.door}</p>
                                </div>
                                <div className='items-center text-center flex flex-col justify-center'>
                                    <Fuel size={25} />
                                    <p className='text-sm'>{card.gas}</p>
                                </div>
                            </div>
                            {/* Price and Rating */}
                            <div className='flex items-center justify-between'>
                                <p className='text-[#896400] font-bold text-lg'>{card.price}</p>
                                <span className="flex items-center gap-1">
                                    <Star size={20} className="text-[#896400] fill-[#896400]" />
                                    <Star size={20} className="text-[#896400] fill-[#896400]" />
                                    <Star size={20} className="text-[#896400] fill-[#896400]" />
                                    <Star size={20} className="text-[#896400] fill-transparent stroke-current" />
                                </span>
                            </div>
                        </div>
                        {/* Buttons */}
                        <div className='flex justify-between p-3 text-white'>
                            <button className='border-2 border-[#896400] hover:bg-[#ad7f00] cursor-pointer rounded-md px-4 py-2 font-bold transition-all duration-400 delay-150'>
                                View Detail
                            </button>
                            <button className='bg-[#896400] hover:bg-[#ad7f00] cursor-pointer rounded-md px-4 py-2 font-bold transition-all duration-300 delay-150'>
                                Book Now
                            </button>
                        </div>
                    </motion.div>
                ))}
            </Slider>
        </div>
    );
}

export default CardOur;
