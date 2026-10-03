// Q60: 水面シェーダー（簡易版）
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
    varying float vElevation;
    void main() {
        vec3 pos = position;
        // 複雑な波を作る
        float wave1 = sin(pos.x * 2.0 + uTime);
        float wave2 = sin(pos.y * 1.5 + uTime * 0.5);
        
        pos.z = (wave1 + wave2) * 0.2;
        vElevation = pos.z;
        
        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
`;

const fShader = `
    varying float vElevation;
    void main() {
        // --- ここで高さに応じた色を決める ---
        
        gl_FragColor = vec4(0.0, 0.5, 1.0, 0.8);
    }
`;

const material = new THREE.ShaderMaterial({
  vertexShader: vShader,
  fragmentShader: fShader,
  uniforms: { uTime: { value: 0 } },
  transparent: true,
  side: THREE.DoubleSide,
});

const plane = new THREE.Mesh(new THREE.PlaneGeometry(5, 5, 64, 64), material);
plane.rotation.x = -Math.PI / 2; // 水平にする
scene.add(plane);

camera.position.set(0, 3, 5);
camera.lookAt(0, 0, 0);

function animate() {
  requestAnimationFrame(animate);
  material.uniforms.uTime.value += 0.05;
  renderer.render(scene, camera);
}
animate();
