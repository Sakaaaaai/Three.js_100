// Q99: パフォーマンス最適化（マージと破棄）
// ここに実装してください（詰まったら画面右上のパネルで模範解答を表示）

import * as THREE from "three";
// import * as BufferGeometryUtils ...

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

const geometries = [];
for (let i = 0; i < 5000; i++) {
  const geo = new THREE.BoxGeometry(0.1, 0.1, 0.1);
  // geo.translate(...);
  geometries.push(geo);
}

// --- ここでマージ ---
// const mergedGeo = BufferGeometryUtils.mergeGeometries(geometries);
// const mesh = new THREE.Mesh(mergedGeo, ...);
// scene.add(mesh);

// 削除処理
// mesh.geometry.dispose(); ...

camera.position.z = 10;

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
