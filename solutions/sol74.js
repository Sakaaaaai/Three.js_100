// Q74: 環境マップによる屈折（Refraction Mapping）
// 模範解答

import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

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

const controls = new OrbitControls(camera, renderer.domElement);

const loader = new THREE.TextureLoader();
// パノラマ画像を読み込む
loader.load(
  "https://threejs.org/examples/textures/2294472375_24a3b8ef46_o.jpg",
  (texture) => {
    // 屈折マッピングに設定（重要）
    texture.mapping = THREE.EquirectangularRefractionMapping;

    scene.background = texture;

    // 屈折マテリアル
    const material = new THREE.MeshBasicMaterial({
      envMap: texture,
      refractionRatio: 0.98, // 屈折率（1.0で変化なし、小さくすると歪む）
    });

    const sphere = new THREE.Mesh(
      new THREE.SphereGeometry(2, 64, 64),
      material
    );
    scene.add(sphere);
  }
);

camera.position.z = 6;

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}
animate();
