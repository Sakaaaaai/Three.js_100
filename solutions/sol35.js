// Q35: GLTF モデルの読み込み
// 模範解答

import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment";

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

// 金属質のマテリアルは環境マップがないと真っ黒になる
scene.environment = new THREE.PMREMGenerator(renderer)
  .fromScene(new RoomEnvironment(), 0.04).texture;

// ライトがないと暗くて見えないことが多い
const ambientLight = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
directionalLight.position.set(5, 5, 5);
scene.add(directionalLight);

// GLTFLoaderの作成
const loader = new GLTFLoader();

// モデルのロード
loader.load(
  "https://threejs.org/examples/models/gltf/DamagedHelmet/glTF/DamagedHelmet.gltf",
  (gltf) => {
    // ロード完了時の処理
    const model = gltf.scene;

    // サイズ調整（モデルによっては巨大だったり極小だったりする）
    model.scale.set(1.5, 1.5, 1.5);

    scene.add(model);
  },
  undefined, // 進捗コールバック（省略可）
  (error) => {
    console.error("An error happened", error);
  }
);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
