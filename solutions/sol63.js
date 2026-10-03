// Q63: ブルームエフェクト（発光表現）
// 模範解答

import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass";

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

const geometry = new THREE.BoxGeometry(1, 1, 1);
// 発光させるため、Emissive（自己発光）を設定するか、BasicMaterialで明るい色にする
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// 複数配置
const cube2 = new THREE.Mesh(
  geometry,
  new THREE.MeshBasicMaterial({ color: 0xff0000 })
);
cube2.position.x = 2;
scene.add(cube2);

// Composer設定
const composer = new EffectComposer(renderer);
composer.addPass(new RenderPass(scene, camera));

// ブルームパス
// 解像度, 強度, 半径, しきい値
const bloomPass = new UnrealBloomPass(
  new THREE.Vector2(window.innerWidth, window.innerHeight),
  1.5, // strength
  0.4, // radius
  0.1 // threshold (これより明るい部分が光る)
);
composer.addPass(bloomPass);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  cube2.rotation.x -= 0.01;

  composer.render();
}
animate();
