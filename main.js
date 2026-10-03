/*
  Three.js 100 本ノック - 演習ランチャー
  ------------------------------------------------------------
  このファイルは編集しません。
  演習コードは src/exNN.js、模範解答は solutions/solNN.js です。

  URL のクエリ（またはハッシュ）で状態を持ちます。
    なし       -> 100 問の一覧（入口）
    ?q=12      -> 12 問目のスターターコード
    ?q=12&a=1  -> 12 問目の模範解答
*/
import "./launcher.css";
import exercises from "./exercises.json";

// Vite の glob import。呼び出した時点で初めて読み込まれる（遅延）。
const starters = import.meta.glob("./src/ex*.js");
const solutions = import.meta.glob("./solutions/sol*.js");

const TOTAL = exercises.length;
const pad = (n) => String(n).padStart(2, "0");
const esc = (s) =>
  String(s).replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);

function readState() {
  // StackBlitz からは ?initialpath=/?q=12 の形でクエリが渡ってくる。
  // ハッシュは手書きで切り替えたい人向けのフォールバック。
  const search = new URLSearchParams(location.search);
  const hash = new URLSearchParams(location.hash.replace(/^#/, ""));
  const get = (key) => search.get(key) ?? hash.get(key);

  const raw = get("q");
  if (raw === null || raw === "") return { no: null, answer: false };

  const parsed = Number.parseInt(raw, 10);
  const no = Number.isNaN(parsed) ? 1 : Math.min(TOTAL, Math.max(1, parsed));
  return { no, answer: get("a") === "1" };
}

// WebGL コンテキストやイベントリスナーを演習をまたいで持ち越さないよう、
// 切り替えは必ずページ遷移（リロード）で行う。
function go(no, answer) {
  location.href = answer ? `?q=${no}&a=1` : `?q=${no}`;
}

function goIndex() {
  location.href = location.pathname;
}

const state = readState();

// ---- 入口：演習一覧 ------------------------------------------------
function renderIndex() {
  document.title = `Three.js 100 本ノック`;

  const page = document.createElement("div");
  page.className = "tj-index";
  page.innerHTML = `
    <h1>Three.js 100 本ノック</h1>
    <p class="tj-lead">解きたい演習を選んでください。</p>
    <p class="tj-lead">
      コードは左のエディタで <code>src/exNN.js</code> を編集します。
      詰まったら画面右上のパネルで模範解答を表示できます。
    </p>
    <input class="tj-search" type="search"
           placeholder="番号やキーワードで絞り込み（例: 35 / シェーダー / テクスチャ）"
           autocomplete="off" />
    <div class="tj-grid">
      ${exercises
        .map(
          (e) => `
        <a class="tj-card" href="?q=${e.no}" data-title="${esc(e.title)}" data-no="${e.no}">
          <span class="tj-no">${e.no}</span>
          <span class="tj-name">${esc(e.title)}</span>
        </a>`
        )
        .join("")}
    </div>
    <p class="tj-empty" hidden>該当する演習がありません。</p>
  `;
  document.body.appendChild(page);

  const cards = [...page.querySelectorAll(".tj-card")];
  const empty = page.querySelector(".tj-empty");

  page.querySelector(".tj-search").addEventListener("input", (event) => {
    const q = event.currentTarget.value.trim().toLowerCase();
    let shown = 0;
    for (const card of cards) {
      const hit =
        !q ||
        card.dataset.no === q ||
        card.dataset.no.startsWith(q) ||
        card.dataset.title.toLowerCase().includes(q);
      card.hidden = !hit;
      if (hit) shown += 1;
    }
    empty.hidden = shown > 0;
  });
}

if (state.no === null) {
  renderIndex();
} else {
  renderExercise();
}

// ---- 演習画面 ------------------------------------------------------
function renderExercise() {
  const entry = exercises.find((e) => e.no === state.no) ?? exercises[0];
  const filePath = state.answer
    ? `solutions/sol${pad(state.no)}.js`
    : `src/ex${pad(state.no)}.js`;

  const panel = document.createElement("div");
  panel.className = "tj-launcher";
  if (localStorage.getItem("tj-collapsed") === "1") {
    panel.classList.add("is-collapsed");
  }
  panel.innerHTML = `
    <div class="tj-head">
      <button class="tj-home" type="button" title="演習一覧へ">一覧</button>
      <span class="tj-badge">Q${state.no} / ${TOTAL}</span>
      <button class="tj-toggle" type="button">${
        panel.classList.contains("is-collapsed") ? "開く" : "閉じる"
      }</button>
    </div>
    <div class="tj-body">
      <div class="tj-title">${esc(entry.title)}</div>
      <div class="tj-row">
        <button class="tj-nav" type="button" data-step="-1" ${
          state.no === 1 ? "disabled" : ""
        }>&lsaquo;</button>
        <select class="tj-select">
          ${exercises
            .map(
              (e) =>
                `<option value="${e.no}" ${
                  e.no === state.no ? "selected" : ""
                }>${e.no}. ${esc(e.title)}</option>`
            )
            .join("")}
        </select>
        <button class="tj-nav" type="button" data-step="1" ${
          state.no === TOTAL ? "disabled" : ""
        }>&rsaquo;</button>
      </div>
      <div class="tj-mode">
        <button type="button" data-answer="0" class="${
          state.answer ? "" : "is-active"
        }">スターター</button>
        <button type="button" data-answer="1" class="${
          state.answer ? "is-active" : ""
        }">模範解答</button>
      </div>
      <div class="tj-file">編集中: ${filePath}</div>
    </div>
  `;
  document.body.appendChild(panel);

  const body = panel.querySelector(".tj-body");

  panel.querySelector(".tj-home").addEventListener("click", goIndex);

  panel.querySelector(".tj-toggle").addEventListener("click", (event) => {
    const collapsed = panel.classList.toggle("is-collapsed");
    localStorage.setItem("tj-collapsed", collapsed ? "1" : "0");
    event.currentTarget.textContent = collapsed ? "開く" : "閉じる";
  });

  panel.querySelector(".tj-select").addEventListener("change", (event) => {
    go(Number(event.currentTarget.value), state.answer);
  });

  for (const nav of panel.querySelectorAll(".tj-nav")) {
    nav.addEventListener("click", () => {
      go(state.no + Number(nav.dataset.step), state.answer);
    });
  }

  for (const mode of panel.querySelectorAll(".tj-mode button")) {
    mode.addEventListener("click", () => {
      const answer = mode.dataset.answer === "1";
      if (answer !== state.answer) go(state.no, answer);
    });
  }

  function note(message, isError = false) {
    const el = document.createElement("div");
    el.className = isError ? "tj-note is-error" : "tj-note";
    el.textContent = message;
    body.appendChild(el);
    panel.classList.remove("is-collapsed");
  }

  const key = state.answer
    ? `./solutions/sol${pad(state.no)}.js`
    : `./src/ex${pad(state.no)}.js`;
  const load = state.answer ? solutions[key] : starters[key];

  (async () => {
    if (!load) {
      note(`${key} が見つかりません。`, true);
      return;
    }
    try {
      await load();
      // スターターコードがコメントだけの問題は描画結果が空になる。
      // 「壊れている」と誤解されやすいので一言添える。
      setTimeout(() => {
        if (!document.querySelector("canvas")) {
          note(`${filePath} を編集して描画してください。`);
        }
      }, 1200);
    } catch (error) {
      note(`${filePath} でエラー:\n${error?.stack ?? error}`, true);
    }
  })();
}

// アドレスバーのハッシュを直接書き換えた場合も反映する。
window.addEventListener("hashchange", () => location.reload());
