// Q37: 地面の作成
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

const loader = new THREE.TextureLoader();
const texture = loader.load(
  "https://threejs.org/examples/textures/terrain/grasslight-big.jpg"
);

// 1. テクスチャの繰り返し設定
texture.wrapS = THREE.RepeatWrapping; // 横方向の繰り返し
texture.wrapT = THREE.RepeatWrapping; // 縦方向の繰り返し
texture.repeat.set(10, 10); // 10回繰り返す

// 2. 地面の作成
const geometry = new THREE.PlaneGeometry(100, 100);
const material = new THREE.MeshBasicMaterial({ map: texture });
const ground = new THREE.Mesh(geometry, material);

// 水平にする
ground.rotation.x = -Math.PI / 2;
scene.add(ground);

camera.position.set(0, 5, 10);
camera.lookAt(0, 0, 0);

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
