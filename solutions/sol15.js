// Q15: テクスチャの読み込み
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

// 1. TextureLoaderの作成
const loader = new THREE.TextureLoader();

// 2. 画像の読み込み
// 戻り値としてテクスチャオブジェクトが即座に返されます（中身はロード後に更新）
const texture = loader.load("https://threejs.org/examples/textures/crate.gif");

// 3. マテリアルへの適用
// mapプロパティにテクスチャを指定します
const geometry = new THREE.PlaneGeometry(2, 2);
const material = new THREE.MeshBasicMaterial({ map: texture });
const plane = new THREE.Mesh(geometry, material);
scene.add(plane);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
