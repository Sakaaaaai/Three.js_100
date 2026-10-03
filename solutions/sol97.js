// Q97: AR 体験の基礎（WebXR AR）
// 模範解答

import * as THREE from "three";
import { ARButton } from "three/examples/jsm/webxr/ARButton";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  70,
  window.innerWidth / window.innerHeight,
  0.01,
  20
);

// ARでは背景を透明にする必要がある
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.xr.enabled = true;
document.body.appendChild(renderer.domElement);

// ARボタン
document.body.appendChild(ARButton.createButton(renderer));

// 小さめのキューブ
const geometry = new THREE.BoxGeometry(0.1, 0.1, 0.1);
const material = new THREE.MeshNormalMaterial();
const cube = new THREE.Mesh(geometry, material);
cube.position.set(0, 0, -0.3); // カメラの30cm前
scene.add(cube);

// ライト（MeshStandardMaterialなどを使う場合）
const light = new THREE.HemisphereLight(0xffffff, 0xbbbbff, 1);
scene.add(light);

renderer.setAnimationLoop(function () {
  cube.rotation.z += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
});
