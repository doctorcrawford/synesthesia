import { SimplexNoise } from "three/examples/jsm/math/SimplexNoise.js";
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';


type Mesh = THREE.Mesh<THREE.BufferGeometry, THREE.Material>

export function setAudio(camera: THREE.PerspectiveCamera, audioContext: AudioContext): [Uint8Array, GainNode, StereoPannerNode, AnalyserNode] {
  const listener = new THREE.AudioListener();
  camera.add(listener);
  const sound = new THREE.Audio(listener);
  sound.autoplay = true;
  sound.setLoop(true);
  // const audioContext = new window.AudioContext();
  const audioElement = document.querySelector('audio') as HTMLMediaElement;
  const source = audioContext.createMediaElementSource(audioElement);
  const analyser = audioContext.createAnalyser();
  const gainNode = audioContext.createGain();
  const pannerOptions = { pan: 0 };
  const panner = new StereoPannerNode(audioContext, pannerOptions);
  source
    .connect(gainNode)
    .connect(panner)
    .connect(analyser)
    .connect(audioContext.destination);
  analyser.fftSize = 1024;
  const bufferLength = analyser.frequencyBinCount;
  const dataArray = new Uint8Array(bufferLength);

  return [dataArray, gainNode, panner, analyser];
}

export function makeRoughSphere(noise: SimplexNoise, mesh: Mesh, spherePosition_clone: Float32Array, sphereNormals_clone: Float32Array, bassFr: number, treFr: number, damping: number) {
  const sphereCount = mesh.geometry.attributes.position.count;

  for (let i = 0; i < sphereCount; i++) {
    const offset = mesh.geometry.boundingSphere?.radius;
    const amp = 2;
    const time = window.performance.now() / 600;
    // vertex.normalize();
    const rf = 0.000001;
    const uX = mesh.geometry.attributes.uv.getX(i) * Math.PI * 16;
    const uY = mesh.geometry.attributes.uv.getY(i) * Math.PI * 16;
    const uZ = mesh.geometry.attributes.uv.getZ(i) * Math.PI * 16;

    // calculate current vertex wave height
    const xangle = (uX + time);
    const xsin = Math.sin(xangle) * damping;
    const yangle = (uY + time);
    const ycos = Math.cos(yangle) * damping;

    // indices
    const ix = i * 3;
    const iy = i * 3 + 1;
    const iz = i * 3 + 2;

    if (offset !== undefined) {
      const distance = (offset / 36 + bassFr) + noise.noise3d(uX + time * rf * 7, uY + time * rf * 8, uZ + time * rf * 9) * amp * treFr;
      // vertex.multiplyScalar(distance);
      mesh.geometry.attributes.position.setX(i, spherePosition_clone[ix] + sphereNormals_clone[ix] * (distance + xsin + ycos));
      mesh.geometry.attributes.position.setY(i, spherePosition_clone[iy] + sphereNormals_clone[iy] * (distance + xsin + ycos));
      mesh.geometry.attributes.position.setZ(i, spherePosition_clone[iz] + sphereNormals_clone[iz] * (distance + xsin + ycos));
    }

  }
  mesh.geometry.computeVertexNormals();
  mesh.geometry.attributes.position.needsUpdate = true;

}

export function makeRoughGround(noise: SimplexNoise, mesh: Mesh, distortionFr: number) {
  const now = Date.now() / 400;
  const planeCount = mesh.geometry.attributes.position.count;
  const amp = 2;

  for (let i = 0; i < planeCount; i++) {
    const x = mesh.geometry.attributes.position.getX(i);
    const y = mesh.geometry.attributes.position.getY(i);
    const xsin = Math.sin(x + now);
    const ycos = Math.cos(y + now);
    const distance = (noise.noise(x + now * 0.0003, y + now * 0.0001) + 0) * distortionFr * amp;
    mesh.geometry.attributes.position.setZ(i, distance + xsin + ycos);
  }
  mesh.geometry.computeVertexNormals();
  mesh.geometry.attributes.position.needsUpdate = true;
}


export function fractionate(val: number, minVal: number, maxVal: number): number {
  return (val - minVal) / (maxVal - minVal);
}

export function modulate(val: number, minVal: number, maxVal: number, outMin: number, outMax: number): number {
  const fr = fractionate(val, minVal, maxVal);
  const delta = outMax - outMin;
  return outMin + (fr * delta);
}

export function avg(arr: Uint8Array): number {
  const total = arr.reduce(function (sum, b) { return sum + b; });
  return (total / arr.length);
}

export function max(arr: Uint8Array): number {
  return arr.reduce(function (a, b) { return Math.max(a, b); })
}

export function setPlayButton(audioContext: AudioContext, audioElement: HTMLMediaElement) {
  const playButton = document.getElementById('play-button');
  if (playButton) {
    playButton?.addEventListener(
      "click",
      () => {
        // Check if context is in suspended state (autoplay policy)
        if (audioContext.state === "suspended") {
          audioContext.resume();
        }

        // Play or pause track depending on state
        if (playButton.dataset.playing === "false") {
          audioElement.play();
          playButton.dataset.playing = "true";
        } else if (playButton.dataset.playing === "true") {
          audioElement.pause();
          playButton.dataset.playing = "false";
        }
      },
      false,
    );

    audioElement.addEventListener(
      'ended',
      () => {
        playButton.dataset.playing = 'false';
      },
      false,
    );
  } else {
    throw new Error('no audio element');
  }
}

export function setOrbitControls(camera: THREE.PerspectiveCamera, node: HTMLDivElement): OrbitControls {
  const controls = new OrbitControls(camera, node);
  controls.enableDamping = true;
  controls.enablePan = false;
  controls.enableZoom = false;
  controls.autoRotate = true;
  controls.autoRotateSpeed = 1;

  return controls;
}

export function resizeCameraForWindow(sizes: {
  width: number;
  height: number;
}, camera: THREE.PerspectiveCamera, renderer: THREE.WebGLRenderer) {
  // Resize
  window.addEventListener('resize', () => {
    //Update Sizes
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;

    // Update Camera
    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();
    renderer.setSize(sizes.width, sizes.height);
  })
}

export function setSphere(): [THREE.Mesh<THREE.SphereGeometry, THREE.MeshPhongMaterial>, THREE.SphereGeometry] {
  const sphereGeometry = new THREE.SphereGeometry(10, 256, 128);
  const sphereMaterial = new THREE.MeshPhongMaterial({
    color: "#e6ffa8",
    wireframe: true,
  });
  const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);

  return [sphere, sphereGeometry];
}

export function setPlanes(): [THREE.Mesh<THREE.PlaneGeometry, THREE.MeshPhongMaterial>, THREE.Mesh<THREE.PlaneGeometry, THREE.MeshPhongMaterial>, THREE.PlaneGeometry] {
  const planeGeometry = new THREE.PlaneGeometry(800, 800, 60, 60);
  const planeMaterial = new THREE.MeshPhongMaterial({
    color: "#00ff83",
    // side: THREE.DoubleSide,
    wireframe: true
  });

  const plane = new THREE.Mesh(planeGeometry, planeMaterial);
  const plane2 = new THREE.Mesh(planeGeometry, planeMaterial);

  return [plane, plane2, planeGeometry];
}

export function setSpotlight(): THREE.SpotLight {
  const spotlight = new THREE.SpotLight(0xffffff, 1, 100);
  spotlight.intensity = 5.9;
  spotlight.position.set(-30, 40, 20);
  spotlight.castShadow = true;

  return spotlight;
}