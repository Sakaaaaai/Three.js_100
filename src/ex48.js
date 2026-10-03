// Q48: パスに沿った移動
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

// --- ここでカーブを作成 ---
// const curve = new THREE.CatmullRomCurve3([ ... ]);

// 移動する物体
const sphere = new THREE.Mesh(
  new THREE.SphereGeometry(0.2),
  new THREE.MeshBasicMaterial({ color: 0xff0000 })
);
scene.add(sphere);

let progress = 0;

camera.position.z = 10;
camera.position.y = 5;
camera.lookAt(0, 0, 0);

function animate() {
  requestAnimationFrame(animate);

  // --- ここでprogressを増やし、sphereの位置を更新 ---

  renderer.render(scene, camera);
}
animate();
