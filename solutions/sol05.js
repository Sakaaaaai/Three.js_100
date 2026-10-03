// Q5: オブジェクトの位置を変更
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

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

// 位置の変更
// X軸プラス方向（右）へ2
cube.position.x = 2;
// Y軸プラス方向（上）へ1.5
cube.position.y = 1.5;

// 別解: setメソッド
// cube.position.set(2, 1.5, 0);

renderer.render(scene, camera);
