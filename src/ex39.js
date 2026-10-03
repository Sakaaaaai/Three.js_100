// Q39: CanvasTexture（動的なテクスチャ）
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

// 1. Canvasの作成と描画
const canvas = document.createElement("canvas");
canvas.width = 256;
canvas.height = 256;
const ctx = canvas.getContext("2d");

// --- ここでCanvasに背景と文字を描画してください ---

// 2. テクスチャの作成
// const texture = new THREE.CanvasTexture(canvas);

// 3. マテリアルとメッシュの作成
// --- ここでキューブを作成してシーンに追加 ---

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
