import { useState, useEffect, useRef, useCallback } from "react";

// icons
import {
  IoPlayBackSharp,
  IoPlayForwardSharp,
  IoPlaySkipBackSharp,
  IoPlaySkipForwardSharp,
  IoPlaySharp,
  IoPauseSharp,
} from 'react-icons/io5';

type Track = {
  title: string;
  src: string;
  author: string;
  thumbnail?: string;
};

interface ControlsProps {
  audioRef: React.MutableRefObject<HTMLAudioElement | null>;
  audioContext: AudioContext;
  progressBarRef: React.MutableRefObject<HTMLInputElement | null>;
  duration: number;
  setTimeProgress: React.Dispatch<React.SetStateAction<number>>;
  tracks: Track[];
  trackIndex: number;
  setTrackIndex: React.Dispatch<React.SetStateAction<number>>;
  setCurrentTrack: React.Dispatch<React.SetStateAction<Track>>;
}

const Controls = ({ audioRef, audioContext, progressBarRef, duration, setTimeProgress, tracks, trackIndex, setTrackIndex, setCurrentTrack }: ControlsProps) => {
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

  const skipForward = () => {
    console.log('hummus');
  };
  const skipBackward = () => {
    console.log('hummus');
  };
  const handlePrevious = () => {
    if (trackIndex === 0) {
      const lastTrackIndex = tracks.length - 1;
      setTrackIndex(lastTrackIndex);
      setCurrentTrack(tracks[lastTrackIndex]);
    } else {
      setTrackIndex(trackIndex - 1);
      setCurrentTrack(tracks[trackIndex - 1]);
    }
  };
  const handleNext = () => {
    if (trackIndex >= tracks.length - 1) {
      setTrackIndex(0);
      setCurrentTrack(tracks[0]);
    } else {
      setTrackIndex(trackIndex + 1);
      setCurrentTrack(tracks[trackIndex + 1]);
    }
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
        <button onClick={handlePrevious}>
          <IoPlaySkipBackSharp />
        </button>
        <button onClick={skipBackward}>
          <IoPlayBackSharp />
        </button>

        <button onClick={togglePlayPause}>
          {isPlaying ? <IoPauseSharp /> : <IoPlaySharp />}
        </button>
        <button onClick={skipForward}>
          <IoPlayForwardSharp />
        </button>
        <button onClick={handleNext}>
          <IoPlaySkipForwardSharp />
        </button>
      </div>
    </div>
  );
}

export default Controls;