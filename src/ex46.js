// Q46: スプライトの使用
// ここに実装してください（詰まったら画面右上のパネルで模範解答を表示）

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
// const map = loader.load('...');
// const material = new THREE.SpriteMaterial({ map: map });
// const sprite = new THREE.Sprite(material);

// scene.add(sprite);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);

  // カメラを回して確認
  camera.position.x = Math.sin(Date.now() * 0.001) * 5;
  camera.position.z = Math.cos(Date.now() * 0.001) * 5;
  camera.lookAt(0, 0, 0);

  renderer.render(scene, camera);
}
animate();
