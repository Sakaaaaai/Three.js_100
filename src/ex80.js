// Q80: パーティクルアニメーション応用（モーフィング）
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

const count = 1000;
const geometry = new THREE.BufferGeometry();
const positions = new Float32Array(count * 3);
geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

const material = new THREE.PointsMaterial({ size: 0.1, color: 0xffffff });
const particles = new THREE.Points(geometry, material);
scene.add(particles);

// 目標座標の配列
const boxPositions = []; // 箱の形
const spherePositions = []; // 球の形

// --- ここで座標を計算 ---

let currentShape = "box"; // 現在の形状

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);

  // --- ここでパーティクルを移動 ---

  renderer.render(scene, camera);
}
animate();
