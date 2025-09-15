import React from 'react';
import { PlayIcon } from './icons';

const Home = () => {
  return (
    <section className="relative bg-light-blue pt-32 pb-20 lg:pt-48 lg:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <span className="inline-block bg-white text-primary font-semibold py-1 px-4 rounded-full text-sm mb-4 shadow-sm">
              START TO SUCCESS
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-jost text-heading leading-tight mb-6">
              Access Your Class From Anywhere & Anytime
            </h1>
            <p className="text-lg text-body mb-8 max-w-lg mx-auto lg:mx-0">
              A modern and unique online course learning platform. Grow your skills and connect with mentors from anywhere.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a href="#courses" className="w-full sm:w-auto inline-block bg-primary text-white font-medium py-4 px-8 rounded-md hover:bg-blue-700 transition-all duration-300 shadow-lg">
                Get Started
              </a>
              <a href="#" className="w-full sm:w-auto flex items-center justify-center gap-2 text-heading font-semibold group">
                <span className="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-md group-hover:bg-primary transition-all duration-300">
                  <PlayIcon className="w-6 h-6 text-primary group-hover:text-white transition-all duration-300" />
                </span>
                Watch Video
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="relative z-10">
              <img 
                src="https://picsum.photos/id/1062/600/600" 
                alt="Student learning online" 
                className="rounded-full shadow-2xl mx-auto"
              />
            </div>
             <div className="absolute -top-10 -left-10 w-32 h-32 bg-yellow-300 rounded-full opacity-50 z-0"></div>
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-blue-300 rounded-full opacity-50 z-0"></div>
            <div className="absolute top-1/2 -right-16 w-24 h-24 bg-pink-300 rounded-full opacity-50 z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;