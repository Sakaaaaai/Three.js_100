// Q27: 星空の作成
// 模範解答

import * as THREE from "three";

const scene = new THREE.Scene();
// 遠くまで見えるようにFarクリップ面を大きく設定
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  2000
);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BufferGeometry();
const count = 5000;
const positions = new Float32Array(count * 3);

for (let i = 0; i < count * 3; i++) {
  // -1000 〜 +1000 の広大な範囲に配置
  positions[i] = (Math.random() - 0.5) * 2000;
}

geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

const material = new THREE.PointsMaterial({
  size: 2, // 遠くにあるので少し大きめに
  color: 0xffffff,
});

const starField = new THREE.Points(geometry, material);
scene.add(starField);

function animate() {
  requestAnimationFrame(animate);

  // 宇宙の雄大さを出すために極めてゆっくり回す
  starField.rotation.y += 0.0005;

  renderer.render(scene, camera);
}
animate();
