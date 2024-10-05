import  { useState } from 'react';

function BehindTheScenes() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
         <div className="mt-28 pr-16 ml-[650px] text-3xl font-semibold" style={{ color: isHovered ? '#F0E5CF':'#F39C12' }}  >
  Behind The Scenes
</div>
<div className="mt-2 pr ml-[560px] text-2xl font-medium "   style={{
        color: isHovered ? '#F0E5CF' : '#fff',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)} >
        
        Crafting Visions from Concept to Screen.
</div>
    </div>
  )
}

export default BehindTheScenes