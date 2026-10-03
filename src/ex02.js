// Q2: BoxGeometry で立方体を表示
// ここに実装してください（詰まったら画面右上のパネルで模範解答を表示）

import * as THREE from "three";

// シーン、カメラ、レンダラーのセットアップ
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

// 1. ジオメトリ（形状）を作成

// 2. マテリアル（材質）を作成

// 3. メッシュ（物体）を作成

// 4. シーンに追加

// 5. カメラの位置を調整

// --- ここまで ---

renderer.render(scene, camera);
