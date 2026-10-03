// Q48: パスに沿った移動
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

// 1. カーブ（パス）の作成
const curve = new THREE.CatmullRomCurve3(
  [
    new THREE.Vector3(-5, 0, 5),
    new THREE.Vector3(-5, 5, -5),
    new THREE.Vector3(5, 0, -5),
    new THREE.Vector3(5, -5, 5),
  ],
  true
); // true = 閉じたループ

// パスの可視化（線を描画）
const points = curve.getPoints(50);
const geometry = new THREE.BufferGeometry().setFromPoints(points);
const material = new THREE.LineBasicMaterial({ color: 0xffffff });
const curveObject = new THREE.Line(geometry, material);
scene.add(curveObject);

// 2. 移動する物体
const sphere = new THREE.Mesh(
  new THREE.SphereGeometry(0.5),
  new THREE.MeshBasicMaterial({ color: 0xff0000 })
);
scene.add(sphere);

let progress = 0;

camera.position.set(0, 10, 15);
camera.lookAt(0, 0, 0);

function animate() {
  requestAnimationFrame(animate);

  // 0から1の間をループさせる
  progress += 0.002;
  if (progress > 1) progress = 0;

  // 3. パス上の位置を取得して適用
  const position = curve.getPoint(progress);
  sphere.position.copy(position);

  renderer.render(scene, camera);
}
animate();
