interface ProgressBarProps {
  progressBarRef: React.MutableRefObject<HTMLInputElement | null>;
  audioRef: React.MutableRefObject<HTMLAudioElement | null>;
  timeProgress: number;
  duration: number;
}

const ProgressBar = ({ progressBarRef, audioRef, timeProgress, duration }: ProgressBarProps) => {
  const handleProgressChange = () => {
    if (audioRef.current && progressBarRef.current) {
      audioRef.current.currentTime = Number(progressBarRef.current.value);
    }
  };

  const formatTime = (time: number) => {
    if (time && !isNaN(time)) {
      const minutes = Math.floor(time / 60);
      const formatMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
      const seconds = Math.floor(time % 60);
      const formatSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;

      return `${formatMinutes}:${formatSeconds}`;
    }
  }

  return (
    <div className="progress">
      <span className="time current">{formatTime(timeProgress)}</span>
      <input
        type="range"
        ref={progressBarRef}
        defaultValue="0"
        onChange={handleProgressChange} />
      <span className="time">{formatTime(duration)}</span>
    </div>
  );
}

export default ProgressBar;