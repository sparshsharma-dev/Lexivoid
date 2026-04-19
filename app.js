/* ============================================
   THE VOID BETWEEN WORDS — v4 Engine
   Cursor · Scramble · Tilt · Enhanced output
   ============================================ */

(function () {
  "use strict";

  const $ = s => document.querySelector(s);
  const $$ = s => document.querySelectorAll(s);

  /* ---- Config ---- */
  const _api = "/api/enhance";

  /* ---- State ---- */
  const state = {
    current: "landing",
    lexicon: JSON.parse(localStorage.getItem("void_lexicon") || "[]"),
    result: null,
    busy: false
  };

  /* ---- DOM ---- */
  const d = {
    cursor: $("#cursor"), aura: $("#cursor-aura"),
    nav: $("#nav"),
    input: $("#input"), cc: $("#cc"),
    btnEnter: $("#btn-enter"), btnGo: $("#btn-go"),
    btnSave: $("#btn-save"), btnAgain: $("#btn-again"),
    btnRetry: $("#btn-retry"), btnLexM: $("#btn-lex-m"),
    btnDeeper: $("#btn-deeper"), btnNewLex: $("#btn-new-lex"),
    scanLabel: $("#scan-label"), chipTray: $("#chip-tray"),
    progressFill: $("#progress-fill"),
    wWord: $("#w-word"), wIpa: $("#w-ipa"),
    wDef: $("#w-def"), wEty: $("#w-ety"), wRoots: $("#w-roots"),
    mWord: $("#m-word"), mIpa: $("#m-ipa"), mLang: $("#m-lang"), mDef: $("#m-def"),
    aWord: $("#a-word"), aExplain: $("#a-explain"),
    lexGrid: $("#lex-grid"), lexEmpty: $("#lex-empty"),
    lexSearch: $("#lex-search"), ctW: $("#ct-w"), ctL: $("#ct-l"),
  };

  const secs = {};
  $$(".s").forEach(s => { secs[s.dataset.s] = s; });

  /* ============================================
     AI: Check if word exists + enhance output
     ============================================ */
  async function aiCall(messages) {
    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 12000);
      const res = await fetch(_api, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "mistral-small-latest",
          messages,
          temperature: 0.5,
          max_tokens: 400,
          response_format: { type: "json_object" }
        }),
        signal: controller.signal
      });
      clearTimeout(timeout);
      if (!res.ok) throw new Error(res.status);
      const data = await res.json();
      return JSON.parse(data.choices[0].message.content);
    } catch (e) {
      console.log("[void] ai unavailable:", e.message);
      return null;
    }
  }

  async function aiCheckExistence(desc) {
    return aiCall([{
      role: "system",
      content: `You are the world's foremost multilingual lexicographer. You know every word in every language on Earth — common words, obscure words, archaic terms, slang, psychological jargon, philosophical concepts, and untranslatable words from all cultures.

Your job: when someone describes a feeling, you MUST check if ANY existing word captures it, even approximately. You should ERR ON THE SIDE OF YES. If the described feeling is even CLOSE to an existing word — a synonym, a hypernym, or a word from any language that covers 60%+ of the described experience — say it exists.

ONLY say "exists: false" if the description is a genuinely complex, multi-layered, contradictory emotional experience that no single word in any language captures. Simple feelings, common experiences, and basic human emotions ALWAYS have existing words.

Examples of things that EXIST:
- "the feeling after sex" → kenjataimu (Japanese), post-coital tristesse (French/psychology)
- "wanting to punch someone" → aggression, wrath, rage, Wut (German)
- "feeling small in nature" → sublime, awe, mono no aware
- "missing home" → hiraeth (Welsh), nostalgia, saudade (Portuguese)
- "the feeling of a perfect moment" → jouissance (French), ikigai (Japanese)
- "the ache when autumn arrives" → mono no aware (Japanese)
- "cringing at a old memory" → fremdschämen (German)

Examples of things that DON'T EXIST (truly unnamed):
- "the vertigo of realizing your parents were once confused teenagers who never figured it out"
- "the guilt of being relieved someone else got bad news instead of you"
- "the phantom itch of a conversation you rehearsed but never had"`
    }, {
      role: "user",
      content: `A person described this experience: "${desc}"

Does a word ALREADY EXIST in any language for this? Cast a WIDE net. Consider English, French, German, Japanese, Korean, Portuguese, Welsh, Finnish, Arabic, Sanskrit, Greek, Tagalog, Yoruba, and all other languages. Consider psychology terms, philosophy terms, slang, archaic terms.

Respond in EXACTLY this JSON format:
{"exists":true or false,"word":"the word (if exists)","language":"the language","pronunciation":"approximate pronunciation","definition":"a clear definition of the word","nudge":"If exists: suggest how they could describe the UNNAMED part beyond this word. If not exists: empty string"}`
    }]);
  }

  async function aiEnhance(word, desc, families, emotion) {
    return aiCall([{
      role: "user",
      content: `You are a poetic linguist. A new word "${word}" was invented for an unnamed human experience: "${desc}"

Constructed from ${families.join(" and ")} phonemic patterns. Emotional register: ${emotion.primary}/${emotion.secondary}.

Respond in EXACTLY this JSON:
{"definition":"A one-sentence poetic definition (max 25 words) capturing the feeling beautifully — do NOT just repeat the user's description","etymology":"A 2-sentence etymology explaining the linguistic roots poetically (mention: ${families.join(', ')})","roots":"FamilyA: quality1, quality2 · FamilyB: quality1, quality2 · Emotional register: ${emotion.primary}"}`
    }]);
  }

  /* ============================================
     CURSOR
     ============================================ */
  const Cursor = (() => {
    let mx = -100, my = -100, cx = -100, cy = -100;

    function tick() {
      cx += (mx - cx) * 0.14;
      cy += (my - cy) * 0.14;
      d.cursor.style.transform = `translate3d(${cx}px,${cy}px,0)`;
      d.aura.style.transform = `translate3d(${mx - 200}px,${my - 200}px,0)`;
      requestAnimationFrame(tick);
    }

    function init() {
      document.addEventListener("mousemove", e => { mx = e.clientX; my = e.clientY; });
      tick();

      const targets = "button, a, textarea, input, [data-magnetic], .dcard, .lex-card, .nav-item";
      document.addEventListener("mouseover", e => {
        if (e.target.closest(targets)) d.cursor.classList.add("hover");
      });
      document.addEventListener("mouseout", e => {
        if (e.target.closest(targets)) d.cursor.classList.remove("hover");
      });
    }
    return { init };
  })();

  /* ============================================
     MAGNETIC ELEMENTS
     ============================================ */
  function initMagnetic() {
    $$("[data-magnetic]").forEach(el => {
      el.addEventListener("mousemove", e => {
        const r = el.getBoundingClientRect();
        const x = e.clientX - r.left - r.width / 2;
        const y = e.clientY - r.top - r.height / 2;
        el.style.transform = `translate(${x * 0.15}px,${y * 0.15}px)`;
      });
      el.addEventListener("mouseleave", () => {
        el.style.transition = "transform .5s cubic-bezier(.4,0,.2,1)";
        el.style.transform = "translate(0,0)";
        setTimeout(() => { el.style.transition = ""; }, 500);
      });
    });
  }

  /* ============================================
     TEXT SCRAMBLE
     ============================================ */
  class Scramble {
    constructor(el) {
      this.el = el;
      this.chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&";
      this.raf = null;
    }
    setText(text) {
      const len = text.length;
      let frame = 0;
      const total = 30;
      return new Promise(resolve => {
        const step = () => {
          let out = "", done = 0;
          for (let i = 0; i < len; i++) {
            const p = frame / total, cp = i / len;
            if (p > cp + 0.3) { out += text[i]; done++; }
            else { out += this.chars[Math.floor(Math.random() * this.chars.length)]; }
          }
          this.el.textContent = out;
          frame++;
          if (done < len) this.raf = requestAnimationFrame(step);
          else { this.el.textContent = text; resolve(); }
        };
        step();
      });
    }
  }

  /* ============================================
     3D TILT
     ============================================ */
  function initTilt() {
    $$("[data-tilt]").forEach(card => {
      card.addEventListener("mousemove", e => {
        const r = card.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width;
        const y = (e.clientY - r.top) / r.height;
        card.style.transform = `perspective(700px) rotateX(${(0.5 - y) * 6}deg) rotateY(${(x - 0.5) * 6}deg) scale(1.008)`;
      });
      card.addEventListener("mouseleave", () => {
        card.style.transform = "perspective(700px) rotateX(0) rotateY(0) scale(1)";
      });
    });
  }

  /* ============================================
     NAVIGATION
     ============================================ */
  function goTo(name) {
    if (state.busy && name !== "scan") return;
    Object.values(secs).forEach(s => s.classList.remove("active"));
    requestAnimationFrame(() => { requestAnimationFrame(() => { secs[name].classList.add("active"); }); });
    state.current = name;
    const showNav = ["describe", "lexicon"].includes(name);
    d.nav.classList.toggle("hidden", !showNav);
    $$(".nav-item").forEach(b => b.classList.toggle("on", b.dataset.nav === name));
    if (name === "lexicon") renderLexicon();
  }

  /* ============================================
     INPUT
     ============================================ */
  function setupInput() {
    d.input.addEventListener("input", () => {
      const l = d.input.value.length;
      d.cc.textContent = l;
      d.btnGo.disabled = l < 15;
    });
    d.input.addEventListener("keydown", e => {
      if (e.key === "Enter" && !e.shiftKey && !d.btnGo.disabled) { e.preventDefault(); submit(); }
    });
  }

  /* ============================================
     SUBMIT
     ============================================ */
  async function submit() {
    const desc = d.input.value.trim();
    if (desc.length < 15 || state.busy) return;

    // Quick check: common emotion keywords
    const common = PhonemeEngine.checkCommonEmotion(desc);
    if (common) {
      d.aWord.textContent = common.word;
      d.aExplain.textContent = common.explain;
      goTo("already");
      return;
    }

    state.busy = true;
    goTo("scan");

    const langs = PhonemeEngine.getSearchLanguages();
    const localMatch = PhonemeEngine.findExistingMatch(desc);

    // Start AI existence check in parallel with scan animation
    const aiExistPromise = aiCheckExistence(desc);

    await runScan(langs, localMatch);

    // Check AI result first
    const aiResult = await aiExistPromise;

    if (aiResult && aiResult.exists && aiResult.word) {
      // AI found an existing word — show it
      state.busy = false;
      d.mWord.textContent = aiResult.word;
      d.mIpa.textContent = aiResult.pronunciation || "";
      d.mLang.textContent = aiResult.language || "";
      d.mDef.textContent = aiResult.definition || "";
      goTo("match");
      return;
    }

    if (localMatch && localMatch.confidence >= 0.35 && !aiResult) {
      // Fallback: local database match (AI unavailable)
      state.busy = false;
      showMatch(localMatch.match);
      return;
    }

    // No word exists — generate a new one
    const localResult = PhonemeEngine.nameTheUnnameable(desc);

    // Get AI-enhanced definition
    const enhanced = await aiEnhance(localResult.word, desc, localResult.families, localResult.emotion);
    if (enhanced) {
      if (enhanced.definition) localResult.definition = enhanced.definition;
      if (enhanced.etymology) localResult.etymology = enhanced.etymology;
      if (enhanced.roots) localResult.roots = enhanced.roots;
    }

    localResult.rawDefinition = desc.trim();
    state.result = localResult;
    state.busy = false;
    showReveal(localResult);
  }

  /* ============================================
     SCANNER
     ============================================ */
  async function runScan(langs, existing) {
    d.chipTray.innerHTML = "";
    d.progressFill.style.width = "0%";

    const total = Math.min(langs.length, 18);
    const matchLang = existing ? existing.match.language : null;
    const hitIdx = matchLang ? Math.min(Math.floor(total * 0.8), total - 2) : -1;

    d.scanLabel.textContent = "Parsing emotional topology...";
    await wait(500);

    for (let i = 0; i < total; i++) {
      const lang = (i === hitIdx && matchLang) ? matchLang : langs[i];
      const isHit = (lang === matchLang && i === hitIdx);

      d.progressFill.style.width = `${((i + 1) / total) * 100}%`;
      d.scanLabel.textContent = lang;

      const chip = document.createElement("span");
      chip.className = "chip";
      chip.textContent = lang;
      chip.style.animationDelay = `${i * 0.02}s`;
      d.chipTray.appendChild(chip);

      await wait(isHit ? 350 : 40 + Math.random() * 35);
      chip.classList.add(isHit ? "hit" : "miss");
      if (isHit) await wait(450);
      if (d.chipTray.children.length > 12) d.chipTray.firstChild.remove();
    }

    await wait(250);
    d.scanLabel.textContent = (!existing || existing.confidence < 0.35)
      ? "No match. Generating..."
      : "Match identified.";
    await wait(500);
  }

  /* ============================================
     SHOW RESULTS
     ============================================ */
  function showReveal(r) {
    d.wWord.textContent = "";
    d.wIpa.textContent = r.pronunciation;
    d.wDef.textContent = `"${r.rawDefinition || r.definition}"`;
    d.wEty.textContent = r.etymology;
    d.wRoots.textContent = r.roots;
    goTo("reveal");

    const scrambler = new Scramble(d.wWord);
    setTimeout(() => scrambler.setText(r.word), 800);
  }

  function showMatch(m) {
    d.mWord.textContent = m.word;
    d.mIpa.textContent = m.pronunciation || "";
    d.mLang.textContent = m.language;
    d.mDef.textContent = m.definition;
    goTo("match");
  }

  /* ============================================
     LEXICON
     ============================================ */
  function addToLexicon(r) {
    state.lexicon.unshift({
      word: r.word, pronunciation: r.pronunciation,
      definition: r.rawDefinition || r.definition,
      etymology: r.etymology, roots: r.roots,
      families: r.families, emotion: r.emotion.primary,
      timestamp: r.timestamp,
      id: Date.now().toString(36) + Math.random().toString(36).substr(2, 5)
    });
    localStorage.setItem("void_lexicon", JSON.stringify(state.lexicon));
  }

  function renderLexicon(filter) {
    const grid = d.lexGrid;
    grid.innerHTML = "";
    let entries = state.lexicon;
    if (filter) {
      const f = filter.toLowerCase();
      entries = entries.filter(e => e.word.toLowerCase().includes(f) || e.definition.toLowerCase().includes(f));
    }
    d.ctW.textContent = state.lexicon.length;
    const fams = new Set();
    state.lexicon.forEach(e => { if (e.families) e.families.forEach(f => fams.add(f)); });
    d.ctL.textContent = fams.size;

    if (entries.length === 0) { d.lexEmpty.classList.add("vis"); grid.style.display = "none"; return; }
    d.lexEmpty.classList.remove("vis"); grid.style.display = "grid";

    entries.forEach((entry, i) => {
      const card = document.createElement("div");
      card.className = "lex-card";
      card.style.animationDelay = `${i * 0.05}s`;
      const date = new Date(entry.timestamp).toLocaleDateString("en-US", { month: "short", day: "numeric" });
      card.innerHTML = `
        <div class="lc-word">${esc(entry.word)}</div>
        <div class="lc-ipa">${esc(entry.pronunciation)}</div>
        <div class="lc-def">"${esc(entry.definition)}"</div>
        <div class="lc-meta"><span>${date}</span><span class="lc-emotion">${esc(entry.emotion || "")}</span></div>
      `;
      grid.appendChild(card);
    });
  }

  function goDescribe() {
    d.input.value = ""; d.cc.textContent = "0"; d.btnGo.disabled = true;
    goTo("describe");
  }

  /* ============================================
     EVENTS
     ============================================ */
  function bind() {
    d.btnEnter.addEventListener("click", () => goTo("describe"));
    d.btnGo.addEventListener("click", submit);
    d.btnSave.addEventListener("click", () => {
      if (state.result) { addToLexicon(state.result); state.result = null; goTo("lexicon"); }
    });
    d.btnAgain.addEventListener("click", goDescribe);
    d.btnRetry.addEventListener("click", goDescribe);
    d.btnLexM.addEventListener("click", () => goTo("lexicon"));
    d.btnDeeper.addEventListener("click", goDescribe);
    d.btnNewLex.addEventListener("click", goDescribe);
    $$(".nav-item").forEach(b => b.addEventListener("click", () => {
      b.dataset.nav === "describe" ? goDescribe() : goTo(b.dataset.nav);
    }));
    d.lexSearch.addEventListener("input", e => renderLexicon(e.target.value));
  }

  /* ============================================
     UTILS
     ============================================ */
  function wait(ms) { return new Promise(r => setTimeout(r, ms)); }
  function esc(t) { const e = document.createElement("div"); e.textContent = t; return e.innerHTML; }

  /* ============================================
     INIT
     ============================================ */
  function init() {
    Cursor.init();
    initMagnetic();
    initTilt();
    setupInput();
    bind();
    goTo("landing");

    // Landing scramble
    $$("[data-scramble]").forEach(el => {
      const text = el.textContent;
      el.textContent = "";
      const s = new Scramble(el);
      const delay = parseFloat(el.closest("[data-delay]")?.dataset.delay || "0") * 1000 + 300;
      setTimeout(() => s.setText(text), delay);
    });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
