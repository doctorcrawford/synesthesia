import { useCallback, useState } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import gsap from 'gsap';


const initThreeJsScene = (node: HTMLDivElement) => {
  const scene = new THREE.Scene();
  const group = new THREE.Group();

  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
  }
  const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height,
    0.1, 1000);

  const renderer = new THREE.WebGLRenderer();
  renderer.setClearColor(0x000000);
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(2);

  node.appendChild(renderer.domElement);

  // camera.position.z = 10;
  camera.position.set(0,0,100);

  //The Shapes
  const sphereGeometry = new THREE.SphereGeometry(20, 30, 30);
  const sphereMaterial = new THREE.MeshLambertMaterial({
    color: "#00ff83",
    wireframe: true,
  });
  const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
  group.add(sphere);

  const planeGeometry = new THREE.PlaneGeometry(800, 800, 20, 20);
  const planeMaterial = new THREE.MeshLambertMaterial({
    color: 0x6904ce,
    side: THREE.DoubleSide,
    wireframe: true
  });

  const plane = new THREE.Mesh(planeGeometry, planeMaterial);
  plane.rotation.x = 0.5 * Math.PI;
  plane.position.set(0, 30, 0);
  group.add(plane);

  const plane2 = new THREE.Mesh(planeGeometry, planeMaterial);
  plane.rotation.x = 0.5 * Math.PI;
  plane.position.set(0, -30, 0);
  group.add(plane2);

  //Light
  const light = new THREE.PointLight(0xffffff, 1, 100);
  light.position.set(0, 10, 10);
  scene.add(light);

  const ambientLight = new THREE.AmbientLight(0xaaaaaa);
  scene.add(ambientLight);
  
  scene.add(group);

  //Controls
  const controls = new OrbitControls(camera, node);
  controls.enableDamping = true;
  controls.enablePan = false;
  controls.enableZoom = false;
  controls.autoRotate = true;
  controls.autoRotateSpeed = 1;

  //Resize
  window.addEventListener('resize', () => {
    //Update Sizes
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;

    //Update Camera
    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();
    renderer.setSize(sizes.width, sizes.height);
  })

  const animate = () => {
    controls.update();
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  }
  animate();

  // Audio
  const listener = new THREE.AudioListener();
  camera.add(listener);
  const sound = new THREE.Audio(listener);
  sound.autoplay = true;
  sound.setLoop(true);

  const audioContext = new AudioContext();
  const audioElement = document.querySelector('audio') as HTMLMediaElement;
  const track = audioContext.createMediaElementSource(audioElement);
  const analyser = audioContext.createAnalyser();
  const gainNode = audioContext.createGain();
  const pannerOptions = { pan: 0 };
  const panner = new StereoPannerNode(audioContext, pannerOptions);
  track.connect(gainNode)
    .connect(panner)
    .connect(analyser)
    .connect(audioContext.destination);
  analyser.fftSize = 512;
  const bufferLength = analyser.frequencyBinCount;
  const dataArray = new Uint8Array(bufferLength);


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

  const volumeControl: HTMLInputElement | null = document.querySelector('#volume');
  if (volumeControl) {
    volumeControl.addEventListener(
      'input',
      () => {
        gainNode.gain.value = parseFloat(volumeControl.value);
      },
      false,
    );
  } else {
    throw new Error('no volume control');
  }

  const pannerControl: HTMLInputElement | null = document.querySelector('#panner');

  if (pannerControl) {
    pannerControl.addEventListener(
      'input',
      () => {
        panner.pan.value = parseFloat(pannerControl.value);
      },
      false,
    );
  } else {
    throw new Error('no panner control');
  }



  //Timeline
  const tl = gsap.timeline({ defaults: { duration: 1 } })
  const tl2 = gsap.timeline({ defaults: { duration: 3 } })
  tl.fromTo(sphere.scale, { z: 0, x: 0, y: 0 }, { z: 1, x: 1, y: 1 })
  tl2.fromTo('nav', { y: '-100%' }, { y: '0%' })
  tl2.fromTo('.title', { opacity: 0 }, { opacity: 1 })

  //Mouse Animation Color
  let mouseDown = false;
  let rbg = []
  window.addEventListener('mousedown', () => (mouseDown = true))
  window.addEventListener('mouseup', () => (mouseDown = false))

  const rgbToHex = (r: number, g: number, b: number) => '#' + [r, g, b]
    .map(x => x.toString(16).padStart(2, '0')).join('')

  window.addEventListener('mousemove', (e) => {
    if (mouseDown) {
      rbg = [
        Math.round((e.pageX / sizes.width) * 255),
        Math.round((e.pageY / sizes.height) * 255),
        175,
      ]
      // Let's animate
      const newColor = new THREE.Color(rgbToHex(rbg[0], rbg[1], rbg[2]));
      gsap.to(sphere.material.color, {
        r: newColor.r,
        g: newColor.g,
        b: newColor.b,
      })
    }
  })

  // const lowerHalf
}

export const ThreeCanvas = () => {
  const [initialized, setInitialized] = useState(false);
  const threeDivRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (node !== null && !initialized) {
        initThreeJsScene(node);
        setInitialized(true);
      }
    },
    [initialized]
  );

  return (
    <div
      className='webgL'
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh'
      }}
      ref={threeDivRef}
    ></div>
  );
}