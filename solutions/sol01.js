// Q1: Three.js の基本：シーン、カメラ、レンダラーの初期設定
// 模範解答

import * as THREE from "three";

// STEP 1: シーンを作成
// オブジェクトやライトを配置するコンテナ
const scene = new THREE.Scene();

// STEP 2: カメラを作成
// PerspectiveCamera(視野角, アスペクト比, 近クリップ面, 遠クリップ面)
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

// カメラ位置の調整（今回は何もないので必須ではないが、習慣として）
camera.position.z = 5;

// STEP 3: レンダラーを作成
const renderer = new THREE.WebGLRenderer();

// レンダラーのサイズをウィンドウサイズに合わせる
renderer.setSize(window.innerWidth, window.innerHeight);

// STEP 4: レンダラーをDOMに追加
// これによりHTMLに<canvas>要素が挿入される
document.body.appendChild(renderer.domElement);

// STEP 5: 描画を実行
// シーンをカメラの視点からレンダリングする
renderer.render(scene, camera);
