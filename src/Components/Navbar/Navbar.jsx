import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLink, setSelectedLink] = useState('/home');
  const navigate = useNavigate();
  const location = useLocation();
  const [isHovered, setIsHovered] = useState(false);

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

  return (
    <nav className="text-white pt-6 flex items-center justify-between text-xl fixed top-0 w-full bg-black z-20">
    <div
        className="text-xl font-bold ml-32 pb-4 cursor-pointer"
        onClick={() => handleLinkClick('/home')}
        style={{color: isHovered?"#F39C12":"#F0E5CF"}}
        onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      >
        <div className="absolute left-24 right-40 border-b-2 border-red-600 bottom-0" ></div>
        Morpheus Ads
      </div>
      <div className="md:hidden mr-8">
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
      <div className="hidden md:flex flex-1 justify-center space-x-16 pb-4">
        {['/home', '/about', '/adfilms', '/behindthescenes', '/contact'].map((path) => (
          <div
            key={path}
            className={`relative inline-block py-2 px-4 hover:text-red-600 cursor-pointer ${
              selectedLink === path ? 'text-red-600' : 'text-white'
            }`}
            onClick={() => handleLinkClick(path)}
          >
            {path.substring(1).charAt(0).toUpperCase() + path.substring(2)}
          </div>
        ))}
      </div>
      <motion.div
        className={`md:hidden absolute top-16 right-0 text-white overflow-hidden z-20 ${
          isOpen ? 'block' : 'hidden'
        }`}
        initial={{ height: 0 }}
        animate={{ height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
      >
        <ul className="flex flex-col items-center w-48 pb-10 bg-transparent">
          {['/home', '/about', '/adfilms', '/behindthescenes', '/contact'].map((path) => (
            <li key={path} className="py-3">
              <div
                className={`hover:text-red-600 cursor-pointer ${
                  selectedLink === path ? 'text-red-600' : 'text-white'
                }`}
                onClick={() => handleLinkClick(path)}
              >
                {path.substring(1).charAt(0).toUpperCase() + path.substring(2)}
              </div>
            </li>
          ))}
        </ul>
      </motion.div>
    </nav>
  );
};

export default Navbar;
