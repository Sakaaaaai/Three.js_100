// Q60: 水面シェーダー（簡易版）
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
    varying float vElevation;
    void main() {
        vec3 pos = position;
        
        // 複数の波を合成
        float elevation = sin(pos.x * 3.0 + uTime) * 0.2;
        elevation += sin(pos.y * 2.0 + uTime * 0.8) * 0.2;
        
        pos.z = elevation;
        vElevation = elevation;
        
        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
`;

const fShader = `
    varying float vElevation;
    void main() {
        vec3 deepColor = vec3(0.0, 0.2, 0.5); // 深い青
        vec3 surfaceColor = vec3(0.4, 0.8, 1.0); // 水色
        
        // 高さに応じて色を混ぜる
        // vElevationは -0.4〜0.4 くらいなので、0〜1に正規化して使う
        float mixStrength = (vElevation + 0.4) * 1.25;
        vec3 color = mix(deepColor, surfaceColor, mixStrength);
        
        gl_FragColor = vec4(color, 0.8);
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
plane.rotation.x = -Math.PI / 2;
scene.add(plane);

camera.position.set(0, 4, 4);
camera.lookAt(0, 0, 0);

function animate() {
  requestAnimationFrame(animate);
  material.uniforms.uTime.value += 0.05;
  renderer.render(scene, camera);
}
animate();
