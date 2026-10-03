// Q69: トゥーンシェーディング（ToonMaterial）
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

const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(1, 1, 1);
scene.add(light);

// --- ここでグラデーションマップを作成 ---
// const texture = ...
// texture.minFilter = THREE.NearestFilter;
// texture.magFilter = THREE.NearestFilter;

// --- ToonMaterial作成 ---
// const material = new THREE.MeshToonMaterial({ gradientMap: texture, color: ... });

// --- ここでメッシュを作成して追加（material が必要） ---
// const mesh = new THREE.Mesh(
//   new THREE.TorusKnotGeometry(1, 0.3, 100, 16),
//   material
// );
// scene.add(mesh);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);
  // mesh.rotation.x += 0.01;
  // mesh.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();
