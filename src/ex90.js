// Q90: インベントリシステムの UI（HTML 連携）
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

// UI作成
const ui = document.createElement("div");
ui.style.position = "absolute";
ui.style.bottom = "0";
ui.style.width = "100%";
ui.style.height = "100px";
ui.style.backgroundColor = "rgba(0,0,0,0.5)";
ui.style.display = "flex";
document.body.appendChild(ui);

// アイテム配置
const items = [];
// ...

// クリックイベント
window.addEventListener("click", (e) => {
  // Raycaster判定
  // ...
  // addToInventory(object);
});

function addToInventory(obj) {
  obj.visible = false;
  const icon = document.createElement("div");
  icon.innerText = "Item";
  icon.style.color = "white";
  icon.style.margin = "10px";
  icon.onclick = () => {
    // 戻す処理
  };
  ui.appendChild(icon);
}

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
