// Q66: 被写界深度（DOF: Depth of Field）
// 模範解答

import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { BokehPass } from "three/examples/jsm/postprocessing/BokehPass";

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

for (let i = 0; i < 100; i++) {
  const mesh = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshNormalMaterial()
  );
  mesh.position.set(
    (Math.random() - 0.5) * 30,
    (Math.random() - 0.5) * 30,
    (Math.random() - 0.5) * 30
  );
  scene.add(mesh);
}

const composer = new EffectComposer(renderer);
composer.addPass(new RenderPass(scene, camera));

const bokehPass = new BokehPass(scene, camera, {
  focus: 10.0, // ピントを合わせる距離
  aperture: 0.0001, // 絞り（値が大きいほどボケやすい）
  maxblur: 0.01, // 最大ボケ量
  width: window.innerWidth,
  height: window.innerHeight,
});
composer.addPass(bokehPass);

camera.position.z = 20;

function animate() {
  requestAnimationFrame(animate);

  // マウス操作などでfocusを変えると面白い
  // bokehPass.uniforms['focus'].value = ...;

  composer.render();
}
animate();
