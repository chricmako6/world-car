'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AlignLeft, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleLogin = () => setShowLogin(!showLogin);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-30 flex items-center justify-between px-10 py-5 transition-all duration-500 ${
          scrolled
            ? "backdrop-blur-md bg-white/30 shadow-md"
            : "bg-gray-300"
        }`}
      >
        <div className="rum-title">
          <h1 className="text-xl md:text-3xl font-bold">
            My<span className="text-[#896400]">Car</span>direct
          </h1>
        </div>

        {/* Desktop Nav */}
        <div className="lg:flex gap-12 items-center justify-between hidden md:flex">
          <Link href=''>About</Link>
          <Link href=''>Cars</Link>
          <Link href=''>Vans</Link>
          <Link href=''>How it works</Link>
          <Link href=''>Subscription Comparison</Link>
          <Link href=''>Blog</Link>
          <Link href=''>Contacts</Link>
          <button
            onClick={toggleLogin}
            className="bg-[#896400] hover:bg-[#ad7f00] cursor-pointer text-white py-1 px-5 rounded-md"
          >
            LOGIN
          </button>
        </div>

        {/* Hamburger Icon */}
        <button onClick={toggleMenu} className="block md:hidden">
          <AlignLeft size={28} />
        </button>
      </nav>

      {/* Mobile Slide-in Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-[260px] bg-gray-100 shadow-lg transform transition-transform duration-1000 z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-5 border-b">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button onClick={toggleMenu}>
            <X size={24} />
          </button>
        </div>
        <div className="flex flex-col gap-4 p-5">
           <Link href="">About</Link>
          <Link href=''>Cars</Link>
          <Link href=''>Vans</Link>
          <Link href=''>How it works</Link>
          <Link href=''>Subscription Comparison</Link>
          <Link href=''>Blog</Link>
          <Link href=''>Contacts</Link>
          <button
            onClick={toggleLogin}
            className="bg-[#896400] text-white py-1 px-5 rounded-md w-fit"
          >
            LOGIN
          </button>
        </div>
      </div>

      {/* Overlay when menu is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={toggleMenu}
        />
      )}

      {/* Login Popup Modal */}
      {showLogin && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-50"
            onClick={toggleLogin}
          />
          <div className="fixed top-1/2 left-1/2 z-50 transform -translate-x-1/2 -translate-y-1/2 duration-1000 bg-white p-8 rounded-md shadow-lg shadow-gray-100 w-[90%] max-w-sm">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Sign In</h2>
              <button onClick={toggleLogin}>
                <X size={20} />
              </button>
            </div>
            <form className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="Email"
                className="border px-4 py-2 rounded-md"
              />
              <input
                type="password"
                placeholder="Password"
                className="border px-4 py-2 rounded-md"
              />
              <button
                type="submit"
                className="bg-[#896400] text-white py-2 rounded-md hover:bg-[#ad7f00]"
              >
                Login
              </button>
            </form>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
