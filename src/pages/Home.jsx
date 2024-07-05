import Navbar from '../Components/Navbar/Navbar'
import VideoPlayer from '../Components/VideoPlayer/videoPlayer'
function Home() {
  return (
    <>
    <Navbar/>
    <div className='min-h-screen' >
        <VideoPlayer/>
    </div>
    </>
  )
}

export default Home