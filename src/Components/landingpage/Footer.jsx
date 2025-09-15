
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-heading text-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Lerna */}
          <div className="md:col-span-2 lg:col-span-1">
            <h3 className="text-2xl font-bold font-jost mb-4">Lerna</h3>
            <p className="text-gray-400 mb-4">
              A leading online learning platform dedicated to helping you grow your skills and achieve your goals.
            </p>
            {/* Social Icons would go here */}
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-jost font-semibold mb-4">Our Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Courses</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Instructors</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-jost font-semibold mb-4">Course Categories</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Design</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Business</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">IT & Software</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Marketing</a></li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h4 className="text-lg font-jost font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Lerna. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
