import { ThreeCanvas } from "./Three/ThreeCanvas";
import AudioPlayer from "./Audio/AudioPlayer";

function Main() {
  const audioContext = new window.AudioContext();
  
  return (
    <>
      <AudioPlayer audioContext={audioContext} />
      <ThreeCanvas audioContext={audioContext} />
    </>
  )
}

export default Main;