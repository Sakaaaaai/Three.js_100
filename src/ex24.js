// Q24: Raycaster で 3D オブジェクトの選択
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

const cubes = [];
// --- ここで10個のキューブをランダム配置してください ---

camera.position.z = 10;

const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

window.addEventListener("click", (event) => {
  // --- ここでクリック判定と色変更を行ってください ---
});

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
