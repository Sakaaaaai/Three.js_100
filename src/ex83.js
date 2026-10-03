// Q83: 太陽系シミュレーション（階層構造）
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

// 太陽
const sun = new THREE.Mesh(
  new THREE.SphereGeometry(1),
  new THREE.MeshBasicMaterial({ color: 0xffff00 })
);
scene.add(sun);

// --- ここで地球と月を作成し、親子関係を設定 ---

camera.position.z = 10;

function animate() {
  requestAnimationFrame(animate);

  // --- ここで回転 ---

  renderer.render(scene, camera);
}
animate();
