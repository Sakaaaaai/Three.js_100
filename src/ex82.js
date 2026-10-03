// Q82: 3D 製品ビューアー（コンフィギュレーター）
// ここに実装してください（詰まったら画面右上のパネルで模範解答を表示）

import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

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

const controls = new OrbitControls(camera, renderer.domElement);

// 製品モデル（椅子など）
const seat = new THREE.Mesh(
  new THREE.BoxGeometry(1, 0.1, 1),
  new THREE.MeshStandardMaterial({ color: 0xffffff })
);
scene.add(seat);

// HTMLボタン作成
const btn = document.createElement("button");
btn.innerText = "Red";
btn.style.position = "absolute";
btn.style.top = "10px";
btn.style.left = "10px";
document.body.appendChild(btn);

btn.addEventListener("click", () => {
  // --- 色変更とカメラ移動 ---
});

camera.position.set(2, 2, 2);

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}
animate();
