// Q19: CylinderGeometry で円柱
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

// 1. CylinderGeometryの作成
// 上面0.5, 底面1, 高さ2, 分割数32
const geometry = new THREE.CylinderGeometry(0.5, 1, 2, 32);
const material = new THREE.MeshBasicMaterial({
  color: 0xffff00,
  wireframe: true,
});
const cylinder = new THREE.Mesh(geometry, material);
scene.add(cylinder);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);

  cylinder.rotation.x += 0.01;
  cylinder.rotation.z += 0.01;

  renderer.render(scene, camera);
}
animate();
