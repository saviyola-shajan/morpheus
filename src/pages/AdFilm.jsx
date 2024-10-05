import VideoPlayer from "../Components/VideoPlayer/videoPlayer"
import  { useState } from 'react';
function AdFilm() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
    <div className="mt-28 pr-16 ml-[700px] text-3xl font-semibold" style={{ color: isHovered ? '#F0E5CF':'#F39C12' }}  >
  Adfilms
</div>
<div className="mt-2 pr ml-[500px] text-2xl font-medium "   style={{
        color: isHovered ? '#F0E5CF' : '#fff',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)} >
        
  Every Scene Starts with a Story—Yours is Next!
</div>
<div>
<VideoPlayer className="mt-0px"/></div>
    </div>
  )
}

export default AdFilm