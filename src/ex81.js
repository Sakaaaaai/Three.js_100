// Q81: ドラッグ＆ドロップ操作（DragControls）
// ここに実装してください（詰まったら画面右上のパネルで模範解答を表示）

import * as THREE from "three";
// import { DragControls } ...

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

const objects = [];
const geometry = new THREE.BoxGeometry(1, 1, 1);

for (let i = 0; i < 3; i++) {
  const material = new THREE.MeshLambertMaterial({
    color: Math.random() * 0xffffff,
  });
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.x = (i - 1) * 3;
  scene.add(mesh);
  objects.push(mesh);
}

const light = new THREE.AmbientLight(0x404040);
scene.add(light);
const dirLight = new THREE.DirectionalLight(0xffffff, 1);
dirLight.position.set(5, 10, 7.5);
scene.add(dirLight);

// --- ここでDragControlsを作成 ---
// const controls = new DragControls(objects, camera, renderer.domElement);
// controls.addEventListener('dragstart', ...);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
