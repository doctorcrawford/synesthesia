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
  setDuration: React.Dispatch<React.SetStateAction<number>>;
  progressBarRef: React.MutableRefObject<HTMLInputElement | null>;
}

const DisplayTrack = ({ currentTrack, audioRef, setDuration, progressBarRef }: DisplayTrackProps) => {

  const onLoadedMetadata = () => {
    if (audioRef.current && progressBarRef.current) {
      const seconds = audioRef.current.duration;
      setDuration(seconds);
      progressBarRef.current.max = seconds.toString();
    }
  };

  return (
    <div>
      <audio
        src={currentTrack.src}
        ref={audioRef}
        onLoadedMetadata={onLoadedMetadata} />
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