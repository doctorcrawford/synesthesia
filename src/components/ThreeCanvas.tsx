import { useCallback, useState } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import gsap from 'gsap';

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

const initThreeJsScene = (node: HTMLDivElement) => {
  const scene = new THREE.Scene();

  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
  }
  const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height,
    0.1, 100);

  const renderer = new THREE.WebGLRenderer();
  renderer.setClearColor(0x000000);
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(2);

  node.appendChild(renderer.domElement);

  camera.position.z = 10;

  //The Shape
  const geometry = new THREE.SphereGeometry(3, 64, 64);
  const material = new THREE.MeshStandardMaterial({
    color: "#00ff83"
  });

  const mesh = new THREE.Mesh(geometry, material);

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

  //Timeline
  const tl = gsap.timeline({ defaults: { duration: 1 } })
  const tl2 = gsap.timeline({ defaults: { duration: 3 } })
  tl.fromTo(mesh.scale, { z: 0, x: 0, y: 0 }, { z: 1, x: 1, y: 1 })
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
      gsap.to(mesh.material.color, {
        r: newColor.r,
        g: newColor.g,
        b: newColor.b,
      })
    }
  })
}

export const ThreeCanvas = () => {
  const [initialized, setInitialized] = useState(false)
  const threeDivRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (node !== null && !initialized) {
        initThreeJsScene(node)
        setInitialized(true)
      }
    },
    [initialized]
  )
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
  )
}