// Q38: スカイボックスの実装
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
const path = "https://threejs.org/examples/textures/cube/Bridge2/";
const urls = [
  "posx.jpg",
  "negx.jpg",
  "posy.jpg",
  "negy.jpg",
  "posz.jpg",
  "negz.jpg",
];

const materials = urls.map((url) => {
  return new THREE.MeshBasicMaterial({
    map: loader.load(path + url),
    side: THREE.BackSide, // 内側を描画
  });
});

const geometry = new THREE.BoxGeometry(500, 500, 500);
const skybox = new THREE.Mesh(geometry, materials);
scene.add(skybox);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);

  // カメラを回転させて全天球を確認
  camera.rotation.y += 0.002;

  renderer.render(scene, camera);
}
animate();
