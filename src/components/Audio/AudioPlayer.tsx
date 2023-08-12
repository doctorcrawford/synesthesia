import { useState, useRef } from 'react';
import { tracks } from '../../data/tracks';

import Track from './../../resources/radio-man.mp3';
import DisplayTrack from './DisplayTrack';
import Controls from './Controls';
import ProgressBar from './ProgressBar';

interface AudioPlayerProps {
  audioContext: AudioContext;
}

export default function AudioPlayer({ audioContext }: AudioPlayerProps) {
  const [trackIndex, setTrackIndex] = useState(0);
  const [currentTrack, setCurrentTrack] = useState(tracks[trackIndex]);
  const [timeProgress, setTimeProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const progressBarRef = useRef<HTMLInputElement | null>(null);

  const handleNext = () => {
    if (trackIndex >= tracks.length - 1) {
      setTrackIndex(0);
      setCurrentTrack(tracks[0]);
    } else {
      setTrackIndex(trackIndex + 1);
      setCurrentTrack(tracks[trackIndex + 1]);
    }
  };

  return (
    <div className='audio-player'>
      <div className='inner'>
        <DisplayTrack {...{ currentTrack, audioRef, setDuration, progressBarRef, handleNext }} />
        <Controls {...{ audioRef, audioContext, progressBarRef, duration, setTimeProgress, tracks, trackIndex, setTrackIndex, setCurrentTrack, handleNext }} />
        <ProgressBar {...{ progressBarRef, audioRef, timeProgress, duration }} />

      </div>
      <audio src={Track}></audio>
      <div id='volume-panner'>
        <label>Volume</label>
        <input type='range' id='volume' min='0' max='2' defaultValue='1' step='0.01' />
        <label>Panner</label>
        <input type='range' id='panner' min='-1' max='1' defaultValue='0' step='0.01' />
        <br />
      </div>
    </div>
  )
}

// function setVolumeControl() {
//   const volumeControl: HTMLInputElement | null = document.querySelector('#volume');
//   if (volumeControl) {
//     volumeControl.addEventListener(
//       'input',
//       () => {
//         gainNode.gain.value = parseFloat(volumeControl.value);
//       },
//       false,
//     );
//   } else {
//     throw new Error('no volume control');
//   }
// }

// function setPannerControl() {
//   const pannerControl: HTMLInputElement | null = document.querySelector('#panner');

//   if (pannerControl) {
//     pannerControl.addEventListener(
//       'input',
//       () => {
//         panner.pan.value = parseFloat(pannerControl.value);
//       },
//       false,
//     );
//   } else {
//     throw new Error('no panner control');
//   }
// }