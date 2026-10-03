// Q59: ディゾルブ効果（消滅エフェクト）
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

// ノイズテクスチャを生成（画像読み込みエラー回避のため生成）
const size = 128;
const data = new Uint8Array(size * size * 4);
for (let i = 0; i < size * size * 4; i += 4) {
  const val = Math.floor(Math.random() * 255);
  data[i] = val; // R
  data[i + 1] = val; // G
  data[i + 2] = val; // B
  data[i + 3] = 255; // A
}
const noiseTexture = new THREE.DataTexture(data, size, size, THREE.RGBAFormat);
noiseTexture.needsUpdate = true;

const vShader = `
    varying vec2 vUv;
    void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
`;

const fShader = `
    uniform sampler2D uNoiseMap;
    uniform float uProgress;
    varying vec2 vUv;
    
    void main() {
        float noise = texture2D(uNoiseMap, vUv).r;
        
        // ノイズ値が進行度より小さければ描画しない
        if (noise < uProgress) {
            discard;
        }
        
        // 境界線（燃えているエッジ）
        // 進行度より少しだけ大きい部分をオレンジにする
        if (noise < uProgress + 0.05) {
            gl_FragColor = vec4(1.0, 0.5, 0.0, 1.0); // オレンジ
        } else {
            gl_FragColor = vec4(0.0, 0.0, 1.0, 1.0); // 青（ベース色）
        }
    }
`;

const material = new THREE.ShaderMaterial({
  vertexShader: vShader,
  fragmentShader: fShader,
  uniforms: {
    uNoiseMap: { value: noiseTexture },
    uProgress: { value: 0.0 },
  },
  side: THREE.DoubleSide,
});

const mesh = new THREE.Mesh(new THREE.PlaneGeometry(4, 4), material);
scene.add(mesh);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);

  // 0〜1の間を行ったり来たり
  material.uniforms.uProgress.value =
    (Math.sin(Date.now() * 0.001) + 1.0) * 0.5;

  renderer.render(scene, camera);
}
animate();
