import { useState, useEffect, useRef, useCallback, CSSProperties } from "react";

// icons
import {
  IoPlayBackSharp,
  IoPlayForwardSharp,
  IoPlaySkipBackSharp,
  IoPlaySkipForwardSharp,
  IoPlaySharp,
  IoPauseSharp,
} from 'react-icons/io5';

interface ControlsProps {
  audioRef: React.MutableRefObject<HTMLAudioElement | null>;
  audioContext: AudioContext;
  progressBarRef: React.MutableRefObject<HTMLInputElement | null>;
  duration: number;
  setTimeProgress: React.Dispatch<React.SetStateAction<number>>;
}

const Controls = ({ audioRef, audioContext, progressBarRef, duration, setTimeProgress }: ControlsProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const playAnimationRef = useRef<number>(0);

  audioContext.resume();

  const togglePlayPause = () => {
    // Check if context is in suspended state (autoplay policy)
    if (audioContext.state === "suspended") {
      audioContext.resume();
    }
    setIsPlaying((prev) => !prev);
  };

  const repeat = useCallback(() => {
    const currentTime = audioRef.current?.currentTime;
    if (currentTime && progressBarRef.current !== null) {
      setTimeProgress(currentTime);

      // progressBarRef.current.value = currentTime.toString();

      progressBarRef.current.style.setProperty(
        '--range-progress',
        `${(currentTime / duration) * 100}%`
      );
    }

    if (playAnimationRef.current) {
      playAnimationRef.current = requestAnimationFrame(repeat);
    }
  }, [audioRef, duration, progressBarRef, setTimeProgress]);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [isPlaying, audioRef, repeat]);


  return (
    <div className="controls-wrapper">
      <div className="controls">
        <button>
          <IoPlaySkipBackSharp />
        </button>
        <button>
          <IoPlayBackSharp />
        </button>

        <button onClick={togglePlayPause}>
          {isPlaying ? <IoPauseSharp /> : <IoPlaySharp />}
        </button>
        <button>
          <IoPlayForwardSharp />
        </button>
        <button>
          <IoPlaySkipForwardSharp />
        </button>
      </div>
    </div>
  );
}

export default Controls;