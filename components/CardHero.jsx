import React from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

function CardHero() {
  return (
    <div className="relative bg-cover bg-center h-[590px]">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 flex flex-col justify-start h-[590px] px-8 md:px-16 pt-16 md:pt-32">
        {/* Headline */}
        <motion.h1
          className="text-white text-3xl md:text-5xl mb-8 md:mb-12 font-bold rum-title leading-tight"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 60 }}
          transition={{ duration: 0.8, type: "spring" }}
          viewport={{ once: false, amount: 0.7 }}
        >
          Cars and Vans<br /> Subscriptions From 1 to 48<br /> Months
        </motion.h1>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0 mb-10">
          <motion.button
            className="bg-[#896400] hover:bg-[#ad7f00] text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition duration-300"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false, amount: 0.7 }}
          >
            Browse Cars
          </motion.button>
          <motion.button
            className="border-2 border-[#896400] hover:bg-[#ad7f00] hover:text-black text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition duration-300"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false, amount: 0.7 }}
          >
            Browse Electric Vehicles
          </motion.button>
        </div>

        {/* Search Form */}
        <motion.form
          className="glassmorphism p-4 md:p-6 rounded-xl shadow-xl backdrop-blur-md lg:flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 max-w-4xl hidden md:block"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Dropdowns */}
          {["Car Categories", "Brand Model", "Subscription Duration", "Price Range"].map((label) => (
            <div key={label} className="flex flex-col w-full md:w-auto">
              <label className="text-white mb-1">{label}</label>
              <select className="border bg-[#896400] rounded-lg p-2 text-white bg-black/30 backdrop-blur-sm text-sm">
                <option className="">Select {label}</option>
              </select>
            </div>
          ))}

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-[#896400] hover:bg-[#ad7f00] text-black p-4 rounded-full shadow-lg transition duration-300 flex items-center justify-center"
          >
            <Search className="w-5 h-5" />
          </button>
        </motion.form>
      </div>
    </div>
  );
}

export default CardHero;
