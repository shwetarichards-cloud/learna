import React from "react";
import { FaStar } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
        
        {/* Left Content */}
        <div>
          <p className="text-black font-semibold mb-3">
            ✨ Discover 20,000+ World-Class Courses
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Learn <span className="text-sky-600 underline">Smarter</span><br />
            Achieve knowledge
          </h1>
          <p className="mt-6 text-gray-600 text-lg">
            Expand your knowledge and open doors to exciting careers with our
            online education platform.
          </p>
          <button className="mt-8 bg-sky-600 text-white px-6 py-3 rounded-md shadow hover:bg-sky-700 transition">
            Explore Course
          </button>
        </div>

        {/* Right Image + Badge */}
        <div className="relative flex justify-center">
          <img
            src="https://validthemes.net/site-template/lerna/assets/img/illustration/1.png"
            alt="Student"
            className="rounded-lg max-h-[480px] object-contain"
          />

          {/* Rating Badge */}
          <div className="absolute bottom-6 left-6 bg-white shadow-lg px-5 py-3 rounded-lg flex items-center gap-3">
            <span className="text-sky-600 text-3xl font-bold">4.9</span>
            <div>
              <div className="flex text-yellow-500">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar className="text-yellow-400 opacity-80" />
              </div>
              <p className="text-gray-700 text-sm font-medium">Instructor Rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
