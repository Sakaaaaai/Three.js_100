// Q58: ホログラム効果（走査線）
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
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec3 vViewPosition;
    void main() {
        vNormal = normalize(normalMatrix * normal);
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        vViewPosition = -mvPosition.xyz;
        vPosition = position; // ローカル座標
        gl_Position = projectionMatrix * mvPosition;
    }
`;

const fShader = `
    uniform float uTime;
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec3 vViewPosition;
    
    void main() {
        // フレネル
        float dotProduct = dot(normalize(vNormal), normalize(vViewPosition));
        float fresnel = pow(1.0 - dotProduct, 3.0);
        
        // --- ここで走査線を作成 ---
        
        gl_FragColor = vec4(0.0, 1.0, 1.0, 1.0);
    }
`;

const material = new THREE.ShaderMaterial({
  vertexShader: vShader,
  fragmentShader: fShader,
  uniforms: { uTime: { value: 0 } },
  transparent: true,
  blending: THREE.AdditiveBlending,
  side: THREE.DoubleSide,
});

const mesh = new THREE.Mesh(new THREE.CylinderGeometry(1, 1, 3, 32), material);
scene.add(mesh);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);
  material.uniforms.uTime.value += 0.1;
  mesh.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();
