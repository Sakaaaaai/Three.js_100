// Q98: マルチプレイヤーの準備（同期の概念）
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

const playerMeshes = {}; // ID -> Mesh

function updatePlayers(serverData) {
  // 1. 新規作成 & 更新
  // 2. 削除判定
}

// 疑似サーバーデータ更新
setInterval(() => {
  const mockData = {
    p1: { x: Math.random(), z: Math.random() },
    p2: { x: Math.random(), z: Math.random() },
  };
  updatePlayers(mockData);
}, 100);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
