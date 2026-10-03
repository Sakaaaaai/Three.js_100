// Q78: ボリューメトリックライト（神の光）
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

// スポットライト
const spotLight = new THREE.SpotLight(0xffffff, 10);
spotLight.position.set(0, 5, 0);
spotLight.angle = Math.PI / 6;
scene.add(spotLight);

// 床
const floor = new THREE.Mesh(
  new THREE.PlaneGeometry(10, 10),
  new THREE.MeshStandardMaterial({ color: 0x444444 })
);
floor.rotation.x = -Math.PI / 2;
scene.add(floor);

// --- ここで光の筋（コーン）を作成 ---
// const geometry = new THREE.ConeGeometry(...);
// const material = new THREE.ShaderMaterial(...);

camera.position.set(0, 2, 8);
camera.lookAt(0, 2, 0);

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
