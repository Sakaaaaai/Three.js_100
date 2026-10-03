// Q19: CylinderGeometry で円柱
// ここに実装してください（詰まったら画面右上のパネルで模範解答を表示）

import * as THREE from "three";

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

// --- ここで円柱を作成してください ---

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);
  // 回転
  renderer.render(scene, camera);
}
animate();
