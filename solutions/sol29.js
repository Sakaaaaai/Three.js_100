// Q29: 平行投影カメラ（OrthographicCamera）
// 模範解答

import * as THREE from "three";

const scene = new THREE.Scene();

// 1. 平行投影カメラの作成
const aspect = window.innerWidth / window.innerHeight;
const d = 5; // 表示範囲の広さ（ズーム倍率のようなもの）

// left, right, top, bottom, near, far
const camera = new THREE.OrthographicCamera(
  -d * aspect, // left
  d * aspect, // right
  d, // top
  -d, // bottom
  1, // near
  1000 // far
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 2. キューブを並べる
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({
  color: 0x00ff00,
  wireframe: true,
});

for (let i = 0; i < 5; i++) {
  const cube = new THREE.Mesh(geometry, material);
  cube.position.z = -i * 2; // 奥へ配置
  cube.position.x = i * 0.5;
  scene.add(cube);
}

// グリッド
const gridHelper = new THREE.GridHelper(20, 20);
scene.add(gridHelper);

// 3. カメラ位置設定（アイソメトリック視点）
camera.position.set(5, 5, 5);
camera.lookAt(0, 0, 0);

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
