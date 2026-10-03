// Q41: カスタムジオメトリの作成
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

// 2. 頂点データの作成（三角形1つ分 = 頂点3つ）
const vertices = new Float32Array([
  -1.0,
  -1.0,
  0.0, // 左下
  1.0,
  -1.0,
  0.0, // 右下
  0.0,
  1.0,
  0.0, // 上
]);

// 3. 属性として登録
geometry.setAttribute("position", new THREE.BufferAttribute(vertices, 3));

// 4. メッシュ化
const material = new THREE.MeshBasicMaterial({
  color: 0xff0000,
  side: THREE.DoubleSide,
});
const triangle = new THREE.Mesh(geometry, material);
scene.add(triangle);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);

  // 回転させて立体感を確認
  triangle.rotation.y += 0.01;

  renderer.render(scene, camera);
}
animate();
