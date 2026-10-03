# Three.js 100 本ノック - 演習環境

Udemy 講座「Three.js 100 本ノック」の演習用リポジトリです。
**StackBlitz 上でブラウザだけで動きます。インストール作業は不要です。**

## ここを開けば 100 問すべて解けます

### https://stackblitz.com/github/Sakaaaaai/Three.js_100

## 使い方

1. 上のリンクを開きます。自動で `npm install` と `npm run dev` が走ります（初回のみ 30 秒ほど）。
2. **画面右上のパネル**のドロップダウンで、解きたい問題（1〜100）を選びます。
3. パネルに「編集中: `src/exNN.js`」と出るので、左のファイルツリーからそのファイルを開きます。
4. `src/exNN.js` を編集すると、右のプレビューに即反映されます。
5. 詰まったらパネルの「模範解答」ボタンで答えを表示できます。

> 推奨ブラウザ: Chrome / Edge（Safari は 16.4 以上）。
> 書いたコードを残したい場合は、StackBlitz 画面右上の `Fork` を押してください（無料アカウントで可）。

## ローカルで動かす場合

```bash
git clone https://github.com/Sakaaaaai/Three.js_100.git
cd Three.js_100
npm install
npm run dev
```

## 構成

| パス | 内容 |
| --- | --- |
| `src/exNN.js` | 各問のスターターコード（ここを編集します） |
| `solutions/solNN.js` | 各問の模範解答 |
| `main.js` | 問題を切り替えるランチャー（編集不要） |
| `exercises.json` | 問題番号とタイトルの一覧 |

プレビューの URL は `?q=50`（50 問目のスターター）、`?q=50&a=1`（50 問目の模範解答）です。

## 演習一覧

問題ごとに直接開きたい場合は、以下のリンクを使ってください
（エディタのファイルとプレビューの問題番号が、その問題に合わせて開きます）。

