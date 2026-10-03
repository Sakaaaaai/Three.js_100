// Q96: HTML 要素との連携（CSS2DRenderer）
// ここに実装してください（詰まったら画面右上のパネルで模範解答を表示）

import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
// import { CSS2DRenderer, CSS2DObject } ...

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

// --- ここでCSS2DRendererを作成 ---
// const labelRenderer = ...

const controls = new OrbitControls(camera, renderer.domElement);
// controlsはlabelRendererのdomElementに設定する必要がある場合もあります

const geometry = new THREE.SphereGeometry(1, 32, 32);
const material = new THREE.MeshNormalMaterial();
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

// --- ここでラベル作成 ---
// const div = document.createElement('div');
// div.textContent = 'Earth';
// const label = new CSS2DObject(div);
// sphere.add(label);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
  // labelRenderer.render(scene, camera);
}
animate();
