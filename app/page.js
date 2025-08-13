"use client";
import React, { useEffect, useState } from 'react';
import data from "@/data/Data.json";
import CarCard from '../components/CarCard';
import CardPackage from '@/components/CardPackage';
import CardOur from '@/components/CardOur';
import CardWork from '@/components/CardWork';
import CardTestmonial from '@/components/CardTestmonial';

const Home = () => {
  const { cars, packages, logos } = data;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);

  // Set slidesToShow based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(1);
      } else {
        setSlidesToShow(3);
      }
    };

    handleResize(); // Run once on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-slide effect
  useEffect(() => {
    const maxIndex = Math.max(0, cars.length - slidesToShow);

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1 > maxIndex ? 0 : prev + 1));
    }, 3000); // Slide every 3 seconds

    return () => clearInterval(interval);
  }, [slidesToShow, cars.length]);

  // Make sure we don't break if cars is missing or empty
  if (!cars || !Array.isArray(cars) || cars.length === 0) {
    return <p className="text-center text-red-500">No cars available.</p>;
  }

  const maxIndex = Math.max(0, cars.length - slidesToShow);
  const visibleCars = cars.slice(currentIndex, currentIndex + slidesToShow);

  return (
    <>
      {/* Hero section */}
      <section className="">
        <div className="h-[500px] hero-image"></div>
      </section>

      {/* Car Carousel Section */}
      <section className="p-5 mt-20">
        <h1 className="rum-title text-center text-xl md:text-3xl font-bold mb-5">
          Luxury Limousine for maximum satisfaction
        </h1>

        <div className="relative p-5 overflow-hidden">
          {/* here is the place to fix slide */}
          <div className="flex transition-transform duration-600 ease-in-out"> 
            {visibleCars.map((car) => (
              <div key={car.id} className="flex-shrink-0 w-full md:w-1/3 flex items-center justify-center">
                <CarCard
                  img={car.img}
                  name={car.name}
                  description={car.description}
                  className="inset-shadow-sm inset-shadow-indigo-500/50"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* another section */}
      <section className='p-5 mt-20 bg-black h-[390px] grid md:grid-cols-2 grid-cols-1'>
            <div className="p-5">
              <h1 className='rum-title text-xl md:text-3xl font-bold w-[400px] py-5 text-white'>
                What Make my Car Direcly Different
              </h1>
              <p className='font-semibold text-white pb-4'>
                Our car subscription service is 100% online and hassle free. 
                With our number of 5 star Google reviews, you can trust us to provide
                the best vehicles and service position 
              </p>
              <p className='py-4 font-semibold text-white hidden md:block'>
                Your can order a vehicle in a matter of minutes or give our
                team a call on <span className='font-bold'>0789 566 612</span>
                to discuss any questions you might have.
              </p>
               <button
                className="bg-[#896400] hover:bg-[#ad7f00] cursor-pointer text-white py-2 px-5 rounded-md">
                KNOW MORE
              </button>
            </div>
            <div className="inset-shadow-black bg-[#896400] hidden md:block rounded-r-lg rounded-tr-[5rem] gradient-shadow-right">
              <h1>The Best Cars</h1>
              <p>Bmw</p>
            </div>
      </section>

          {/* What make my car directly Different */}
        <section className='p-5 mt-20'>
          <h1 className='rum-title text-center text-xl md:text-3xl font-bold py-5'>
                What Make my Car Direcly Different
          </h1>
         
          <div className="grid grid-cols-1 md:grid-cols-3 ">
            {packages.map((pkg) => (
              <div key={pkg.id} className='items-center justify-center flex'>
                <CardPackage 
                  svg={pkg.svg}
                  title={pkg.title}
                  desc={pkg.desc}
                />
              </div>
            ))}
          </div>
        </section>

        {/* OUR CAR */}
        <section className='p-5 px-5 mt-20  bg-black'>
          <div className='flex flex-wrap py-8 p-5 justify-around'>
            <div>
              <h1 className='rum-title text-white py-3 text-xl md:text-3xl font-bold'>OUR CARS</h1>
            </div>
            <div>
              <p className='text-white font-bold'>
                From sleek city rumions to top of the range SUVs, and all the latest electric vehicles,
                our range has something for everyone. <span className='hidden md:block'>Explore a World of Automotive Excellence with Our 
                Diverse Fleet. From the smooth ability of our city runners.</span>
              </p>
            </div>
          </div>
            <div className='w-full mb-10 md:mb-20 flex justify-center p-6'>
              <div className="w-full ">
                <CardOur />
              </div>
            </div>
        </section>

        {/* logos */}
        <section className='bg-gray-100 relative overflow-hidden w-full py-5 px-2'>
          <style>{`
            @keyframes scroll-left {
              0% { transform: translateX(5); }
              100% { transform: translateX(-70%); }
            }
            @media (min-width: 768px) {
              .scroll-anim {
                animation: scroll-left 30s linear infinite;
                flex-wrap: nowrap;
              }
            }
            @media (max-width: 768px) {
              .scroll-anim {
                flex-wrap: wrap;
                justify-content: center;
              }
            }
          `}
        </style>
        <div className="hidden md:block pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white via-white to-transparent z-10" />
        <div className="hidden md:block pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white via-white to-transparent z-10" />

          <div className='flex flex-row gap-20 md:w-max scroll-anim'>
            {logos.map((logo) => (
              <img
                key={logo.id}
                src={logo.img}
                alt={logo.alt}
                className='w-24 h-auto font-bold object-contain opacity-60'
              />
            ))}
            {logos.map((logo) => (
              <img
                key={logo.id}
                src={logo.img}
                alt={logo.alt}
                className='w-24 h-auto font-bold object-contain opacity-60'
              />
            ))}
          </div>
        </section>

        {/* customer say */}
        <section className='p-5 mt-20'>
            <div className='grid grid-cols-1 md:grid-cols-2 mt-2'>
              <div className='p-6'>
                <h1 className='rum-title text-xl md:text-3xl font-bold py-5'>
                  What Our Customers Say
                </h1>
                <p className='font-semibold py-4'>
                  Car subscription is an alternative to leasing and ownership.
                  With car subscriptions you can subriscriptions you can subscribe to a car for a monthly fee,
                  which includes insurance, maintenance, and roadside assistance.
                </p>
                <button
                className="bg-[#896400] hover:bg-[#ad7f00] cursor-pointer text-white py-2 px-5 rounded-md">
                  BROWSE CARS
               </button>
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
          <h1 className='text-2xl font-bold mb-8 ml-5 md:ml-10 bg-white bg-opacity-80 p-4 rounded-lg '>
            CHARGE INTO THE FUTURE: <span className='text-[#896400]'>EXPLORE </span> THE EV CHARGING CAR AND VANS PLANS
          </h1>
        </div>
        <div className='bg-[#896400] flex flex-col items-center justify-center text-center text-white p-5'>
          <h1 className='text-white text-xl md:text-3xl font-bold p-5'>
            EV Charging Plans
          </h1>
          <p className='text-white font-semibold p-5'>
            Our EV charging plans are designed to provide you with the best charging experience for your electric vehicles.
            Enjoy fast, reliable, and convenient charging solutions tailored to your needs.
          </p>
          <button
            className="bg-white hover:bg-gray-200 cursor-pointer text-[#896400] py-2 px-5 rounded-md m-5">
            LEARN MORE
          </button>
        </div>
      </div>
     </section>

     {/* testimonial */}
     <section className='p-5 mt-20'>
      <h1 className='rum-title text-center text-xl md:text-3xl font-bold py-5'>
        What Our Customers Say
      </h1>
      <div className=''>
            <CardTestmonial />
      </div>
     </section>

     {/* footer */}
      {/* <section className='p-5 mt-20 bg-black'>
          <h1 className='rum-title text-center text-xl md:text-3xl font-bold py-5 text-white'>
            More Cars
          </h1>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            {cars.map((car) => (
              <CarCard
                key={car.id}
                img={car.img}
                name={car.name}
                description={car.description}
              />
            ))}
          </div>
        </section> */}
        <section className='p-5 mt-20 '>
          
        </section>
    </>
  );
};

export default Home;
