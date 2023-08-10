import { BsMusicNoteBeamed } from 'react-icons/bs';

type Track = {
  title: string;
  src: string;
  author: string;
  thumbnail: string;
};

interface DisplayTrackProps {
  currentTrack: Track;
  audioRef: React.MutableRefObject<HTMLAudioElement | null>;
}

const DisplayTrack = ({ currentTrack, audioRef }: DisplayTrackProps) => {
  return (
    <div>
      <audio src={currentTrack.src} ref={audioRef} />
      <div className='audio-info'>
        <div className='audio-image'>
          {currentTrack.thumbnail ? (
            <img src={currentTrack.thumbnail} alt='audio avatar' />
          ) : (
            <div className='icon-wrapper'>
              <span className='audio-icon'>
                <BsMusicNoteBeamed />
              </span>
            </div>
          )}
        </div>
        <div className='text'>
          <p className='title'>{currentTrack.title}</p>
          <p>{currentTrack.author}</p>
        </div>
      </div>
    </div>
  );
}

export default DisplayTrack;