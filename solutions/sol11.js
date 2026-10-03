// Q11: 複数のオブジェクトを配置
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

// 1. 緑のキューブ
const boxGeo = new THREE.BoxGeometry(1, 1, 1);
const boxMat = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(boxGeo, boxMat);
cube.position.x = -2; // 左へ
scene.add(cube);

// 2. 青い球体
const sphereGeo = new THREE.SphereGeometry(0.7, 32, 16);
const sphereMat = new THREE.MeshBasicMaterial({
  color: 0x0000ff,
  wireframe: true,
});
const sphere = new THREE.Mesh(sphereGeo, sphereMat);
sphere.position.x = 2; // 右へ
scene.add(sphere);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);

  // 両方を回転
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  sphere.rotation.x -= 0.01;
  sphere.rotation.y -= 0.01;

  renderer.render(scene, camera);
}

animate();
