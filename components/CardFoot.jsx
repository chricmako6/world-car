import React from "react";
import { Instagram } from "lucide-react";

const currentYear = new Date().getFullYear();

const CardFoot = () => {
  return (
    <footer className="w-full bg-gray-100 px-4 py-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        {/* Logo on the left */}
        <div className="flex flex-col items-start bg-amber-300">
          <h1 className="text-xl md:text-3xl font-bold rum-title py-5">
            My<span className="text-[#896400]">Car</span>direct
          </h1>
          <p className="text-gray-600 text-sm max-w-xs">
            World Car - Your trusted partner for car subscriptions and rentals. Drive your dream today!
          </p>
          <div className="flex items-center gap-3 mt-3">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-pink-500">
              <Instagram size={22} />
            </a>
            {/* Add more social icons here if needed */}
          </div>
        </div>
        {/* Links */}
        <div className="flex flex-1 justify-between w-full md:w-auto gap-8">
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Quick Links</h3>
            <ul className="space-y-1 text-sm">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">Search Cars</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Company</h3>
            <ul className="space-y-1 text-sm">
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Blog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Other Links</h3>
            <ul className="space-y-1 text-sm">
              <li><a href="#" className="hover:underline">Terms</a></li>
              <li><a href="#" className="hover:underline">Privacy</a></li>
              <li><a href="#" className="hover:underline">Support</a></li>
            </ul>
          </div>
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