// Q95: 3D グラフ（曲面プロット）
// 模範解答

import * as THREE from "three";
import { ParametricGeometry } from "three/examples/jsm/geometries/ParametricGeometry";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const graphFunc = (u, v, target) => {
  const range = 10;
  const x = (u - 0.5) * range;
  const z = (v - 0.5) * range;

  // 波打つ関数
  const y = Math.sin(x) * Math.cos(z) * 2;

  target.set(x, y, z);
};

// 分割数 50x50
const geometry = new ParametricGeometry(graphFunc, 50, 50);
const material = new THREE.MeshNormalMaterial({
  side: THREE.DoubleSide,
  wireframe: false,
});
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// ワイヤーフレームを重ねると見やすい
const wireMat = new THREE.MeshBasicMaterial({
  color: 0x000000,
  wireframe: true,
  transparent: true,
  opacity: 0.3,
});
const wireMesh = new THREE.Mesh(geometry, wireMat);
scene.add(wireMesh);

camera.position.set(0, 10, 15);
camera.lookAt(0, 0, 0);

function animate() {
  requestAnimationFrame(animate);

  mesh.rotation.y += 0.005;
  wireMesh.rotation.y += 0.005;

  renderer.render(scene, camera);
}
animate();
