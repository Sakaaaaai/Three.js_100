// Q67: モーションブラー（残像）
// ここに実装してください（詰まったら画面右上のパネルで模範解答を表示）

import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
// import { AfterimagePass } ...

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

const cube = new THREE.Mesh(
  new THREE.BoxGeometry(2, 2, 2),
  new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
);
scene.add(cube);

// --- ComposerとAfterimagePass ---

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);

  // 高速回転
  cube.rotation.x += 0.1;
  cube.rotation.y += 0.1;

  // composer.render();
}
animate();
