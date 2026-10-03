// Q9: 自動回転するキューブ
// ここに実装してください（詰まったら画面右上のパネルで模範解答を表示）

// ...演習8のコード...

function animate() {
  requestAnimationFrame(animate);

  // --- ここでキューブを回転させてください ---

  // --- ここまで ---

  renderer.render(scene, camera);
}
animate();
