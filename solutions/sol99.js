// Q99: パフォーマンス最適化（マージと破棄）
// 模範解答

import * as THREE from "three";
import * as BufferGeometryUtils from "three/examples/jsm/utils/BufferGeometryUtils";

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

const geometries = [];
const count = 5000;

for (let i = 0; i < count; i++) {
  const geometry = new THREE.BoxGeometry(0.1, 0.1, 0.1);

  // ランダムな位置に配置（ジオメトリ自体を移動させる）
  const x = (Math.random() - 0.5) * 10;
  const y = (Math.random() - 0.5) * 10;
  const z = (Math.random() - 0.5) * 10;

  geometry.translate(x, y, z);
  geometries.push(geometry);
}

// マージ（結合）
const mergedGeometry = BufferGeometryUtils.mergeGeometries(geometries);
const material = new THREE.MeshNormalMaterial();
const mesh = new THREE.Mesh(mergedGeometry, material);
scene.add(mesh);

// 削除ボタン
const btn = document.createElement("button");
btn.innerText = "Dispose (Clean up)";
btn.style.position = "absolute";
btn.style.top = "10px";
btn.style.left = "10px";
document.body.appendChild(btn);

btn.addEventListener("click", () => {
  scene.remove(mesh);
  // メモリ解放（重要）
  mergedGeometry.dispose();
  material.dispose();
  console.log("Disposed!");
});

camera.position.z = 15;

function animate() {
  requestAnimationFrame(animate);

  if (mesh.parent) {
    // シーンに存在する場合のみ
    mesh.rotation.y += 0.002;
  }

  renderer.render(scene, camera);
}
animate();
