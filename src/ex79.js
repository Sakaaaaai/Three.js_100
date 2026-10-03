// Q79: レンズフレア（Lensflare）
// ここに実装してください（詰まったら画面右上のパネルで模範解答を表示）

import * as THREE from "three";
// import { Lensflare, LensflareElement } ...

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

const light = new THREE.PointLight(0xffffff, 1.5, 2000);
light.position.set(0, 0, -10);
scene.add(light);

// --- ここでレンズフレアを追加 ---
// const textureLoader = new THREE.TextureLoader();
// const texture0 = textureLoader.load('...');
// const lensflare = new Lensflare();
// lensflare.addElement(new LensflareElement(texture0, 500, 0));
// light.add(lensflare);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);

  // ライトを動かす
  light.position.x = Math.sin(Date.now() * 0.001) * 10;

  renderer.render(scene, camera);
}
animate();
