// Q72: 反射プローブ（CubeCamera）
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

// 周囲の物体
const box = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshNormalMaterial()
);
box.position.set(3, 0, 0);
scene.add(box);

// --- CubeCamera設定 ---
// const cubeRenderTarget = new THREE.WebGLCubeRenderTarget(256);
// const cubeCamera = new THREE.CubeCamera(0.1, 1000, cubeRenderTarget);
// scene.add(cubeCamera);

// 鏡の球体
// const material = new THREE.MeshStandardMaterial({ envMap: cubeRenderTarget.texture, ... });

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);

  // 周囲の物体を動かす
  box.position.x = Math.sin(Date.now() * 0.001) * 3;
  box.position.z = Math.cos(Date.now() * 0.001) * 3;

  // --- ここでCubeCamera更新 ---

  renderer.render(scene, camera);
}
animate();
