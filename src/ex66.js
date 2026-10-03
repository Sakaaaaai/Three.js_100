// Q66: 被写界深度（DOF: Depth of Field）
// ここに実装してください（詰まったら画面右上のパネルで模範解答を表示）

import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
// import { BokehPass } ...

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

// キューブを散らす
for (let i = 0; i < 100; i++) {
  const mesh = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshNormalMaterial()
  );
  mesh.position.set(
    (Math.random() - 0.5) * 20,
    (Math.random() - 0.5) * 20,
    (Math.random() - 0.5) * 20 - 10
  );
  scene.add(mesh);
}

// --- ComposerとBokehPass ---

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);
  // composer.render();
}
animate();
