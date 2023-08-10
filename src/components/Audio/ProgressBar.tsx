interface ProgressBarProps {
  progressBarRef: React.MutableRefObject<HTMLInputElement | null>;
  audioRef: React.MutableRefObject<HTMLAudioElement | null>;
}

const ProgressBar = ({ progressBarRef, audioRef }: ProgressBarProps) => {
  const handleProgressChange = () => {
    if (audioRef.current && progressBarRef.current) {
      audioRef.current.currentTime = Number(progressBarRef.current.value);
    }
  };

  if (progressBarRef) {
    // const progressRef = (progressBarRef);
  }

  return (
    <div className="progress">
      <span className="time current">00:00</span>
      <input
        type="range"
        ref={progressBarRef}
        defaultValue="0"
        onChange={handleProgressChange} />
      <span className="time">4:14</span>
    </div>
  );
}

export default ProgressBar;