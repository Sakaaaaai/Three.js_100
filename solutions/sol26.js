// Q26: パーティクルシステムの基礎
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

// 1. ジオメトリの作成
const geometry = new THREE.BufferGeometry();
const count = 1000;
const positions = new Float32Array(count * 3); // x, y, z で3倍の長さ

// 2. 座標のランダム生成
for (let i = 0; i < count * 3; i++) {
  positions[i] = (Math.random() - 0.5) * 20; // -10 〜 +10 の範囲
}

// 3. 属性の登録
geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

// 4. マテリアルの作成
const material = new THREE.PointsMaterial({
  size: 0.1,
  color: 0xffffff,
});

// 5. Pointsオブジェクトの作成
const particles = new THREE.Points(geometry, material);
scene.add(particles);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);

  // 全体をゆっくり回転
  particles.rotation.y += 0.002;

  renderer.render(scene, camera);
}
animate();
