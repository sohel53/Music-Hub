import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa'

const PlayPause = ({ isPlaying, activeSong, song, handlePause, handlePlay }) => 
(
  isPlaying && activeSong && activeSong?.title === song.title ? (
    <FaPauseCircle 
      size={35}
      className='text-gray-300 mt-16'
      onClick={handlePause}
    />
  ) : (
    <FaPlayCircle 
      size={35}
      className='text-gray-300  mt-16'
      onClick={handlePlay}  
    />
  ) 
);

export default PlayPause;
