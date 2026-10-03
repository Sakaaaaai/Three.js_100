// Q31: 環境マッピング
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

// 1. 環境マップの読み込み
const loader = new THREE.CubeTextureLoader();
loader.setPath("https://threejs.org/examples/textures/cube/Bridge2/");

const textureCube = loader.load([
  "posx.jpg",
  "negx.jpg",
  "posy.jpg",
  "negy.jpg",
  "posz.jpg",
  "negz.jpg",
]);

// 2. 背景に設定
scene.background = textureCube;

// 3. マテリアルへの適用
const geometry = new THREE.SphereGeometry(1, 32, 16);
const material = new THREE.MeshStandardMaterial({
  color: 0xffffff,
  envMap: textureCube, // 映り込み用テクスチャ
  roughness: 0.0, // ツルツル
  metalness: 1.0, // 金属
});

const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

// ライトも必要
const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(ambientLight);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);
  sphere.rotation.y += 0.005;
  renderer.render(scene, camera);
}
animate();
