// Q91: 物理演算の統合（Cannon.js / Ammo.js）
// ここに実装してください（詰まったら画面右上のパネルで模範解答を表示）

import * as THREE from "three";
// import * as CANNON from '...';

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

// 物理ワールド
// const world = new CANNON.World();
// world.gravity.set(0, -9.82, 0);

// 地面（Three.js）
const floorMesh = new THREE.Mesh(
  new THREE.PlaneGeometry(10, 10),
  new THREE.MeshNormalMaterial()
);
floorMesh.rotation.x = -Math.PI / 2;
scene.add(floorMesh);

// 地面（Physics）
// const floorBody = new CANNON.Body({ mass: 0, shape: new CANNON.Plane() });
// floorBody.quaternion.setFromEuler(-Math.PI / 2, 0, 0);
// world.addBody(floorBody);

// 箱（Three.js & Physics）
// ...

camera.position.set(0, 5, 10);
camera.lookAt(0, 0, 0);

function animate() {
  requestAnimationFrame(animate);

  // world.step(1 / 60);
  // mesh.position.copy(body.position);
  // mesh.quaternion.copy(body.quaternion);

  renderer.render(scene, camera);
}
animate();
