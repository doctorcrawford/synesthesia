import { useState, useEffect } from "react";

// icons
import {
  IoPlayBackSharp,
  IoPlayForwardSharp,
  IoPlaySkipBackSharp,
  IoPlaySkipForwardSharp,
  IoPlaySharp,
  IoPauseSharp,
} from 'react-icons/io5';

const Controls = ({ audioRef }: { audioRef: React.MutableRefObject<HTMLAudioElement | null> }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const audioContext = new window.AudioContext();

  const togglePlayPause = () => {
    // Check if context is in suspended state (autoplay policy)
    if (audioContext.state === "suspended") {
      audioContext.resume();
    }
    setIsPlaying((prev) => !prev);
    console.log
  };

  useEffect(() => {

    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, audioRef]);

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