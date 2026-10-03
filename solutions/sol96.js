// Q96: HTML 要素との連携（CSS2DRenderer）
// 模範解答

import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import {
  CSS2DRenderer,
  CSS2DObject,
} from "three/examples/jsm/renderers/CSS2DRenderer";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

// WebGLレンダラー
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// CSS2Dレンダラー
const labelRenderer = new CSS2DRenderer();
labelRenderer.setSize(window.innerWidth, window.innerHeight);
labelRenderer.domElement.style.position = "absolute";
labelRenderer.domElement.style.top = "0px";
// マウスイベントを通過させる（必要に応じて）
// labelRenderer.domElement.style.pointerEvents = 'none';
document.body.appendChild(labelRenderer.domElement);

// コントロール（CSSレンダラーの上に重ねる場合、こちらにイベントを貼るか工夫が必要）
// 今回はOrbitControlsをlabelRendererの要素に適用すると操作しやすい
const controls = new OrbitControls(camera, labelRenderer.domElement);

const geometry = new THREE.SphereGeometry(1, 32, 32);
const material = new THREE.MeshNormalMaterial();
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

// ラベル作成
const div = document.createElement("div");
div.className = "label";
div.textContent = "Sphere Object";
div.style.color = "white";
div.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
div.style.padding = "5px";
div.style.borderRadius = "5px";
div.style.marginTop = "-1em"; // 位置調整

const label = new CSS2DObject(div);
label.position.set(0, 1.2, 0); // 球体の少し上
sphere.add(label);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);
  controls.update();

  renderer.render(scene, camera);
  labelRenderer.render(scene, camera);
}
animate();
