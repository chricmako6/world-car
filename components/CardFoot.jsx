import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const currentYear = new Date().getFullYear();

const CardFoot = () => {
  return (
    <footer className="w-full bg-gray-100 px-4 py-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        {/* Logo on the left */}
        <div className="flex flex-col items-start">
          <motion.h1
            className="text-xl md:text-3xl font-bold rum-title py-5"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.8, type: "spring" }}
            viewport={{ once: false, amount: 0.7 }}
          >
            My<span className="text-[#896400]">Car</span>direct
          </motion.h1>
          <motion.p
            className="text-gray-600 text-sm max-w-xs"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 1, type: "spring", delay: 0.3 }}
            viewport={{ once: false, amount: 0.7 }}
          >
            World Car is your trusted partner for car subscriptions and rentals,
            providing flexible, affordable, and reliable solutions that make it
            easier than ever to enjoy the freedom of driving your dream car
            today.
          </motion.p>
        </div>
        {/* Links */}
        <div className="flex flex-1 justify-between w-full md:w-auto gap-8">
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 60 }}
            transition={{ duration: 0.8, type: "spring", delay: 0.4 }}
            viewport={{ once: false, amount: 0.7 }}
          >
            <h3 className="font-semibold text-gray-800 mb-2">Quick Links</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <Link href="#" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Search Cars
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 60 }}
            transition={{ duration: 0.8, type: "spring", delay: 0.4 }}
            viewport={{ once: false, amount: 0.7 }}
          >
            <h3 className="font-semibold text-gray-800 mb-2">Company</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <Link href="#" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Blog
                </Link>
              </li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 60 }}
            transition={{ duration: 0.8, type: "spring", delay: 0.6 }}
            viewport={{ once: false, amount: 0.7 }}
          >
            <h3 className="font-semibold text-gray-800 mb-2">Other Links</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <Link href="#" className="hover:underline">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Support
                </Link>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
      {/* Footer bottom */}
      <div className="mt-8 text-center text-xs text-gray-500">
        &copy; {currentYear} World Car. All rights reserved.
      </div>
    </footer>
  );
};

export default CardFoot;