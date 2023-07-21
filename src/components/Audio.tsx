import Track from './../resources/radio-man.mp3';

export default function Audio() {
  return (
    <>
      <audio src={Track}></audio>
      <label>Volume</label>
      <input type='range' id='volume' min='0' max='2' defaultValue='1' step='0.01' />
      <label>Panner</label>
      <input type='range' id='panner' min='-1' max='1' defaultValue='0' step='0.01' />
      <button id='play-button' data-playing='false' role='switch' aria-checked='false'>
        Play/Pause
      </button>
    </>
  )
}