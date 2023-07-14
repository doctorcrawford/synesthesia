import { useCallback, useState } from 'react'
import * as THREE from 'three'


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
  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(75, 500 / 500,
    0.1, 1000)
  const renderer = new THREE.WebGLRenderer()
  renderer.setClearColor(0xffffff)
  renderer.setSize(500, 500)
  node.appendChild(renderer.domElement)
  camera.position.z = 5

  scene.add(mesh)
  const animate = () => {
    requestAnimationFrame(animate)
    mesh.rotation.x += 0.01
    mesh.rotation.y += 0.01
    renderer.render(scene, camera)
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