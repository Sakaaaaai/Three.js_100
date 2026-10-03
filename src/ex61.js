// Q61: 炎のエフェクト（パーティクル）
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

const texture = new THREE.TextureLoader().load(
  "https://threejs.org/examples/textures/sprites/spark1.png"
);

// --- ここでパーティクルシステムを作成 ---
// 配列などで管理するのが簡単

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);

  // --- ここでパーティクルを更新 ---

  renderer.render(scene, camera);
}
animate();
