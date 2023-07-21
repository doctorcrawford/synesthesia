import Track from './../resources/radio-man.mp3';

export default function Audio() {
  return (
    <>
      <audio src={Track}></audio>
      <button id='play-button' data-playing='false' role='switch' aria-checked='false'>
        Play/Pause
      </button>
    </>
  )
}