| No. | タイトル | 直接開く |
| --- | --- | --- |
| 1 | Three.js の基本：シーン、カメラ、レンダラーの初期設定 | [開く](https://stackblitz.com/github/Sakaaaaai/Three.js_100?file=src%2Fex01.js&initialpath=%2F%3Fq%3D1) |
| 2 | BoxGeometry で立方体を表示 | [開く](https://stackblitz.com/github/Sakaaaaai/Three.js_100?file=src%2Fex02.js&initialpath=%2F%3Fq%3D2) |
| 3 | SphereGeometry で球体を作成 | [開く](https://stackblitz.com/github/Sakaaaaai/Three.js_100?file=src%2Fex03.js&initialpath=%2F%3Fq%3D3) |
| 4 | マテリアルの色を変更 | [開く](https://stackblitz.com/github/Sakaaaaai/Three.js_100?file=src%2Fex04.js&initialpath=%2F%3Fq%3D4) |
| 5 | オブジェクトの位置を変更 | [開く](https://stackblitz.com/github/Sakaaaaai/Three.js_100?file=src%2Fex05.js&initialpath=%2F%3Fq%3D5) |
| 6 | オブジェクトの回転 | [開く](https://stackblitz.com/github/Sakaaaaai/Three.js_100?file=src%2Fex06.js&initialpath=%2F%3Fq%3D6) |
| 7 | オブジェクトのスケール変更 | [開く](https://stackblitz.com/github/Sakaaaaai/Three.js_100?file=src%2Fex07.js&initialpath=%2F%3Fq%3D7) |
| 8 | アニメーションループの実装 | [開く](https://stackblitz.com/github/Sakaaaaai/Three.js_100?file=src%2Fex08.js&initialpath=%2F%3Fq%3D8) |
| 9 | 自動回転するキューブ | [開く](https://stackblitz.com/github/Sakaaaaai/Three.js_100?file=src%2Fex09.js&initialpath=%2F%3Fq%3D9) |
| 10 | OrbitControls の追加 | [開く](https://stackblitz.com/github/Sakaaaaai/Three.js_100?file=src%2Fex10.js&initialpath=%2F%3Fq%3D10) |
| 11 | 複数のオブジェクトを配置 | [開く](https://stackblitz.com/github/Sakaaaaai/Three.js_100?file=src%2Fex11.js&initialpath=%2F%3Fq%3D11) |
| 12 | ライトの追加（DirectionalLight） | [開く](https://stackblitz.com/github/Sakaaaaai/Three.js_100?file=src%2Fex12.js&initialpath=%2F%3Fq%3D12) |
| 13 | ライトの追加（SpotLight） | [開く](https://stackblitz.com/github/Sakaaaaai/Three.js_100?file=src%2Fex13.js&initialpath=%2F%3Fq%3D13) |
| 14 | 影の設定 | [開く](https://stackblitz.com/github/Sakaaaaai/Three.js_100?file=src%2Fex14.js&initialpath=%2F%3Fq%3D14) |
| 15 | テクスチャの読み込み | [開く](https://stackblitz.com/github/Sakaaaaai/Three.js_100?file=src%2Fex15.js&initialpath=%2F%3Fq%3D15) |
| 16 | テクスチャをキューブに貼り付け | [開く](https://stackblitz.com/github/Sakaaaaai/Three.js_100?file=src%2Fex16.js&initialpath=%2F%3Fq%3D16) |
| 17 | WireframeGeometry の作成 | [開く](https://stackblitz.com/github/Sakaaaaai/Three.js_100?file=src%2Fex17.js&initialpath=%2F%3Fq%3D17) |
| 18 | TorusGeometry でドーナツ型 | [開く](https://stackblitz.com/github/Sakaaaaai/Three.js_100?file=src%2Fex18.js&initialpath=%2F%3Fq%3D18) |
| 19 | CylinderGeometry で円柱 | [開く](https://stackblitz.com/github/Sakaaaaai/Three.js_100?file=src%2Fex19.js&initialpath=%2F%3Fq%3D19) |
| 20 | グループ化して複数オブジェクトを管理 | [開く](https://stackblitz.com/github/Sakaaaaai/Three.js_100?file=src%2Fex20.js&initialpath=%2F%3Fq%3D20) |
| 21 | マウスクリックでオブジェクトの色変更 | [開く](https://stackblitz.com/github/Sakaaaaai/Three.js_100?file=src%2Fex21.js&initialpath=%2F%3Fq%3D21) |
| 22 | マウスホバーで拡大 | [開く](https://stackblitz.com/github/Sakaaaaai/Three.js_100?file=src%2Fex22.js&initialpath=%2F%3Fq%3D22) |
| 23 | キーボード操作でオブジェクト移動 | [開く](https://stackblitz.com/github/Sakaaaaai/Three.js_100?file=src%2Fex23.js&initialpath=%2F%3Fq%3D23) |
| 24 | Raycaster で 3D オブジェクトの選択 | [開く](https://stackblitz.com/github/Sakaaaaai/Three.js_100?file=src%2Fex24.js&initialpath=%2F%3Fq%3D24) |
| 25 | アニメーションカーブ（Tween.js 風） | [開く](https://stackblitz.com/github/Sakaaaaai/Three.js_100?file=src%2Fex25.js&initialpath=%2F%3Fq%3D25) |
| 26 | パーティクルシステムの基礎 | [開く](https://stackblitz.com/github/Sakaaaaai/Three.js_100?file=src%2Fex26.js&initialpath=%2F%3Fq%3D26) |
| 27 | 星空の作成 | [開く](https://stackblitz.com/github/Sakaaaaai/Three.js_100?file=src%2Fex27.js&initialpath=%2F%3Fq%3D27) |
| 28 | カメラの移動アニメーション | [開く](https://stackblitz.com/github/Sakaaaaai/Three.js_100?file=src%2Fex28.js&initialpath=%2F%3Fq%3D28) |
| 29 | 平行投影カメラ（OrthographicCamera） | [開く](https://stackblitz.com/github/Sakaaaaai/Three.js_100?file=src%2Fex29.js&initialpath=%2F%3Fq%3D29) |
| 30 | フォグ（霧）の追加 | [開く](https://stackblitz.com/github/Sakaaaaai/Three.js_100?file=src%2Fex30.js&initialpath=%2F%3Fq%3D30) |
| 31 | 環境マッピング | [開く](https://stackblitz.com/github/Sakaaaaai/Three.js_100?file=src%2Fex31.js&initialpath=%2F%3Fq%3D31) |
| 32 | バンプマップの適用 | [開く](https://stackblitz.com/github/Sakaaaaai/Three.js_100?file=src%2Fex32.js&initialpath=%2F%3Fq%3D32) |
| 33 | ノーマルマップの適用 | [開く](https://stackblitz.com/github/Sakaaaaai/Three.js_100?file=src%2Fex33.js&initialpath=%2F%3Fq%3D33) |
| 34 | 複数マテリアルの使用 | [開く](https://stackblitz.com/github/Sakaaaaai/Three.js_100?file=src%2Fex34.js&initialpath=%2F%3Fq%3D34) |
| 35 | GLTF モデルの読み込み | [開く](https://stackblitz.com/github/Sakaaaaai/Three.js_100?file=src%2Fex35.js&initialpath=%2F%3Fq%3D35) |
| 36 | アニメーション付き GLTF モデル | [開く](https://stackblitz.com/github/Sakaaaaai/Three.js_100?file=src%2Fex36.js&initialpath=%2F%3Fq%3D36) |
| 37 | 地面の作成 | [開く](https://stackblitz.com/github/Sakaaaaai/Three.js_100?file=src%2Fex37.js&initialpath=%2F%3Fq%3D37) |
| 38 | スカイボックスの実装 | [開く](https://stackblitz.com/github/Sakaaaaai/Three.js_100?file=src%2Fex38.js&initialpath=%2F%3Fq%3D38) |
| 39 | CanvasTexture（動的なテクスチャ） | [開く](https://stackblitz.com/github/Sakaaaaai/Three.js_100?file=src%2Fex39.js&initialpath=%2F%3Fq%3D39) |
| 40 | 動的な Canvas テクスチャ（アニメーション） | [開く](https://stackblitz.com/github/Sakaaaaai/Three.js_100?file=src%2Fex40.js&initialpath=%2F%3Fq%3D40) |
| 41 | カスタムジオメトリの作成 | [開く](https://stackblitz.com/github/Sakaaaaai/Three.js_100?file=src%2Fex41.js&initialpath=%2F%3Fq%3D41) |
| 42 | 頂点カラーの設定 | [開く](https://stackblitz.com/github/Sakaaaaai/Three.js_100?file=src%2Fex42.js&initialpath=%2F%3Fq%3D42) |
| 43 | BufferGeometry の使用（大量のパーティクル） | [開く](https://stackblitz.com/github/Sakaaaaai/Three.js_100?file=src%2Fex43.js&initialpath=%2F%3Fq%3D43) |
| 44 | インスタンシング（大量オブジェクト） | [開く](https://stackblitz.com/github/Sakaaaaai/Three.js_100?file=src%2Fex44.js&initialpath=%2F%3Fq%3D44) |
| 45 | LOD（Level of Detail）の実装 | [開く](https://stackblitz.com/github/Sakaaaaai/Three.js_100?file=src%2Fex45.js&initialpath=%2F%3Fq%3D45) |
| 46 | スプライトの使用 | [開く](https://stackblitz.com/github/Sakaaaaai/Three.js_100?file=src%2Fex46.js&initialpath=%2F%3Fq%3D46) |
| 47 | ビルボード効果（Mesh で実装） | [開く](https://stackblitz.com/github/Sakaaaaai/Three.js_100?file=src%2Fex47.js&initialpath=%2F%3Fq%3D47) |
| 48 | パスに沿った移動 | [開く](https://stackblitz.com/github/Sakaaaaai/Three.js_100?file=src%2Fex48.js&initialpath=%2F%3Fq%3D48) |
| 49 | カメラパスアニメーション（ジェットコースター） | [開く](https://stackblitz.com/github/Sakaaaaai/Three.js_100?file=src%2Fex49.js&initialpath=%2F%3Fq%3D49) |
| 50 | ポストプロセッシングの基礎（EffectComposer） | [開く](https://stackblitz.com/github/Sakaaaaai/Three.js_100?file=src%2Fex50.js&initialpath=%2F%3Fq%3D50) |
| 51 | シンプルなカスタムシェーダー（ShaderMaterial） | [開く](https://stackblitz.com/github/Sakaaaaai/Three.js_100?file=src%2Fex51.js&initialpath=%2F%3Fq%3D51) |
| 52 | 頂点シェーダーで波打つ平面 | [開く](https://stackblitz.com/github/Sakaaaaai/Three.js_100?file=src%2Fex52.js&initialpath=%2F%3Fq%3D52) |
| 53 | フラグメントシェーダーでグラデーション | [開く](https://stackblitz.com/github/Sakaaaaai/Three.js_100?file=src%2Fex53.js&initialpath=%2F%3Fq%3D53) |
| 54 | ノイズを使ったシェーダー | [開く](https://stackblitz.com/github/Sakaaaaai/Three.js_100?file=src%2Fex54.js&initialpath=%2F%3Fq%3D54) |
| 55 | 時間変化するシェーダー（色の循環） | [開く](https://stackblitz.com/github/Sakaaaaai/Three.js_100?file=src%2Fex55.js&initialpath=%2F%3Fq%3D55) |
| 56 | フレネル効果（輪郭が光る表現） | [開く](https://stackblitz.com/github/Sakaaaaai/Three.js_100?file=src%2Fex56.js&initialpath=%2F%3Fq%3D56) |
| 57 | リムライティング（逆光表現） | [開く](https://stackblitz.com/github/Sakaaaaai/Three.js_100?file=src%2Fex57.js&initialpath=%2F%3Fq%3D57) |
| 58 | ホログラム効果（走査線） | [開く](https://stackblitz.com/github/Sakaaaaai/Three.js_100?file=src%2Fex58.js&initialpath=%2F%3Fq%3D58) |
| 59 | ディゾルブ効果（消滅エフェクト） | [開く](https://stackblitz.com/github/Sakaaaaai/Three.js_100?file=src%2Fex59.js&initialpath=%2F%3Fq%3D59) |
| 60 | 水面シェーダー（簡易版） | [開く](https://stackblitz.com/github/Sakaaaaai/Three.js_100?file=src%2Fex60.js&initialpath=%2F%3Fq%3D60) |
| 61 | 炎のエフェクト（パーティクル） | [開く](https://stackblitz.com/github/Sakaaaaai/Three.js_100?file=src%2Fex61.js&initialpath=%2F%3Fq%3D61) |
| 62 | 爆発エフェクト（全方向への拡散） | [開く](https://stackblitz.com/github/Sakaaaaai/Three.js_100?file=src%2Fex62.js&initialpath=%2F%3Fq%3D62) |
| 63 | ブルームエフェクト（発光表現） | [開く](https://stackblitz.com/github/Sakaaaaai/Three.js_100?file=src%2Fex63.js&initialpath=%2F%3Fq%3D63) |
| 64 | グリッチエフェクト（GlitchPass） | [開く](https://stackblitz.com/github/Sakaaaaai/Three.js_100?file=src%2Fex64.js&initialpath=%2F%3Fq%3D64) |
| 65 | RGB シフト（色収差） | [開く](https://stackblitz.com/github/Sakaaaaai/Three.js_100?file=src%2Fex65.js&initialpath=%2F%3Fq%3D65) |
| 66 | 被写界深度（DOF: Depth of Field） | [開く](https://stackblitz.com/github/Sakaaaaai/Three.js_100?file=src%2Fex66.js&initialpath=%2F%3Fq%3D66) |
| 67 | モーションブラー（残像） | [開く](https://stackblitz.com/github/Sakaaaaai/Three.js_100?file=src%2Fex67.js&initialpath=%2F%3Fq%3D67) |
| 68 | アウトライン効果（OutlinePass） | [開く](https://stackblitz.com/github/Sakaaaaai/Three.js_100?file=src%2Fex68.js&initialpath=%2F%3Fq%3D68) |
| 69 | トゥーンシェーディング（ToonMaterial） | [開く](https://stackblitz.com/github/Sakaaaaai/Three.js_100?file=src%2Fex69.js&initialpath=%2F%3Fq%3D69) |
| 70 | フラットシェーディング（ローポリ表現） | [開く](https://stackblitz.com/github/Sakaaaaai/Three.js_100?file=src%2Fex70.js&initialpath=%2F%3Fq%3D70) |
| 71 | PBR マテリアルの使用（物理ベースレンダリング） | [開く](https://stackblitz.com/github/Sakaaaaai/Three.js_100?file=src%2Fex71.js&initialpath=%2F%3Fq%3D71) |
| 72 | 反射プローブ（CubeCamera） | [開く](https://stackblitz.com/github/Sakaaaaai/Three.js_100?file=src%2Fex72.js&initialpath=%2F%3Fq%3D72) |
| 73 | リフレクション（Reflector） | [開く](https://stackblitz.com/github/Sakaaaaai/Three.js_100?file=src%2Fex73.js&initialpath=%2F%3Fq%3D73) |
| 74 | 環境マップによる屈折（Refraction Mapping） | [開く](https://stackblitz.com/github/Sakaaaaai/Three.js_100?file=src%2Fex74.js&initialpath=%2F%3Fq%3D74) |
| 75 | ガラスマテリアル（PhysicalMaterial） | [開く](https://stackblitz.com/github/Sakaaaaai/Three.js_100?file=src%2Fex75.js&initialpath=%2F%3Fq%3D75) |
| 76 | メタリックマテリアル（クリアコート） | [開く](https://stackblitz.com/github/Sakaaaaai/Three.js_100?file=src%2Fex76.js&initialpath=%2F%3Fq%3D76) |
| 77 | サブサーフェススキャタリング（SSS）風表現 | [開く](https://stackblitz.com/github/Sakaaaaai/Three.js_100?file=src%2Fex77.js&initialpath=%2F%3Fq%3D77) |
| 78 | ボリューメトリックライト（神の光） | [開く](https://stackblitz.com/github/Sakaaaaai/Three.js_100?file=src%2Fex78.js&initialpath=%2F%3Fq%3D78) |
| 79 | レンズフレア（Lensflare） | [開く](https://stackblitz.com/github/Sakaaaaai/Three.js_100?file=src%2Fex79.js&initialpath=%2F%3Fq%3D79) |
| 80 | パーティクルアニメーション応用（モーフィング） | [開く](https://stackblitz.com/github/Sakaaaaai/Three.js_100?file=src%2Fex80.js&initialpath=%2F%3Fq%3D80) |
| 81 | ドラッグ＆ドロップ操作（DragControls） | [開く](https://stackblitz.com/github/Sakaaaaai/Three.js_100?file=src%2Fex81.js&initialpath=%2F%3Fq%3D81) |
| 82 | 3D 製品ビューアー（コンフィギュレーター） | [開く](https://stackblitz.com/github/Sakaaaaai/Three.js_100?file=src%2Fex82.js&initialpath=%2F%3Fq%3D82) |
| 83 | 太陽系シミュレーション（階層構造） | [開く](https://stackblitz.com/github/Sakaaaaai/Three.js_100?file=src%2Fex83.js&initialpath=%2F%3Fq%3D83) |
| 84 | ミニレースゲーム（基礎） | [開く](https://stackblitz.com/github/Sakaaaaai/Three.js_100?file=src%2Fex84.js&initialpath=%2F%3Fq%3D84) |
| 85 | ジャンプゲーム（重力の実装） | [開く](https://stackblitz.com/github/Sakaaaaai/Three.js_100?file=src%2Fex85.js&initialpath=%2F%3Fq%3D85) |
| 86 | パズルゲーム（Raycaster による選択） | [開く](https://stackblitz.com/github/Sakaaaaai/Three.js_100?file=src%2Fex86.js&initialpath=%2F%3Fq%3D86) |
| 87 | シューティングゲーム（簡易版） | [開く](https://stackblitz.com/github/Sakaaaaai/Three.js_100?file=src%2Fex87.js&initialpath=%2F%3Fq%3D87) |
| 88 | キャラクター移動システム（滑らかな回転） | [開く](https://stackblitz.com/github/Sakaaaaai/Three.js_100?file=src%2Fex88.js&initialpath=%2F%3Fq%3D88) |
| 89 | サードパーソンカメラ（TPS 視点） | [開く](https://stackblitz.com/github/Sakaaaaai/Three.js_100?file=src%2Fex89.js&initialpath=%2F%3Fq%3D89) |
| 90 | インベントリシステムの UI（HTML 連携） | [開く](https://stackblitz.com/github/Sakaaaaai/Three.js_100?file=src%2Fex90.js&initialpath=%2F%3Fq%3D90) |
| 91 | 物理演算の統合（Cannon.js / Ammo.js） | [開く](https://stackblitz.com/github/Sakaaaaai/Three.js_100?file=src%2Fex91.js&initialpath=%2F%3Fq%3D91) |
| 92 | 衝突判定システム（自作） | [開く](https://stackblitz.com/github/Sakaaaaai/Three.js_100?file=src%2Fex92.js&initialpath=%2F%3Fq%3D92) |
| 93 | パーティクルベースの VFX（魔法陣） | [開く](https://stackblitz.com/github/Sakaaaaai/Three.js_100?file=src%2Fex93.js&initialpath=%2F%3Fq%3D93) |
| 94 | データビジュアライゼーション（棒グラフ） | [開く](https://stackblitz.com/github/Sakaaaaai/Three.js_100?file=src%2Fex94.js&initialpath=%2F%3Fq%3D94) |
| 95 | 3D グラフ（曲面プロット） | [開く](https://stackblitz.com/github/Sakaaaaai/Three.js_100?file=src%2Fex95.js&initialpath=%2F%3Fq%3D95) |
| 96 | HTML 要素との連携（CSS2DRenderer） | [開く](https://stackblitz.com/github/Sakaaaaai/Three.js_100?file=src%2Fex96.js&initialpath=%2F%3Fq%3D96) |
| 97 | AR 体験の基礎（WebXR AR） | [開く](https://stackblitz.com/github/Sakaaaaai/Three.js_100?file=src%2Fex97.js&initialpath=%2F%3Fq%3D97) |
| 98 | マルチプレイヤーの準備（同期の概念） | [開く](https://stackblitz.com/github/Sakaaaaai/Three.js_100?file=src%2Fex98.js&initialpath=%2F%3Fq%3D98) |
| 99 | パフォーマンス最適化（マージと破棄） | [開く](https://stackblitz.com/github/Sakaaaaai/Three.js_100?file=src%2Fex99.js&initialpath=%2F%3Fq%3D99) |
| 100 | 銀河シミュレーション（総合制作） | [開く](https://stackblitz.com/github/Sakaaaaai/Three.js_100?file=src%2Fex100.js&initialpath=%2F%3Fq%3D100) |
