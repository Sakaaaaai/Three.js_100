// Q49: カメラパスアニメーション（ジェットコースター）
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

// 参照用のグリッド
scene.add(new THREE.GridHelper(50, 50));
scene.add(new THREE.AxesHelper(5));

// --- カーブ作成 ---
// const curve = ...

let progress = 0;

function animate() {
  requestAnimationFrame(animate);

  // --- ここでカメラ位置と向きを更新 ---

  renderer.render(scene, camera);
}
animate();
