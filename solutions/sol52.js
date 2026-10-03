// Q52: 頂点シェーダーで波打つ平面
// 模範解答

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
        // X座標に応じてサイン波でZを揺らす
        pos.z = sin(pos.x * 2.0 + uTime) * 0.5;
        
        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
`;

const fShader = `
    void main() {
        gl_FragColor = vec4(0.0, 0.8, 1.0, 1.0); // 水色
    }
`;

const uniforms = {
  uTime: { value: 0.0 },
};

const material = new THREE.ShaderMaterial({
  vertexShader: vShader,
  fragmentShader: fShader,
  uniforms: uniforms,
  wireframe: true,
  side: THREE.DoubleSide,
});

const plane = new THREE.Mesh(new THREE.PlaneGeometry(5, 5, 32, 32), material);
plane.rotation.x = 0.5; // 見やすいように傾ける
scene.add(plane);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);

  // 時間を更新
  material.uniforms.uTime.value += 0.05;

  renderer.render(scene, camera);
}
animate();
