// Q25: アニメーションカーブ（Tween.js 風）
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

// クリック判定用の透明な床
const plane = new THREE.Mesh(
  new THREE.PlaneGeometry(20, 20),
  new THREE.MeshBasicMaterial({ visible: false })
);
scene.add(plane);

const cube = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0x00ff00 })
);
scene.add(cube);

camera.position.z = 10;

const targetPosition = new THREE.Vector3(0, 0, 0);
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

window.addEventListener("click", (event) => {
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObject(plane);

  if (intersects.length > 0) {
    // クリックした3D座標を目標にする
    targetPosition.copy(intersects[0].point);
    // Z軸は固定したい場合（床の上を滑るなら）
    targetPosition.z = 0;
  }
});

function animate() {
  requestAnimationFrame(animate);

  // 現在位置から目標位置へ、毎フレーム5%ずつ近づく
  // これにより、最初は速く、近づくと遅くなる滑らかな動きになる
  cube.position.lerp(targetPosition, 0.05);

  renderer.render(scene, camera);
}
animate();
