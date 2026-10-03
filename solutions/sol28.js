// Q28: カメラの移動アニメーション
// 模範解答

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

  // 角度を少しずつ増やす
  angle += 0.01;

  // 円運動の計算
  camera.position.x = radius * Math.sin(angle);
  camera.position.z = radius * Math.cos(angle);
  camera.position.y = 2; // 少し高い位置から

  // 常に原点（キューブの位置）を見る
  camera.lookAt(0, 0, 0);

  renderer.render(scene, camera);
}
animate();
