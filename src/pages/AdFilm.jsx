import VideoPlayer from "../Components/VideoPlayer/videoPlayer";
import { useState } from 'react';

function AdFilm() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="px-4 lg:px-16">
      {/* Heading */}
      <div
        className="mt-28 text-center lg:text-centre text-xl sm:text-2xl md:text-3xl font-semibold"
        style={{ color: isHovered ? '#F0E5CF' : '#F39C12' }}
      >
        Ad Films
      </div>

      {/* Subheading */}
      <div
        className="mt-2 mb-4 text-center lg:text-centre text-sm sm:text-base md:text-xl font-medium"
        style={{
          color: isHovered ? '#F0E5CF' : '#fff',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        Every Scene Starts with a Story - Yours is Next!
      </div>

      {/* Video Player */}
      <div className="flex justify-center">
        <VideoPlayer className="w-full lg:w-3/4" />
      </div>
    </div>
  );
}

export default AdFilm;
