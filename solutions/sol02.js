// Q2: BoxGeometry で立方体を表示
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

// 1. ジオメトリ（形状）を作成
// BoxGeometry(幅, 高さ, 奥行き)
const geometry = new THREE.BoxGeometry(1, 1, 1);

// 2. マテリアル（材質）を作成
// 色は16進数で指定 (緑: 0x00ff00)
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

// 3. メッシュ（物体）を作成
const cube = new THREE.Mesh(geometry, material);

// 4. シーンに追加
scene.add(cube);

// 5. カメラの位置を調整
// 手前（Zプラス方向）に5移動
camera.position.z = 5;

renderer.render(scene, camera);
