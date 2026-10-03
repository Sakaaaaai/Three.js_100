// Q20: グループ化して複数オブジェクトを管理
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

// 太陽（中央）
const sunGeo = new THREE.SphereGeometry(1, 32, 16);
const sunMat = new THREE.MeshBasicMaterial({
  color: 0xff0000,
  wireframe: true,
});
const sun = new THREE.Mesh(sunGeo, sunMat);
scene.add(sun);

// --- ここでグループと地球を作成してください ---

camera.position.z = 10;

function animate() {
  requestAnimationFrame(animate);

  // --- ここでグループを回転させてください ---

  renderer.render(scene, camera);
}
animate();
