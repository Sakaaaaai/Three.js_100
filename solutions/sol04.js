// Q4: マテリアルの色を変更
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
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 }); // 初期は緑
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

// 色の変更
// マテリアルのcolorプロパティのsetメソッドを使用
cube.material.color.set(0xff0000);

renderer.render(scene, camera);
