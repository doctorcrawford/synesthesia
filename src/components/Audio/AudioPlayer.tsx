import { useState, useRef } from 'react';
import { tracks } from '../../data/tracks';

import Track from './../../resources/radio-man.mp3';
import DisplayTrack from './DisplayTrack';
import Controls from './Controls';
import ProgressBar from './ProgressBar';

export default function Audio() {
  const [currentTrack, setCurrentTrack] = useState(tracks[0]);

  const audioRef = useRef(null);
  console.log(audioRef);

  return (
    <div className='audio-player'>
      <div className='inner'>
        <DisplayTrack
          currentTrack={currentTrack}
          audioRef={audioRef}
        />
        <Controls audioRef={audioRef} />
        <ProgressBar />

      </div>
      <audio src={Track}></audio>
      <label>Volume</label>
      <input type='range' id='volume' min='0' max='2' defaultValue='1' step='0.01' />
      <label>Panner</label>
      <input type='range' id='panner' min='-1' max='1' defaultValue='0' step='0.01' />
      <br />
      <button id='play-button' data-playing='false' role='switch' aria-checked='false'>
        Play/Pause
      </button>
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