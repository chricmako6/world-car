"use client";
import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import data from "@/data/Data.json";
import CarCard from '../components/CarCard';
import CardPackage from '@/components/CardPackage';
import CardOur from '@/components/CardOur';
import CardWork from '@/components/CardWork';
import CardTestmonial from '@/components/CardTestmonial';
import CardFooter from '@/components/CardFooter';
import CardFoot from '@/components/CardFoot';

// Import react-slick and slick-carousel styles
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const { cars, packages, logos } = data;

  // Responsive settings for react-slick
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  // Make sure we don't break if cars is missing or empty
  if (!cars || !Array.isArray(cars) || cars.length === 0) {
    return <p className="text-center text-red-500">No cars available.</p>;
  }

  return (
    <>
      {/* Hero section */}
      <section className="">
        <div className="h-[500px] hero-image"></div>
      </section>

      {/* Car Carousel Section */}
      <section className="p-5 mt-20">
        <motion.h1
        className="rum-title text-center text-xl md:text-3xl font-bold mb-5"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 60 }}
        transition={{ duration: 0.8, type: "spring" }}
        viewport={{ once: false, amount: 0.7 }} >
        Luxury Limousine for maximum satisfaction
       </motion.h1>

        <div className="relative p-5 overflow-hidden">
          {/* here is the place to fix slide */}
          <Slider {...sliderSettings}>
            {cars.map((car, idx) => (
              <motion.div
                key={car.id}
                className="flex items-center justify-center px-2"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, type: "spring", delay: idx * 0.2 }}
                viewport={{ once: false, amount: 0.7 }} >
                <CarCard
                  img={car.img}
                  name={car.name}
                  description={car.description}
                  className="inset-shadow-sm inset-shadow-indigo-500/50"
                />
              </motion.div>
            ))}
          </Slider>
        </div>
      </section>

      {/* another section */}
      <section className='p-5 mt-20 bg-black h-[390px] grid md:grid-cols-2 grid-cols-1'>
        <div className="p-5">
           <motion.h1
            className="rum-title text-xl md:text-3xl font-bold w-[400px] py-5 text-white"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 60 }}
            transition={{ duration: 0.8, type: "spring" }}
            viewport={{ once: false, amount: 0.7 }}
          >
            What Make my Car Direcly Different
          </motion.h1>
         
          <motion.p
            className='font-semibold text-white pb-4'
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.8, type: "spring" }}
            viewport={{ once: false, amount: 0.7 }}
          >
            Our car subscription service is 100% online and hassle free. 
            With our number of 5 star Google reviews, you can trust us to provide
            the best vehicles and service position 
          </motion.p>
          <motion.p
            className='py-4 font-semibold text-white hidden md:block'
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.8, type: "spring", delay: 0.2 }}
            viewport={{ once: false, amount: 0.7 }}
          >
            Your can order a vehicle in a matter of minutes or give our
            team a call on <span className='font-bold'>0789 566 612</span>
            to discuss any questions you might have.
          </motion.p>
          <motion.button
            className="bg-[#896400] hover:bg-[#ad7f00] cursor-pointer text-white py-2 px-5 rounded-md"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.8, type: "spring", delay: 0.4 }}
            viewport={{ once: false, amount: 0.7 }}
          >
            KNOW MORE
          </motion.button>
        </div>

        <div className="inset-shadow-black bg-[#896400] hidden md:block rounded-r-lg rounded-tr-[5rem] gradient-shadow-right">
          <h1>The Best Cars</h1>
          <p>Bmw</p>
        </div>
      </section>

      {/* What make my car directly Different */}
      <section className='p-5 mt-20'>
        <motion.h1
        className="rum-title text-center text-xl md:text-3xl font-bold py-5"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 60 }}
        transition={{ duration: 0.8, type: "spring" }}
        viewport={{ once: false, amount: 0.7 }} >
            What Make my Car Direcly Different
        </motion.h1>
       <div className="grid grid-cols-1 md:grid-cols-3 ">
          {packages.map((pkg, idx) => (
            <motion.div
              key={pkg.id}
              className='items-center justify-center flex'
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, type: "spring", delay: idx * 0.2 }}
              viewport={{ once: false, amount: 0.7 }}
            >
              <CardPackage 
                svg={pkg.svg}
                title={pkg.title}
                desc={pkg.desc}
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* OUR CARS */}
      <section className='p-5 px-5 mt-20  bg-black'>
       <div className='flex flex-wrap py-8 p-5 justify-around'>
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.8, type: "spring" }}
            viewport={{ once: false, amount: 0.7 }}
          >
            <h1 className='rum-title text-white py-3 text-xl md:text-3xl font-bold'>OUR CARS</h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 60 }}
            transition={{ duration: 0.8, type: "spring", delay: 0.4 }}
            viewport={{ once: false, amount: 0.7 }}
          >
            <p className='text-white font-bold'>
              From sleek city rumions to top of the range SUVs, and all the latest electric vehicles,
              our range has something for everyone. <span className='hidden md:block'>Explore a World of Automotive Excellence with Our 
              Diverse Fleet. From the smooth ability of our city runners.</span>
            </p>
          </motion.div>
        </div>
        <div className='w-full mb-10 md:mb-20 flex justify-center p-6'>
          <div className="w-full ">
            <CardOur />
          </div>
        </div>
      </section>

      {/* logos */}
       <section className="bg-gray-100 relative overflow-hidden w-full py-5 px-2">
      {/* Gradient overlays */}
      <div className="hidden md:block pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white via-white to-transparent z-10" />
      <div className="hidden md:block pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white via-white to-transparent z-10" />

      {/* Logos */}
      <div className="flex items-center justify-center gap-20 w-full flex-wrap">
        {logos.map((logo, index) => (
          <motion.img
            key={logo.id}
            src={logo.img}
            alt={logo.alt}
            className="w-24 h-auto object-contain opacity-80"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              type: "spring",
              delay: index * 0.3,
            }}
            viewport={{ once: false, amount: 0.3 }}
          />
        ))}
      </div>
    </section>

      {/* customer say */}
      <section className='p-5 mt-20'>
        <div className='grid grid-cols-1 md:grid-cols-2 mt-2'>
          <div className='p-6'>
            <motion.h1
              className='rum-title text-xl md:text-3xl font-bold py-5'
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 60 }}
              transition={{ duration: 0.8, type: "spring" }}
              viewport={{ once: false, amount: 0.7 }}
            >
              What Our Customers Say
            </motion.h1>
            <motion.p
              className='font-semibold py-4'
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.8, type: "spring" }}
              viewport={{ once: false, amount: 0.7 }}
            >
              Car subscription is an alternative to leasing and ownership.
              With car subscriptions you can subriscriptions you can subscribe to a car for a monthly fee,
              which includes insurance, maintenance, and roadside assistance.
            </motion.p>
            <motion.button
              className="bg-[#896400] hover:bg-[#ad7f00] cursor-pointer text-white py-2 px-5 rounded-md"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.8, type: "spring", delay: 0.4 }}
              viewport={{ once: false, amount: 0.7 }}
            >
              BROWSE CARS
            </motion.button>
          </div>
          <div className=''>
            <CardWork />
          </div>
        </div>
      </section>

      {/* charging */}
      <section className="mt-20 w-screen">
        <div className='grid grid-cols-1 md:grid-cols-3'>
          <div
            className='col-span-2 relative h-96 flex items-end p-5'
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1745392842741-10dd83fa4dca?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
              backgroundSize: 'cover',
              backgroundPosition: 'center', 
            }}
           >
           <motion.h1
            className='text-2xl font-bold mb-8 ml-5 md:ml-10 bg-white bg-opacity-80 p-4 rounded-lg '
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 80 }}
            transition={{ duration: 1.6, type: "spring" }}
            viewport={{ once: false, amount: 0.7 }} >
            CHARGE INTO THE FUTURE: <span className='text-[#896400]'>EXPLORE </span> THE EV CHARGING CAR AND VANS PLANS
          </motion.h1>
          </div>
          
          <div className='bg-[#896400] flex flex-col items-center justify-center text-center text-white p-5'>
            <motion.h1
              className='text-white text-xl md:text-3xl font-bold p-5'
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 60 }}
              transition={{ duration: 1.2, type: "spring" }}
              viewport={{ once: false, amount: 0.7 }}
            >
              EV Charging Plans
            </motion.h1>
            <motion.p
              className='text-white font-semibold p-5'
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 60 }}
              transition={{ duration: 1.4, type: "spring", delay: 0.3 }}
              viewport={{ once: false, amount: 0.7 }}
            >
              Our EV charging plans are designed to provide you with the best charging experience for your electric vehicles.
              Enjoy fast, reliable, and convenient charging solutions tailored to your needs.
            </motion.p>
            <motion.button
              className="bg-white hover:bg-gray-200 cursor-pointer text-[#896400] py-2 px-5 rounded-md m-5"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 60 }}
              transition={{ duration: 1.4, type: "spring", delay: 0.4 }}
              viewport={{ once: false, amount: 0.7 }}
            >
              LEARN MORE
            </motion.button>
          </div>
        </div>
      </section>

      {/* testimonial */}
      <section className='p-5 mt-20'>
         <motion.h1
            className="rum-title text-center text-xl md:text-3xl font-bold py-5"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 60 }}
            transition={{ duration: 0.8, type: "spring" }}
            viewport={{ once: false, amount: 0.7 }} >
              What Our Customers Say
          </motion.h1>
        <div className='mt-6'>
          <CardTestmonial />
        </div>
      </section>

      {/* footer */}
      <section className='p-5 mt-20 '>
        <div>
          <CardFooter />
        </div>
        <div>
          <CardFoot />
        </div>
      </section>
    </>
  );
};

export default Home;
