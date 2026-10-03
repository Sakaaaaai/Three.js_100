// Q29: 平行投影カメラ（OrthographicCamera）
// ここに実装してください（詰まったら画面右上のパネルで模範解答を表示）

import * as THREE from "three";

const scene = new THREE.Scene();

// --- ここでOrthographicCameraを作成してください ---
// const aspect = window.innerWidth / window.innerHeight;
// const d = 5;
// const camera = ...

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// キューブを並べる
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({
  color: 0x00ff00,
  wireframe: true,
});

for (let i = 0; i < 5; i++) {
  const cube = new THREE.Mesh(geometry, material);
  cube.position.z = -i * 2; // 奥へ
  cube.position.x = i * 0.5; // 少しずらす
  scene.add(cube);
}

// グリッド
const gridHelper = new THREE.GridHelper(20, 20);
scene.add(gridHelper);

// カメラ位置設定
camera.position.set(5, 5, 5);
camera.lookAt(0, 0, 0);

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
