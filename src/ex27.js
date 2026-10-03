// Q27: 星空の作成
// ここに実装してください（詰まったら画面右上のパネルで模範解答を表示）

import * as THREE from "three";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  2000
); // Farを大きく
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// --- ここで星空を作成してください ---

function animate() {
  requestAnimationFrame(animate);
  // 星空を回転
  renderer.render(scene, camera);
}
animate();
