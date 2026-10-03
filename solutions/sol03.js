// Q3: SphereGeometry で球体を作成
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

// 1. 球体ジオメトリを作成
// 半径1, 横分割数32, 縦分割数16
const geometry = new THREE.SphereGeometry(1, 32, 16);

// 2. 青色のワイヤーフレームマテリアルを作成
const material = new THREE.MeshBasicMaterial({
  color: 0x0000ff,
  wireframe: true,
});

// 3. メッシュを作成してシーンに追加
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

camera.position.z = 5;
renderer.render(scene, camera);
