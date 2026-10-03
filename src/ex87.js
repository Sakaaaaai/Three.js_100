// Q87: シューティングゲーム（簡易版）
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

const bullets = [];
const enemies = [];

// 発射
document.addEventListener("keydown", (e) => {
  if (e.code === "Space") {
    // 弾作成
  }
});

// 敵生成
setInterval(() => {
  // 敵作成
}, 1000);

camera.position.y = 2;
camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);

  // --- 移動と衝突判定 ---

  renderer.render(scene, camera);
}
animate();
