// Q32: バンプマップの適用
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
// 石壁のバンプマップ例
const bumpTexture = loader.load(
  "https://threejs.org/examples/textures/brick_bump.jpg"
);

const geometry = new THREE.BoxGeometry(2, 2, 2);
const material = new THREE.MeshStandardMaterial({
  color: 0xaaaaaa,
  bumpMap: bumpTexture, // バンプマップ設定
  bumpScale: 4, // 凹凸の深さ（かなり強調）
});

const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// ライトがないと凹凸が見えない
// 横から光を当てると凹凸が際立つ
const light = new THREE.DirectionalLight(0xffffff, 1.5);
light.position.set(1, 1, 1);
scene.add(light);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.005;
  cube.rotation.y += 0.005;

  renderer.render(scene, camera);
}
animate();
