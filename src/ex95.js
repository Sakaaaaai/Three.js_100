// Q95: 3D グラフ（曲面プロット）
// ここに実装してください（詰まったら画面右上のパネルで模範解答を表示）

import * as THREE from "three";
// import { ParametricGeometry } ...

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

// 関数定義
const graphFunc = (u, v, target) => {
  // u, v (0~1) -> x, z (-10~10)
  const x = (u - 0.5) * 20;
  const z = (v - 0.5) * 20;
  const y = Math.sin(x) * Math.cos(z); // 高さ

  target.set(x, y, z);
};

// --- ここでジオメトリ作成 ---

camera.position.set(0, 10, 20);
camera.lookAt(0, 0, 0);

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
