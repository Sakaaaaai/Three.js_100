// Q77: サブサーフェススキャタリング（SSS）風表現
// ここに実装してください（詰まったら画面右上のパネルで模範解答を表示）

import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

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

const controls = new OrbitControls(camera, renderer.domElement);

// ライト
const dirLight = new THREE.DirectionalLight(0xffffff, 3);
dirLight.position.set(0, 0, -5); // 背後から
scene.add(dirLight);
scene.add(new THREE.AmbientLight(0x404040));

// --- SSS風マテリアル ---
// const material = new THREE.MeshPhysicalMaterial({ ... });

// --- ここでメッシュを作成してシーンに追加 ---
// const mesh = new THREE.Mesh(new THREE.IcosahedronGeometry(1, 0), material);
// scene.add(mesh);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}
animate();
