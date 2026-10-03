// Q10: OrbitControls の追加
// ここに実装してください（詰まったら画面右上のパネルで模範解答を表示）

import * as THREE from "three";
// --- ここでOrbitControlsをインポート ---

// ...セットアップ...

// --- ここでControlsを作成 ---

function animate() {
  requestAnimationFrame(animate);

  // --- 必要ならupdate ---

  renderer.render(scene, camera);
}
animate();
