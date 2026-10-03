// Q34: 複数マテリアルの使用
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

const geometry = new THREE.BoxGeometry(2, 2, 2);

// 6つのマテリアルを配列で用意
const materials = [
  new THREE.MeshBasicMaterial({ color: 0xff0000 }), // 右: 赤
  new THREE.MeshBasicMaterial({ color: 0x00ff00 }), // 左: 緑
  new THREE.MeshBasicMaterial({ color: 0x0000ff }), // 上: 青
  new THREE.MeshBasicMaterial({ color: 0xffff00 }), // 下: 黄
  new THREE.MeshBasicMaterial({ color: 0x00ffff }), // 前: 水色
  new THREE.MeshBasicMaterial({ color: 0xff00ff }), // 後: 紫
];

// 配列を渡すと、各面に適用される
const cube = new THREE.Mesh(geometry, materials);
scene.add(cube);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
}
animate();
