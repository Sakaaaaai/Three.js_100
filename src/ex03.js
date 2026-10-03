// Q3: SphereGeometry で球体を作成
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

// --- ここから記述してください ---

// 1. 球体ジオメトリを作成

// 2. 青色のワイヤーフレームマテリアルを作成

// 3. メッシュを作成してシーンに追加

// --- ここまで ---

camera.position.z = 5;
renderer.render(scene, camera);
