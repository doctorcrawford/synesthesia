import { useCallback, useState } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import gsap from 'gsap';
import { SimplexNoise } from 'three/examples/jsm/math/SimplexNoise.js';
// import { createNoise2D, createNoise3D, createNoise4D } from 'simplex-noise';
// import { SimplexNoise } from 'three/examples/jsm/math/SimplexNoise.js';

// const noise = new SimplexNoise();

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
  camera.position.set(0, 0, 100);

  //The Shapes
  const sphereGeometry = new THREE.SphereGeometry(20, 50, 25);
  const sphereMaterial = new THREE.MeshLambertMaterial({
    color: "#00ff83",
    wireframe: true,
  });
  const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
  group.add(sphere);

  const planeGeometry = new THREE.PlaneGeometry(800, 800, 60, 60);
  const planeMaterial = new THREE.ShaderMaterial({
    color: 0xE1E100,
    side: THREE.DoubleSide,
    wireframe: true
  });

  const plane = new THREE.Mesh(planeGeometry, planeMaterial);
  plane.rotation.x = 0.5 * Math.PI;
  // plane.rotation.y = 0.5 * Math.PI;
  plane.position.set(0, 30, 0);
  group.add(plane);

  const plane2 = new THREE.Mesh(planeGeometry, planeMaterial);
  plane2.rotation.x = 0.5 * Math.PI;
  plane2.position.set(0, -30, 0);
  group.add(plane2);

  //Light
  const spotlight = new THREE.SpotLight(0xffffff, 1, 100);
  spotlight.intensity = 5.9;
  spotlight.position.set(-30, 40, 20);
  spotlight.lookAt(sphere.position);
  spotlight.castShadow = true;
  scene.add(spotlight);

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

  //Analyser
  analyser.getByteFrequencyData(dataArray);
  console.log(analyser);



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


  // makeRoughGround(plane, modulate(upperAvgFr, 0, 1, 0.5, 4));
  // makeRoughGround(plane2, modulate(lowerAvgFr, 0, 1, 0.5, 4));

  // makeRoughSphere(sphere, modulate(Math.pow(lowerMaxFr, 0.8), 0, 1, 0, 8), modulate(upperAvgFr, 0, 1, 0, 4));

  // group.rotation.y += 0.005;



  // plane movement
  // const nPosPlane = [];
  // const v2Plane = new THREE.Vector2();
  // const posPlane = planeGeometry.attributes.position as THREE.BufferAttribute;
  // for (let j = 0; j < posPlane.count; j++) {
  //   v2Plane.fromBufferAttribute(posPlane, j).normalize();
  //   nPosPlane.push(v2Plane.clone());
  // }
  // planeGeometry.userData.nPosPlane = nPosPlane;


  // sphere movement
  const nPosSphere = [];
  const v3Sphere = new THREE.Vector3();
  const posSphere = sphereGeometry.attributes.position;
  for (let i = 0; i < posSphere.count; i++) {
    v3Sphere.fromBufferAttribute(posSphere, i).normalize();
    nPosSphere.push(v3Sphere.clone());
  }
  sphereGeometry.userData.nPosSphere = nPosSphere;
  const noise = new SimplexNoise();

  const clock = new THREE.Clock();
  const radius = 10;

  const planeCount = planeGeometry.attributes.position.count;


  const animate = () => {

    console.log(listener);

    // function makeRoughSphere(mesh: Mesh, bassFr: number, treFr: number) {
    //   for (const vertex in mesh.position) {
    //     const offset = mesh.geometry.boundingSphere?.radius;
    //     const amp = 7;
    //     const time = window.performance.now();
    //     // vertex.normalize();
    //     const rf = 0.00001;
    //     if (offset !== undefined) {
    //       const distance = (offset + bassFr) + noise.noise3d(vertex.x + time * rf * 7, vertex.y + time * rf * 8, vertex.z + time * rf * 9) * amp * treFr;
    //       vertex.multiplyScalar(distance);
    //     }
    //   });

    // Update sphere vertices
    const t = clock.getElapsedTime();
    sphereGeometry.userData.nPosSphere.forEach((p: THREE.Vector3, i: number) => {
      const ns = noise.noise4d(p.x, p.y, p.z, t);
      const amp = 7;
      const rf = 2;
      const distance = (radius + modulate(Math.pow(lowerMaxFr, 0.8), 0, 1, 0, 8)) + noise.noise3d(p.x + t * rf * 7, p.y + t * rf * 8, p.z + t * rf * 9) * amp * modulate(upperAvgFr, 0, 1, 0, 4);

      v3Sphere.copy(p).multiplyScalar(amp).addScaledVector(p, distance);
      posSphere.setXYZ(i, v3Sphere.x, v3Sphere.y, v3Sphere.z);
    });
    sphereGeometry.computeVertexNormals();
    posSphere.needsUpdate = true;

    // NOT QUITE WORKING: ANOTHER WAY TO UPDATE PLANE VERTICES
    // planeGeometry.userData.nPosPlane.forEach((p: THREE.Vector2, j: number) => {
    //   const ns = noise.noise(p.x, p.y);
    //   v2Plane.copy(p).multiplyScalar(amp).addScaledVector(p, ns);
    //   posPlane.setXY(j, v2Plane.x, v2Plane.y);
    // });
    // planeGeometry.computeVertexNormals();
    // posPlane.needsUpdate = true;


    // Update plane vertices
    const now = Date.now() / 300;
    for (let i = 0; i < planeCount; i++) {
      const x = planeGeometry.attributes.position.getX(i);
      const y = planeGeometry.attributes.position.getY(i);
      const xsin = Math.sin(x + now);
      const ycos = Math.cos(y + now);
      planeGeometry.attributes.position.setZ(i, xsin + ycos);
    }
    planeGeometry.computeVertexNormals();
    planeGeometry.attributes.position.needsUpdate = true;


    //  ANOTHER WAY TO UPDATE SPHERE VERTICES

    // //Update sphere vertices
    // // iterate all vertices
    // sphereGeometry.userData.nPos.forEach()
    // for (let j = 0; j < sphereCount; j++) {
    //   //use uvs to calculate wave
    //   const uX = sphereGeometry.attributes.uv.getX(j) * Math.PI * 16;
    //   const uY = sphereGeometry.attributes.uv.getY(j) * Math.PI * 16;

    //   // calculate current vertex wave height
    //   const xangle = (uX + now);
    //   const xsin = Math.sin(xangle) * damping;
    //   const yangle = (uY + now);
    //   const ycos = Math.cos(yangle) * damping;

    //   // indices
    //   const ix = j * 3;
    //   const iy = j * 3 + 1;
    //   const iz = j * 3 + 2;

    //   //set new position
    //   sphereGeometry
    //   sphereGeometry.attributes.position.setX(j, spherePosition_clone[ix] + sphereNormals_clone[ix] * (xsin + ycos));
    //   sphereGeometry.attributes.position.setY(j, spherePosition_clone[iy] + sphereNormals_clone[iy] * (xsin + ycos));
    //   sphereGeometry.attributes.position.setZ(j, spherePosition_clone[iz] + sphereNormals_clone[iz] * (xsin + ycos));
    // }
    // sphereGeometry.computeVertexNormals();
    // sphereGeometry.attributes.position.needsUpdate = true;

    controls.update();
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
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

// type Mesh = THREE.Mesh<THREE.BufferGeometry, THREE.Material>

// function makeRoughSphere(mesh: Mesh, bassFr: number, treFr: number) {
//   for (const vertex in mesh.position) {
//     const offset = mesh.geometry.boundingSphere?.radius;
//     const amp = 7;
//     const time = window.performance.now();
//     // vertex.normalize();
//     const rf = 0.00001;
//     if (offset !== undefined) {
//       const distance = (offset + bassFr) + noise.noise3d(vertex.x + time * rf * 7, vertex.y + time * rf * 8, vertex.z + time * rf * 9) * amp * treFr;
//       vertex.multiplyScalar(distance);
//     }
//   });
//   mesh.geometry.verticesNeedUpdate = true;
//   mesh.geometry.normalsNeedUpdate = true;
//   mesh.geometry.computeVertexNormals();
//   mesh.geometry.computeFaceNormals();
// }

// function makeRoughGround(mesh: THREE.Mesh<THREE.PlaneGeometry, THREE.MeshLambertMaterial>, distortionFr: number) {
//   const positionAtrribute = mesh.geometry.getAttribute('position');
//   for (let i 0 )

//     mesh.geometry.vertices.forEach(function (vertex: number, i: number) {
//       const amp = 2;
//       const time = Date.now();
//       const distance = (noise.noise(vertex.x + time * 0.0003, vertex.y + time * 0.0001) + 0) * distortionFr * amp;
//       vertex.z = distance;
//     });
//   mesh.geometry.verticesNeedUpdate = true;
//   mesh.geometry.normalsNeedUpdate = true;
//   mesh.geometry.computeVertexNormals();
//   mesh.geometry.computeFaceNormals();
// }


function fractionate(val: number, minVal: number, maxVal: number) {
  return (val - minVal) / (maxVal - minVal);
}

function modulate(val: number, minVal: number, maxVal: number, outMin: number, outMax: number) {
  const fr = fractionate(val, minVal, maxVal);
  const delta = outMax - outMin;
  return outMin + (fr * delta);
}

function avg(arr: Uint8Array) {
  const total = arr.reduce(function (sum, b) { return sum + b; });
  return (total / arr.length);
}

function max(arr: Uint8Array) {
  return arr.reduce(function (a, b) { return Math.max(a, b); })
}