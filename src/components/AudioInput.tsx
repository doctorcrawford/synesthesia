export default function AudioInput() {
  handleStream();
  return (
    <>
      <input type="file" accept="audio/*" capture />
      <audio id="player" controls></audio>
    </>
  )
}

function handleStream() {
  const player = document.getElementById('player') as HTMLAudioElement;

  const handleSuccess = async (stream: MediaStream) => {
    const context = new AudioContext();
    const source = context.createMediaStreamSource(stream);

    await context.audioWorklet.addModule('processor.ts');
    const worklet = new AudioWorkletNode(context, "worklet-processor");

    source.connect(worklet);
    worklet.connect(context.destination);
  }

  navigator.mediaDevices
    .getUserMedia({ audio: true, video: false })
    .then(handleSuccess);
}