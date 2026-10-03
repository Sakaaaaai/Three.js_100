// Q20: グループ化して複数オブジェクトを管理
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

// 1. 太陽（中央）
const sunGeo = new THREE.SphereGeometry(1, 32, 16);
const sunMat = new THREE.MeshBasicMaterial({
  color: 0xff0000,
  wireframe: true,
});
const sun = new THREE.Mesh(sunGeo, sunMat);
scene.add(sun);

// 2. グループの作成（公転軌道の中心）
const earthGroup = new THREE.Group();
scene.add(earthGroup);

// 3. 地球の作成
const earthGeo = new THREE.SphereGeometry(0.5, 32, 16);
const earthMat = new THREE.MeshBasicMaterial({
  color: 0x0000ff,
  wireframe: true,
});
const earth = new THREE.Mesh(earthGeo, earthMat);

// 地球をグループに追加し、位置をずらす
earth.position.x = 4;
earthGroup.add(earth);

camera.position.z = 10;

function animate() {
  requestAnimationFrame(animate);

  // 太陽の自転
  sun.rotation.y += 0.005;

  // グループを回転させると、子要素である地球が原点の周りを回る（公転）
  earthGroup.rotation.y += 0.02;

  // 地球の自転
  earth.rotation.y += 0.05;

  renderer.render(scene, camera);
}
animate();
