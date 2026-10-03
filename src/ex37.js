// Q37: 地面の作成
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

const loader = new THREE.TextureLoader();
const texture = loader.load(
  "https://threejs.org/examples/textures/terrain/grasslight-big.jpg"
);

// --- ここでテクスチャの繰り返し設定 ---

// --- ここで地面を作成 ---

camera.position.set(0, 2, 5);

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
