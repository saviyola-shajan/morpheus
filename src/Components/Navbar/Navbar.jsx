import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate} from 'react-router-dom'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLink, setSelectedLink] = useState(location.pathname);
  const navigate=useNavigate()

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (link) => {
    setSelectedLink(link);
    navigate(link); 
  };

  return (
    <nav className="text-white pt-6 flex items-center justify-between text-xl fixed top-0 w-full bg-black z-20 ">
      <div className="text-xl font-bold ml-32 pb-4 cursor-pointer ">
      <div className="absolute left-24 right-40 border-b-2 border-red-700 bottom-0"></div>
        Morpheus Ads
      </div>
      <div className="md:hidden">
        <button className="text-white" onClick={toggleMenu}>
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
      <div
        className={`relative inline-block py-2 hover:text-red-700 ml-4 cursor-pointer  ${
          selectedLink === '/home' ? 'text-red-700' : 'text-white'
        }`}
        onClick={() => handleLinkClick('/home')}
      >
        Home
      </div>
      <div
        className={`relative inline-block py-2 px-4 hover:text-red-700 cursor-pointer  ${
          selectedLink === '/about' ? 'text-red-700' : 'text-white'
        }`}
        onClick={() => handleLinkClick('/about')}
      >
        About
      </div>
      <div
        className={`relative inline-block py-2 px-4 hover:text-red-700 cursor-pointer  ${
          selectedLink === '/adfilms' ? 'text-red-700' : 'text-white'
        }`}
        onClick={() => handleLinkClick('/adfilms')}
      >
        Ad Films
      </div>
      <div
        className={`relative inline-block py-2 px-4 hover:text-red-700 cursor-pointer  ${
          selectedLink === '/behindthescenes' ? 'text-red-700' : 'text-white'
        }`}
        onClick={() => handleLinkClick('/behindthescenes')}
      >
        Behind The Scenes
      </div>
      <div
        className={`relative inline-block py-2 px-4 hover:text-red-700 cursor-pointer  ${
          selectedLink === '/contact' ? 'text-red-700' : 'text-white'
        }`}
        onClick={() => handleLinkClick('/contact')}
      >
        Contact
      </div>
    </div>
      {/* Dropdown menu for mobile */}
      <motion.div
        className={`md:hidden absolute top-16 right-0 text-white overflow-hidden z-20 ${
          isOpen ? "block" : "hidden"
        }`}
        initial={{ height: 0 }}
        animate={{ height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
      >
        <ul className="flex flex-col items-center w-48 pb-10 bg-black">
          <li className="py-3 pt-10 pb-10 pr-12">
            <div className={`hover:text-red-700 cursor-pointer  ${
              selectedLink === '/home' ? 'text-red-700':'text-white'}`
            }
            onClick={()=>handleLinkClick('/home')}>
              Home
            </div>
          </li>
          <li className="py-3 pt-10 pb-10 pr-12">
            <div className={ `hover:text-red-700 cursor-pointer  ${
              selectedLink === '/about'? 'text-red-700':'text-white'}`}
              onClick={()=>handleLinkClick('/about')}
          >
              About
            </div>
          </li>
          <li className="py-3 pt-10 pb-10 pr-12">
            <div className={`hover:text-red-700 cursor-pointer ${
              selectedLink === '/adfilm'?'text-red-700':'text-white'}`
            }
            onClick={()=>handleLinkClick('/adfilm')}>
              Ad films
            </div>
          </li>
          <li className="py-3 pt-10 pb-10">
            <div className={`hover:text-red-700 cursor-pointer ${
              selectedLink === '/behindthesenes'?'text-red-700':'text-white'}`
            }
            onClick={()=>handleLinkClick('/behindthescenes')}>
              Behind The Scenes
            </div>
          </li>
          <li className="py-3 pt-10 pb-10 pr-12">
            <div className={`hover:text-red-700 cursor-pointer ${
              selectedLink === '/contact'?'text-red-700':'text-white'}`
            }
            onClick={()=>handleLinkClick('/contact')}>
              Contact
            </div>
          </li>
        </ul>
      </motion.div>
    </nav>
  );
};

export default Navbar;
