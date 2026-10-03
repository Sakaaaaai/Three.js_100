// Q72: 反射プローブ（CubeCamera）
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

// 背景
scene.background = new THREE.Color(0x222222);

// 周囲を回る物体
const box = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshNormalMaterial()
);
scene.add(box);

// 1. RenderTarget作成
const cubeRenderTarget = new THREE.WebGLCubeRenderTarget(256); // 解像度

// 2. CubeCamera作成
const cubeCamera = new THREE.CubeCamera(0.1, 1000, cubeRenderTarget);
scene.add(cubeCamera);

// 3. 鏡の球体
const material = new THREE.MeshStandardMaterial({
  envMap: cubeRenderTarget.texture,
  roughness: 0,
  metalness: 1,
});
const sphere = new THREE.Mesh(new THREE.SphereGeometry(1.5, 32, 32), material);
scene.add(sphere);

camera.position.z = 5;
camera.position.y = 2;
camera.lookAt(0, 0, 0);

function animate() {
  requestAnimationFrame(animate);

  // 周囲の物体を動かす
  const time = Date.now() * 0.001;
  box.position.x = Math.sin(time) * 3;
  box.position.z = Math.cos(time) * 3;
  box.rotation.x += 0.01;

  // 4. 反射の更新
  sphere.visible = false; // 自分自身は映らないように消す
  cubeCamera.position.copy(sphere.position); // カメラを球体の位置へ
  cubeCamera.update(renderer, scene); // 撮影
  sphere.visible = true; // 元に戻す

  renderer.render(scene, camera);
}
animate();
