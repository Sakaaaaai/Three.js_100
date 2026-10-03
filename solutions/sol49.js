// Q49: カメラパスアニメーション（ジェットコースター）
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

// 参照物（これがないと動いているか分からない）
const gridHelper = new THREE.GridHelper(100, 100);
scene.add(gridHelper);

// ランダムな箱を配置
for (let i = 0; i < 50; i++) {
  const mesh = new THREE.Mesh(
    new THREE.BoxGeometry(2, 2, 2),
    new THREE.MeshNormalMaterial()
  );
  mesh.position.set(
    (Math.random() - 0.5) * 80,
    (Math.random() - 0.5) * 20 + 10,
    (Math.random() - 0.5) * 80
  );
  scene.add(mesh);
}

// コース作成
const curve = new THREE.CatmullRomCurve3(
  [
    new THREE.Vector3(0, 5, 20),
    new THREE.Vector3(20, 10, 0),
    new THREE.Vector3(0, 20, -20),
    new THREE.Vector3(-20, 5, 0),
  ],
  true
);

// コースの可視化
const points = curve.getPoints(100);
const line = new THREE.Line(
  new THREE.BufferGeometry().setFromPoints(points),
  new THREE.LineBasicMaterial({ color: 0xffff00 })
);
scene.add(line);

let progress = 0;

function animate() {
  requestAnimationFrame(animate);

  progress += 0.001;
  if (progress > 1) progress = 0;

  // 1. 現在位置にカメラを置く
  const currentPos = curve.getPoint(progress);
  camera.position.copy(currentPos);

  // 2. 少し先を見る（進行方向を向く）
  const lookAtPos = curve.getPoint((progress + 0.01) % 1);
  camera.lookAt(lookAtPos);

  renderer.render(scene, camera);
}
animate();
