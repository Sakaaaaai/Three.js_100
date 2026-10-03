// Q52: 頂点シェーダーで波打つ平面
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

const vShader = `
    uniform float uTime;
    void main() {
        vec3 pos = position;
        // --- ここでpos.zを操作 ---
        
        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
`;

const fShader = `
    void main() {
        gl_FragColor = vec4(0.0, 0.5, 1.0, 1.0);
    }
`;

const uniforms = {
  uTime: { value: 0.0 },
};

const material = new THREE.ShaderMaterial({
  vertexShader: vShader,
  fragmentShader: fShader,
  uniforms: uniforms,
  wireframe: true, // 動きが見やすいように
});

const plane = new THREE.Mesh(new THREE.PlaneGeometry(5, 5, 32, 32), material);
scene.add(plane);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);

  // --- ここでuTimeを更新 ---

  renderer.render(scene, camera);
}
animate();
