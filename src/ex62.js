// Q62: 爆発エフェクト（全方向への拡散）
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

// --- 爆発用パーティクル管理 ---
const particles = [];

function explode() {
  // ここでパーティクルを初期化
}

// クリックで爆発
window.addEventListener("click", explode);

camera.position.z = 10;

function animate() {
  requestAnimationFrame(animate);

  // --- ここでパーティクル更新 ---

  renderer.render(scene, camera);
}
animate();
