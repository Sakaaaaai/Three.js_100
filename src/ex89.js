// Q89: サードパーソンカメラ（TPS 視点）
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

const player = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshNormalMaterial()
);
scene.add(player);

// カメラ操作用変数
let cameraAngle = 0;
let cameraHeight = 5;
let cameraDistance = 10;

// マウス移動イベント
document.addEventListener("mousemove", (e) => {
  // cameraAngle を更新
});

function animate() {
  requestAnimationFrame(animate);

  // プレイヤー移動（省略）

  // カメラ位置更新
  // camera.position.x = player.position.x + ...
  // camera.position.z = player.position.z + ...
  // camera.lookAt(player.position);

  renderer.render(scene, camera);
}
animate();
