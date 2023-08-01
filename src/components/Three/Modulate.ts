import { SimplexNoise } from "three/examples/jsm/math/SimplexNoise.js";
import * as THREE from 'three'

type Mesh = THREE.Mesh<THREE.BufferGeometry, THREE.Material>

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

export function setSphere(): [THREE.Mesh<THREE.SphereGeometry, THREE.MeshPhongMaterial>, THREE.SphereGeometry] {
  const sphereGeometry = new THREE.SphereGeometry(10, 256, 128);
  const sphereMaterial = new THREE.MeshPhongMaterial({
    color: "#e6ffa8",
    wireframe: true,
  });
  const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);

  return [sphere, sphereGeometry];
}