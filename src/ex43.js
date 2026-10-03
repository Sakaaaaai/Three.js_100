// Q43: BufferGeometry の使用（大量のパーティクル）
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

// --- ここでジオメトリとパーティクルを作成 ---
// const geometry = new THREE.BufferGeometry();
// const count = 1000;
// const positions = new Float32Array(count * 3);
// ...

camera.position.z = 15;

function animate() {
  requestAnimationFrame(animate);
  // 回転させると綺麗
  renderer.render(scene, camera);
}
animate();
