import { useState } from 'react';

function BehindTheScenes() {
  const [isHovered, setIsHovered] = useState(false);

  const images = [
    { src: '/images/2312A982-B4FD-444C-855F-BA1540BB27B5.jpeg', id: 1 },
    { src: '/images/72E063ED-A886-4ED7-ABEA-A39F5D9688D4.jpeg', id: 2 },
    { src: '/images/_ASH4473.JPG', id: 3 },
    { src: '/images/_ASH4477.JPG', id: 4 },
    { src: '/images/_ASH7760.JPG', id: 5 },
    { src: '/images/_ASH6792.JPG', id: 6 },
    { src: '/images/_DSC1164.JPG', id: 7 },
    { src: '/images/DSC03372.JPG', id: 26 },
    { src: '/images/_RL_0121.jpg', id: 9 },
    { src: '/images/_RL_0796.JPG', id: 10 },
    { src: '/images/_RL_9939.JPG', id: 11 },
    { src: '/images/AH2I0228.JPG', id: 12 },
    { src: '/images/_RL_0112.jpg', id: 8 },
    { src: '/images/DSC03365.JPG', id: 25 },
    { src: '/images/AH2I0298.JPG', id: 13 },
    { src: '/images/AH2I0337.JPG', id: 14 },
    { src: '/images/AH2I0486.JPG', id: 17 },
    { src: '/images/DSC03287.JPG', id: 23 },
    { src: '/images/AH2I0504.JPG', id: 18 },
    { src: '/images/AH2I1154.JPG', id: 20 },
    { src: '/images/DSC03260.JPG', id: 21 },
    { src: '/images/DSC03282.JPG', id: 22 },
    { src: '/images/DSC03361.JPG', id: 24 },
    { src: '/images/AH2I0298.JPG', id: 13 },
    { src: '/images/AH2I1143.JPG', id: 19 },
    { src: '/images/AH2I0349.JPG', id: 15 },
  ];

  
  return (
    <div className="px-4">
    {/* Heading */}
    <div
className="mt-26 sm:mt-56 md:mt-48 lg:mt-40 text-center text-2xl md:text-3xl font-semibold"
style={{ color: isHovered ? '#F0E5CF' : '#F39C12' }}
    >
      Behind The Scenes
    </div>
  
    {/* Subheading */}
    <div
      className="mt-2 text-center text-lg md:text-2xl font-medium"
      style={{ color: isHovered ? '#F0E5CF' : '#fff' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      Crafting Visions from Concept to Screen.
    </div>
  
    {/* Images Section */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10 mb-10 px-4 sm:px-8 md:px-16">
      {images.map((image) => (
        <div
          key={image.id}
          className="p-2 bg-white bg-opacity-15 backdrop-blur-md transition-transform duration-300 ease-in-out transform hover:scale-105"
        >
          <img
            src={image.src}
            alt={`Behind the scenes ${image.id}`}
            className="w-full h-48 md:h-64 lg:h-80 object-cover"
          />
        </div>
      ))}
    </div>
  </div>  
  );
}  

export default BehindTheScenes;
