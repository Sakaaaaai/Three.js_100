// Q28: カメラの移動アニメーション
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

const cube = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
);
scene.add(cube);

// グリッドの追加（カメラの移動をわかりやすくするため）
const gridHelper = new THREE.GridHelper(20, 20);
scene.add(gridHelper);

let angle = 0;
const radius = 5;

function animate() {
  requestAnimationFrame(animate);

  // --- ここでカメラ位置を更新 ---

  // --- ここでカメラの向きを更新 ---

  renderer.render(scene, camera);
}
animate();
