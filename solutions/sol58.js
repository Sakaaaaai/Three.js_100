// Q58: ホログラム効果（走査線）
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
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec3 vViewPosition;
    void main() {
        vNormal = normalize(normalMatrix * normal);
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        vViewPosition = -mvPosition.xyz;
        vPosition = position;
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
        
        // 走査線（Y座標に基づいてサイン波を作る）
        float scanline = sin(vPosition.y * 20.0 - uTime * 5.0);
        // 0〜1の範囲にせず、-1〜1のまま使って点滅させるのもあり
        // ここでは縞模様を強調するため step関数などを使う手もあるが、シンプルに
        if(scanline < 0.0) discard; // 縞の半分を透明にする
        
        vec3 color = vec3(0.0, 1.0, 1.0); // シアン
        
        // フレネルと走査線を組み合わせる
        float alpha = fresnel + 0.5;
        
        gl_FragColor = vec4(color, alpha);
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
  material.uniforms.uTime.value += 0.05;
  mesh.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();
