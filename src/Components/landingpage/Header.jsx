import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";


const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(false); // For "Courses"
  const [openLang, setOpenLang] = useState(false); // For "Language"

  return (
    <>
      {/* 🔹 Top Contact Bar */}
      <div className="bg-sky-950 text-white text-sm py-2 px-6 flex justify-between items-center">
         {/* 📞 Phone */}
  <a href="tel:+919876543210" className="flex items-center gap-1 hover:text-blue-300">
    <FaPhoneAlt />
    <span>+91 98765 43210</span>
  </a>

  {/* ✉️ Email */}
  <a href="mailto:info@example.com" className="flex items-center gap-1 hover:text-blue-300">
    <FaEnvelope />
    <span>info@example.com</span>
  </a>
        <div className="flex items-center space-x-6">
          {/* 🌐 Language Dropdown */}
          <div className="relative">
            <button
              onClick={() => setOpenLang(!openLang)}
              className="hidden md:inline-flex items-center gap-2 text-white px-5 py-2 rounded-md transition"
            >
              {/* Circle Flag */}
              <img
                src="https://flagcdn.com/w20/gb.png"
                alt="English Flag"
                className="w-5 h-5 rounded-full border"
              />
              English
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {openLang && (
              <div className="absolute right-0 mt-2 w-40 bg-white text-gray-800 rounded-md shadow-lg py-2 z-50">
                <a href="#" className="flex items-center gap-2 px-4 py-2 hover:bg-blue-50 transition">
                  <img src="https://flagcdn.com/w20/gb.png" alt="English" className="w-5 h-5 rounded-full border" />
                  English
                </a>
                <a href="#" className="flex items-center gap-2 px-4 py-2 hover:bg-blue-50 transition">
                  <img src="https://flagcdn.com/w20/es.png" alt="Spanish" className="w-5 h-5 rounded-full border" />
                  Spanish
                </a>
                <a href="#" className="flex items-center gap-2 px-4 py-2 hover:bg-blue-50 transition">
                  <img src="https://flagcdn.com/w20/sa.png" alt="Arabic" className="w-5 h-5 rounded-full border" />
                  Arabic
                </a>
              </div>
            )}
          </div>

          {/* Divider line */}
          <span className="text-gray-400">|</span>

          {/* 👤 Admin Button */}
          <a
            href="#"
            className="hidden md:inline-flex items-center gap-2 text-white px-5 py-2 rounded-md transition"
          >
            <FaUser className="text-lg" />
            Admin
          </a>
        </div>
      </div>

      {/* 🔹 Main Navbar */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
          {/* Left: Logo + Search */}
          <div className="flex items-center space-x-4 w-1/3">
            <a href="#" className="flex items-center text-2xl font-bold text-blue-600">
              <img
                src="https://validthemes.net/site-template/lerna/assets/img/logo.png"
                alt="Logo"
                className="h-12 w-13 mr-3"
              />
            </a>
            <div className="relative w-70 hidden md:block">
              <input
                type="text"
                placeholder="Search..."
                className="border border-black rounded-xl pl-3 pr-8 py-1 text-sm w-full focus:outline-none"
              />
              <svg
                className="w-4 h-4 absolute right-2 top-2 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M16 10.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0z" />
              </svg>
            </div>
          </div>

          {/* Middle: Menu */}
          <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
            <a href="#" className="hover:text-blue-600">Demos</a>

            {/* Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown(true)}
              onMouseLeave={() => setOpenDropdown(false)}
            >
              <button className="hover:text-blue-600 flex items-center">
                Courses
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {openDropdown && (
                <div className="absolute top-10 left-0 bg-white shadow-lg rounded-md py-2 w-44">
                  <a href="#" className="block px-4 py-2 hover:bg-blue-50 text-gray-700">Web Development</a>
                  <a href="#" className="block px-4 py-2 hover:bg-blue-50 text-gray-700">Data Science</a>
                  <a href="#" className="block px-4 py-2 hover:bg-blue-50 text-gray-700">Design</a>
                </div>
              )}
            </div>

            <a href="#" className="hover:text-blue-600">Pages</a>
            <a href="#" className="hover:text-blue-600">Blog</a>
            <a href="#" className="hover:text-blue-600">Contact</a>
          </nav>

          {/* Right: CTA */}
          <a
            href="#"
            className="hidden md:inline-block bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Get Started
          </a>

          {/* Mobile Menu */}
          <button className="md:hidden text-gray-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
