// Q45: LOD（Level of Detail）の実装
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

const lod = new THREE.LOD();

// --- ここで3段階のメッシュを作成し、lodに追加 ---
// lod.addLevel(meshHigh, 0);
// lod.addLevel(meshMed, 10);
// lod.addLevel(meshLow, 20);

scene.add(lod);

camera.position.z = 30;

function animate() {
  requestAnimationFrame(animate);

  // カメラを近づけたり遠ざけたりする
  camera.position.z = 15 + Math.sin(Date.now() * 0.001) * 10;

  renderer.render(scene, camera);
}
animate();
