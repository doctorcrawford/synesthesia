import { useCallback, useState } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import gsap from 'gsap';
import { SimplexNoise } from 'three/examples/jsm/math/SimplexNoise.js';
import { GUI } from 'dat.gui';
import Stats from 'three/examples/jsm/libs/stats.module.js';
import { makeRoughGround, makeRoughSphere, modulate, avg, max } from './Modulate';

const noise = new SimplexNoise();

const initThreeJsScene = (node: HTMLDivElement): void => {
  const scene = new THREE.Scene();
  const group = new THREE.Group();
  const gui = new GUI();
  const stats = new Stats();
  document.body.appendChild(stats.dom);

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

  camera.position.set(0, 0, 100);

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

  // Audio
  const listener = new THREE.AudioListener();
  camera.add(listener);
  const sound = new THREE.Audio(listener);
  sound.autoplay = true;
  sound.setLoop(true);

  const audioContext = new window.AudioContext();
  const audioElement = document.querySelector('audio') as HTMLMediaElement;
  const source = audioContext.createMediaElementSource(audioElement);
  const analyser = audioContext.createAnalyser();
  const gainNode = audioContext.createGain();
  const pannerOptions = { pan: 0 };
  const panner = new StereoPannerNode(audioContext, pannerOptions);
  source.connect(gainNode)
    .connect(panner)
    .connect(analyser);
  // .connect(audioContext.destination);
  analyser.connect(audioContext.destination);
  analyser.fftSize = 1024;
  const bufferLength = analyser.frequencyBinCount;
  const dataArray = new Uint8Array(bufferLength);

  const uniforms = {
    u_time: {
      type: "f",
      value: 1.0,
    },
    u_amplitude: {
      type: "f",
      value: 3.0,
    },
    u_data_arr: {
      type: "float[64]",
      value: dataArray,
    },
  };

  console.log(listener);


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


  //The Shapes
  const sphereGeometry = new THREE.SphereGeometry(10, 256, 128);
  const sphereMaterial = new THREE.MeshPhongMaterial({
    color: "#e6ffa8",
    wireframe: true,
  });
  const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
  group.add(sphere);

  const planeGeometry = new THREE.PlaneGeometry(800, 800, 60, 60);
  const planeMaterial = new THREE.MeshPhongMaterial({
    color: "#00ff83",
    // side: THREE.DoubleSide,
    wireframe: true
  });

  const plane = new THREE.Mesh(planeGeometry, planeMaterial);
  plane.rotation.x = 0.5 * Math.PI;
  plane.position.set(0, 30, 0);
  group.add(plane);

  const plane2 = new THREE.Mesh(planeGeometry, planeMaterial);
  plane2.rotation.x = 0.5 * Math.PI;
  plane2.position.set(0, -30, 0);
  group.add(plane2);

  const planeFolder = gui.addFolder('Plane');
  const materialParams = {
    planeMeshColor: plane.material.color.getHex(),
  };
  planeFolder.add(plane.material, 'wireframe');
  planeFolder
    .addColor(materialParams, 'planeMeshColor')
    .onChange((value) => plane.material.color.set(value));

  planeFolder.open();
  console.log(sphere);

  //Light
  const spotlight = new THREE.SpotLight(0xffffff, 1, 100);
  spotlight.intensity = 5.9;
  spotlight.position.set(-30, 40, 20);
  spotlight.lookAt(sphere.position);
  spotlight.castShadow = true;
  scene.add(spotlight);

  const ambientLight = new THREE.AmbientLight(0xaaaaaa);
  scene.add(ambientLight);


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
  tl2.fromTo('.header-title', { opacity: 0 }, { opacity: 1 })

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


  // sphere movement
  const nPosSphere = [];
  const v3Sphere = new THREE.Vector3();
  const posSphere = sphereGeometry.attributes.position;
  for (let i = 0; i < posSphere.count; i++) {
    v3Sphere.fromBufferAttribute(posSphere, i).normalize();
    nPosSphere.push(v3Sphere.clone());
  }
  sphereGeometry.userData.nPosSphere = nPosSphere;

  const clock = new THREE.Clock();

  scene.add(group);

  const spherePosition_clone = JSON.parse(
    JSON.stringify(sphereGeometry.attributes.position.array)
  ) as Float32Array;
  const sphereNormals_clone = JSON.parse(
    JSON.stringify(sphereGeometry.attributes.normal.array)
  ) as Float32Array;
  const damping = 0.2;

  const animate = () => {
    const t = clock.getElapsedTime();

    analyser.getByteFrequencyData(dataArray);
    uniforms.u_time.value = t;
    uniforms.u_data_arr.value = dataArray;

    ////
    const lowerHalfArray = dataArray.slice(0, (dataArray.length / 2) - 1);
    const upperHalfArray = dataArray.slice((dataArray.length / 2) - 1, dataArray.length - 1);

    const overallAvg = avg(dataArray);
    const lowerMax = max(lowerHalfArray);
    const lowerAvg = avg(lowerHalfArray);
    const upperMax = max(upperHalfArray);
    const upperAvg = avg(upperHalfArray);

    const lowerMaxFr = lowerMax / lowerHalfArray.length;
    const lowerAvgFr = lowerAvg / lowerHalfArray.length;
    const upperMaxFr = upperMax / upperHalfArray.length;
    const upperAvgFr = upperAvg / upperHalfArray.length;

    makeRoughSphere(noise, sphere, spherePosition_clone, sphereNormals_clone, modulate(Math.pow(lowerMaxFr, 0.8), 0, 1, 0, 8), modulate(upperAvgFr, 0, 2, 0, 4), damping);

    makeRoughGround(noise, plane, modulate(lowerAvgFr, 0, 1, 0.5, 4));

    planeGeometry.computeVertexNormals();
    planeGeometry.attributes.position.needsUpdate = true;

    controls.update();
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    stats.update();
  }
  animate();
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