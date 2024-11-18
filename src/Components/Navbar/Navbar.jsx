import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLink, setSelectedLink] = useState('/home');
  const navigate = useNavigate();
  const location = useLocation();
  // const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setSelectedLink(location.pathname);
  }, [location]);

  const handleLinkClick = (path) => {
    navigate(path);
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const routes = [
    { path: '/home', name: 'Home' },
    { path: '/about', name: 'About' },
    { path: '/adfilms', name: 'Ad Films' },
    { path: '/behindthescenes', name: 'Behind the Scenes' },
    { path: '/contact', name: 'Contact' },
  ];

  return (
    <nav className="text-white font-medium  font-poppins pt-6 flex items-center justify-between text-2xl fixed top-0 w-full bg-black z-20">
    {/* Logo Section */}
    <div
      className="text-xl font-extrabold ml-8 md:ml-32 cursor-pointer flex items-center"
      onClick={() => handleLinkClick('/home')}
    >
<img 
  src="/morpheus-ads-1.png" 
  className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 object-contain" 
  alt="Logo" 
/>

      {/* Red underline visible only on large devices */}
      <div className="absolute left-24 right-40 border-b-2 border-red-600 bottom-0 hidden md:block"></div>
    </div>

    {/* Hamburger Menu for Mobile */}
    <div className="md:hidden mr-4 sm:mr-8">
      <button className="text-red-600 z-30" onClick={toggleMenu}>
        {isOpen ? (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        ) : (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        )}
      </button>
    </div>

    {/* Desktop Links */}
    <div className="hidden md:flex flex-1 justify-center space-x-8 lg:space-x-16 pb-4">
      {routes.map(({ path, name }) => (
        <div
          key={path}
          className={`relative inline-block py-2 px-4 hover:text-red-600 cursor-pointer ${
            selectedLink === path ? 'text-red-600' : 'text-white'
          }`}
          onClick={() => handleLinkClick(path)}
        >
          {name}
          {selectedLink === path && (
            <div className="absolute left-0 right-0 bottom-0 h-0.5"></div>
          )}
        </div>
      ))}
    </div>

    {/* Mobile Menu */}
    <motion.div
      className={`md:hidden absolute top-16 right-0 text-white overflow-hidden z-20 bg-black w-full ${
        isOpen ? 'block' : 'hidden'
      }`}
      initial={{ height: 0 }}
      animate={{ height: isOpen ? 'auto' : 0 }}
      transition={{ duration: 0.3 }}
    >
      <ul className="flex flex-col items-center pb-10">
        {routes.map(({ path, name }) => (
          <li key={path} className="py-3">
            <div
              className={`hover:text-red-600 cursor-pointer ${
                selectedLink === path ? 'text-red-600' : 'text-white'
              }`}
              onClick={() => handleLinkClick(path)}
            >
              {name}
            </div>
          </li>
        ))}
      </ul>
    </motion.div>
  </nav>
  );
};

export default Navbar;
