// export default function AudioInput() {
//   // handleStream();
//   return (
//     <>
//       <input id="audio-upload" type="file" accept="audio/*" capture />
//       <audio id="player" controls></audio>
//     </>
//   )
// }

// function changeHandler({
//   target
// }) {
//   // make sure we have files to use
//   if (!target.files.length) return;
//   console.log(target);

//   const urlObj = URL.createObjectURL(target.files[0]);
//   const audio = document.createElement("audio");
//   audio.addEventListener('load', () => {
//     URL.revokeObjectURL(urlObj);
//   });

//   document.body.appendChild(audio);
//   audio.controls = true;
//   audio.src = urlObj;
// }

// // function handleStream() {
// //   const player = document.getElementById('player') as HTMLAudioElement;

// //   const handleSuccess = async (stream: MediaStream) => {
// //     const context = new AudioContext();
// //     const source = context.createMediaStreamSource(stream);

// //     await context.audioWorklet.addModule('processor.ts');
// //     const worklet = new AudioWorkletNode(context, "worklet-processor");

// //     source.connect(worklet);
// //     worklet.connect(context.destination);
// //   }

// //   navigator.mediaDevices
// //     .getUserMedia({ audio: true, video: false })
// //     .then(handleSuccess);
// // }