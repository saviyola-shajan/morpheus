import ReactPlayer from 'react-player';

const videoPlayer = () => {
    const videos = [
        { id: 1, title: 'Video 1', url: 'https://youtu.be/DjjJ-xhPZF4?si=_uOv3QKS-4emcukF' },
        { id: 2, title: 'Video 2', url: 'https://youtu.be/9HzQgsfHl4c?si=cyM55mnFaWzIVeDj' },
        { id: 3, title: 'Video 1', url: 'https://youtu.be/DjjJ-xhPZF4?si=_uOv3QKS-4emcukF' },
        { id: 4, title: 'Video 2', url: 'https://youtu.be/9HzQgsfHl4c?si=cyM55mnFaWzIVeDj' },
        { id: 5, title: 'Video 1', url: 'https://youtu.be/DjjJ-xhPZF4?si=_uOv3QKS-4emcukF' },
        { id: 6, title: 'Video 2', url: 'https://youtu.be/9HzQgsfHl4c?si=cyM55mnFaWzIVeDj' },
        { id: 7, title: 'Video 1', url: 'https://youtu.be/DjjJ-xhPZF4?si=_uOv3QKS-4emcukF' },
        { id: 8, title: 'Video 2', url: 'https://youtu.be/9HzQgsfHl4c?si=cyM55mnFaWzIVeDj' },
        { id: 9, title: 'Video 1', url: 'https://youtu.be/DjjJ-xhPZF4?si=_uOv3QKS-4emcukF' },
        { id: 10, title: 'Video 2', url: 'https://youtu.be/9HzQgsfHl4c?si=cyM55mnFaWzIVeDj' }



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
