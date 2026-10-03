// Q42: 頂点カラーの設定
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

const geometry = new THREE.BufferGeometry();

// 頂点座標
const vertices = new Float32Array([
  -2.0,
  -2.0,
  0.0, // 左下
  2.0,
  -2.0,
  0.0, // 右下
  0.0,
  2.0,
  0.0, // 上
]);
geometry.setAttribute("position", new THREE.BufferAttribute(vertices, 3));

// 頂点カラー (R, G, B)
const colors = new Float32Array([
  1.0,
  0.0,
  0.0, // 赤
  0.0,
  1.0,
  0.0, // 緑
  0.0,
  0.0,
  1.0, // 青
]);
geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

// マテリアル設定
const material = new THREE.MeshBasicMaterial({
  vertexColors: true, // これが重要
  side: THREE.DoubleSide,
});

const triangle = new THREE.Mesh(geometry, material);
scene.add(triangle);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);
  triangle.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();
