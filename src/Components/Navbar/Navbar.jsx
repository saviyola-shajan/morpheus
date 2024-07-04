import { useState } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white p-4 flex items-center justify-between">
      <div className="text-xl font-bold ml-12">Morpheus Ads</div>
      <div className="md:hidden">
        <button className="text-white" onClick={toggleMenu}>
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          )}
        </button>
      </div>
      <div  className="hidden md:flex flex-1 justify-center space-x-32">
        <a href="#home" className="hover:text-gray-400">Home</a>
        <a href="#about" className="hover:text-gray-400">About</a>
        <a href="#services" className="hover:text-gray-400">Ad Films</a>
        <a href="#portfolio" className="hover:text-gray-400">Behind The Scenes</a>
        <a href="#contact" className="hover:text-gray-400">Contact</a>
      </div>
      {/* Dropdown menu for mobile */}
      <motion.div
        className={`md:hidden absolute top-16 right-0 bg-gray-800 text-white overflow-hidden ${isOpen ? 'block' : 'hidden'}`}
        initial={{ height: 0 }}
        animate={{ height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
      >
        <ul className="flex flex-col items-center bg-slate-600 w-48 pb-10">
          <li className="py-3 pt-10 pb-10"><a href="#home" className="hover:text-gray-400">Home</a></li>
          <li className="py-3 pt-10 pb-10"><a href="#about" className="hover:text-gray-400">About</a></li>
          <li className="py-3 pt-10 pb-10"><a href="#services" className="hover:text-gray-400">Ad films</a></li>
          <li className="py-3 pt-10 pb-10"><a href="#portfolio" className="hover:text-gray-400">Behind The Scenes</a></li>
          <li className="py-3 pt-10 pb-10"><a href="#contact" className="hover:text-gray-400">Contact</a></li>
        </ul>
      </motion.div>
    </nav>
  );
};

export default Navbar;
