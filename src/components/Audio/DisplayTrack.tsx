type Track = {
  title: string;
  src: string;
  author: string;
  thumbnail: string;
};

const DisplayTrack = ({ currentTrack, audioRef }: { currentTrack: Track, audioRef: React.MutableRefObject<HTMLAudioElement | null> }) => {
  return (
    <div>
      <audio src={currentTrack.src} ref={audioRef} />
    </div>
  );
}

export default DisplayTrack;