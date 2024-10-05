import ReactPlayer from 'react-player';

const videoPlayer = () => {
    const videos = [
        { id: 1, title: 'Video 1', url: 'https://youtu.be/2RyVzGqApd8?si=O5bvfAd4KrDgq9ek' },
        { id: 2, title: 'Video 2', url: 'https://youtu.be/ArOImkUvguI?si=1vJPyI_FccRXOjJY' },
        { id: 3, title: 'Video 3', url: 'https://youtu.be/LCCTxYudmL4?si=DcXV1kzdjAbr9xrT' },
        { id: 4, title: 'Video 4', url: 'https://youtu.be/K7gCTuxgQ7Q?si=AeuEEPzUcTMsSFaI' },
        { id: 5, title: 'Video 5', url: 'https://youtu.be/rrtE3QMGbRM?si=V0TkloKNQHqMN7eR' },
        { id: 6, title: 'Video 6', url: 'https://youtu.be/L8pF1cxjhjI?si=PmnZglrPUlLdLSTt' },
        { id: 7, title: 'Video 7', url: 'https://youtu.be/4d62eXS0lxk?si=-eWZM2pEf5L73lAk' },
        { id: 8, title: 'Video 8', url: 'https://youtu.be/cDYF5xRMHPY?si=wEXMk2XsPa--flwt' },
        { id: 9, title: 'Video 9', url: 'https://youtu.be/O7g7AaylM24?si=AqQQxQZ4zHGEfJ7M' },
        { id: 10, title: 'Video 10', url: 'https://youtu.be/R6hyfs3E13c?si=Cnp3s_Myor2qO7sB' }



    ]
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-20 py-16 mt-14">
      {videos.map(video => (
        <div key={video.id} className="p-4 rounded-lg bg-white bg-opacity-15 backdrop-blur-md "
        >
          <div className='player-wrapper'
           style={{ height: '220px' }}>
            <ReactPlayer
              url={video.url}
              className='react-player'
              width='100%'
              height='100%'
              controls={true}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default videoPlayer;
