import { useCallback, useState } from 'react'
import { render } from 'react-dom';
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';


type Shape = THREE.Mesh<THREE.BoxGeometry | THREE.SphereGeometry, THREE.MeshNormalMaterial | THREE.MeshStandardMaterial>

function sphere(): Shape {
  const geometry = new THREE.SphereGeometry(3, 64, 64);
  const material = new THREE.MeshStandardMaterial({
    color: "#00ff83"
  });

  return new THREE.Mesh(geometry, material);
}

function cube(): Shape {
  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshNormalMaterial();
  return new THREE.Mesh(geometry, material);
}

const initThreeJsScene = (mesh: Shape, node: HTMLDivElement) => {
  const scene = new THREE.Scene();

  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
  }
  const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height,
    0.1, 100);

  const renderer = new THREE.WebGLRenderer();
  renderer.setClearColor(0xffffff);
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(2);

  node.appendChild(renderer.domElement);

  camera.position.z = 10;

  scene.add(mesh);

  const light = new THREE.PointLight(0xffffff, 1, 100);
  light.position.set(0, 10, 10);
  scene.add(light);

  //Controls
  const controls = new OrbitControls(camera, node);
  controls.enableDamping = true;
  controls.enablePan = false;
  controls.enableZoom = false;
  controls.autoRotate = true;
  controls.autoRotateSpeed = 3;

  //Resize
  window.addEventListener('resize', () => {
    //Update Sizes
    console.log(window.innerWidth);
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
  animate()
}

export const ThreeCanvas = () => {
  const [initialized, setInitialized] = useState(false)
  const threeDivRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (node !== null && !initialized) {
        initThreeJsScene(sphere(), node)
        setInitialized(true)
      }
    },
    [initialized]
  )
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh'
      }}
      ref={threeDivRef}
    ></div>
  )
}