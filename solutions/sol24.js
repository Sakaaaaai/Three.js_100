// Q24: Raycaster で 3D オブジェクトの選択
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

const cubes = [];
const geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);

// 10個のキューブをランダム配置
for (let i = 0; i < 10; i++) {
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  const cube = new THREE.Mesh(geometry, material);

  cube.position.x = (Math.random() - 0.5) * 10;
  cube.position.y = (Math.random() - 0.5) * 10;
  cube.position.z = (Math.random() - 0.5) * 5;

  scene.add(cube);
  cubes.push(cube);
}

camera.position.z = 10;

const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

window.addEventListener("click", (event) => {
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  raycaster.setFromCamera(mouse, camera);

  // cubes配列内のオブジェクトのみを対象に判定
  const intersects = raycaster.intersectObjects(cubes);

  if (intersects.length > 0) {
    // 1. まず全て緑に戻す
    cubes.forEach((cube) => cube.material.color.set(0x00ff00));

    // 2. 選択されたものだけ赤にする
    intersects[0].object.material.color.set(0xff0000);
  }
});

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
