// Q33: ノーマルマップの適用
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
// 水面のノーマルマップ
const normalTexture = loader.load(
  "https://threejs.org/examples/textures/water/Water_1_M_Normal.jpg"
);

const geometry = new THREE.PlaneGeometry(4, 4);
const material = new THREE.MeshStandardMaterial({
  color: 0x0088ff,
  normalMap: normalTexture, // ノーマルマップ設定
  roughness: 0.1,
});

const plane = new THREE.Mesh(geometry, material);
scene.add(plane);

const light = new THREE.PointLight(0xffffff, 2);
light.position.set(0, 0, 2);
scene.add(light);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);

  // ライトをぐるぐる回して、陰影の変化を確認
  const time = Date.now() * 0.001;
  light.position.x = Math.sin(time) * 3;
  light.position.y = Math.cos(time) * 3;

  renderer.render(scene, camera);
}
animate();
